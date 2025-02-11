// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0

import { getWeb3Contract } from '@subwallet/extension-base/koni/api/contract-handler/evm/web3';
import { EvmApi } from '@subwallet/extension-base/services/chain-service/handler/EvmApi';

import { defaultTokens, fee2TickSpace, multicallAddress, piperv3FactoryAddress, piperv3QuoterAddress, v2ComputeAddress, v2RouterAddress, WIP_ADDRESS } from './constant';
import { multicallAbi, piperv3FactoryAbi, piperv3PoolAbi, piperv3QuoterAbi, v2PoolAbi, v2RouterAbi } from './piperx_abi';

interface Reserves {
  _reserve0: string;
  _reserve1: string;
  _blockTimestampLast: string;
}

export const v2GetPrice = async (
  token1: string,
  token2: string,
  evmApi: EvmApi
) => {
  const pairAddress = v2ComputeAddress(token1, token2);
  const pairContract = getWeb3Contract(pairAddress, evmApi, v2PoolAbi);

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const reserve = (await pairContract.methods.getReserves().call()) as Reserves;

    // Determine token order (tokens are stored in ascending order by address in Uniswap V2)
    const token1_ = token1.toLowerCase() < token2.toLowerCase() ? token1 : token2;

    const reserve0 = reserve._reserve0;
    const reserve1 = reserve._reserve1;
    // Calculate price based on reserves
    const price = token1_ === token1
      ? reserve1 / reserve0
      : reserve0 / reserve1;

    console.log('price', price);

    return price;
  } catch (error) {
    console.error('Error fetching reserves:', error);
    throw error;
  }
};

export const v3GetPrice = async (
  token1: string,
  token2: string,
  fee = 3000, // Default to 0.3% fee tier
  evmApi: EvmApi
): Promise<number> => {
  // Compute pool address using V3 factory
  const factory = getWeb3Contract(piperv3FactoryAddress, evmApi, piperv3FactoryAbi);
  const poolAddress = await factory.methods.getPool(token1, token2, fee).call();

  if (poolAddress === '0x0000000000000000000000000000000000000000') {
    throw new Error('Pool does not exist');
  }

  const poolContract = getWeb3Contract(poolAddress, evmApi, piperv3PoolAbi);

  try {
    const slot0 = await poolContract.methods.slot0().call();

    const sqrtPriceX96 = slot0.sqrtPriceX96;

    // Convert sqrtPriceX96 to regular price
    const price = (Number(sqrtPriceX96) / 2 ** 96) ** 2;

    // Determine if price needs to be inverted based on token order
    const token0 = await poolContract.methods.token0().call();

    console.log('token', [token0, token1]);

    return token0.toLowerCase() === token1.toLowerCase() ? price : 1 / price;
  } catch (error) {
    console.error('Error fetching V3 price:', error);
    throw error;
  }
};

export const v3RoutingExactInput = async (
  tokenIn: string,
  tokenOut: string,
  tokenInAmount: bigint,
  signerAddress: string,
  evmApi: EvmApi
): Promise<{ bestRoute: string[]; maxAmountOut: bigint }> => {
  const quoterContract = getWeb3Contract(piperv3QuoterAddress, evmApi, piperv3QuoterAbi);
  let bestRoute: string[] = [];
  let maxAmountOut = BigInt(0);

  const calls = Object.keys(fee2TickSpace).map((feeTier) => ({
    target: piperv3QuoterAddress,
    callData: quoterContract.methods
      .quoteExactInputSingle({
        tokenIn,
        tokenOut,
        fee: feeTier,
        amountIn: tokenInAmount.toString(),
        sqrtPriceLimitX96: '0'
      })
      .encodeABI()
  }));

  try {
    const multicallContract = getWeb3Contract(multicallAddress, evmApi, multicallAbi);
    const aggregateResult = await multicallContract.methods.tryAggregate(false, calls).call({
      from: signerAddress,
      gas: calls.length * 300000
    });

    aggregateResult.forEach(([success, returnData], i) => {
      if (success) {
        try {
          const decoded = web3.eth.abi.decodeParameters(['uint256', 'uint256'], returnData);
          const amountOut = BigInt(decoded[0]);

          if (amountOut > maxAmountOut) {
            maxAmountOut = amountOut;
            bestRoute = [tokenIn, Object.keys(fee2TickSpace)[i], tokenOut];
          }
        } catch (error) {
          console.log(`Error decoding result for fee tier ${Object.keys(fee2TickSpace)[i]}:`, error);
        }
      }
    });
  } catch (error) {
    console.error('Multicall tryAggregate failed:', error);
  }

  console.log('version3', [bestRoute, maxAmountOut]);

  return { bestRoute, maxAmountOut };
};

export const v2RoutingExactInput = async (
  tokenIn: string,
  tokenOut: string,
  tokenInAmount: bigint,
  evmApi: EvmApi
): Promise<{ bestRoute: string[]; maxAmountOut: bigint }> => {
  let bestRoute: string[] = [];
  let maxAmountOut = BigInt(0);

  try {
    if (!evmApi.api.utils.isAddress(tokenIn) || !evmApi.api.utils.isAddress(tokenOut)) {
      throw new Error('Invalid token address');
    }

    const v2RouterContract = getWeb3Contract(v2RouterAddress, evmApi, v2RouterAbi);

    // Direct route calculation
    try {
      const directResult = await v2RouterContract.methods
        .getAmountsOut(tokenInAmount.toString(), [tokenIn, tokenOut])
        .call();

      if (directResult && directResult.length > 1) {
        maxAmountOut = BigInt(directResult[1]);
        bestRoute = [tokenIn, tokenOut];
      }
    } catch (error) {
      console.log('Error in direct route calculation:', error);
    }

    // Multicall for intermediate tokens
    const calls: any[] = [];
    const intermediateTokens = defaultTokens.filter(
      (intermediateToken) => intermediateToken !== tokenIn && intermediateToken !== tokenOut
    );

    for (const intermediateToken of intermediateTokens) {
      const callData = v2RouterContract.methods
        .getAmountsOut(tokenInAmount.toString(), [tokenIn, intermediateToken, tokenOut])
        .encodeABI();

      calls.push({ target: v2RouterAddress, callData });
    }

    try {
      const multicallContract = getWeb3Contract(multicallAddress, evmApi, multicallAbi);
      const aggregateResult = await multicallContract.methods
        .tryAggregate(false, calls)
        .call();

      for (let i = 0; i < aggregateResult.length; i++) {
        const [success, returnData] = aggregateResult[i];

        if (success) {
          try {
            const result = v2RouterContract.methods.getAmountsOut(tokenInAmount.toString(), []).decode(returnData);
            const amountOut = BigInt(result[result.length - 1]);

            if (amountOut > maxAmountOut) {
              maxAmountOut = amountOut;
              bestRoute = [tokenIn, intermediateTokens[i], tokenOut];
            }
          } catch (error) {
            console.log(`Error decoding result for ${intermediateTokens[i]}:`, error);
          }
        }
      }
    } catch (error) {
      console.log('Multicall tryAggregate failed:', error);
    }
  } catch (error) {
    console.error('Error in v2RoutingExactInput:', error);
  }

  console.log('Final route and amount:', { bestRoute, maxAmountOut });

  return { bestRoute, maxAmountOut };
};

export const routingExactInput = async (
  tokenIn: string,
  tokenOut: string,
  tokenInAmount: bigint,
  signerAddress: string,
  evmApi: EvmApi
): Promise<{ bestRoute: string[]; maxAmountOut: bigint }> => {
  const { bestRoute: bestRouteV2, maxAmountOut: maxAmountOutV2 } = await v2RoutingExactInput(tokenIn, tokenOut, tokenInAmount, evmApi);
  const { bestRoute: bestRouteV3, maxAmountOut: maxAmountOutV3 } = await v3RoutingExactInput(tokenIn, tokenOut, tokenInAmount, signerAddress, evmApi);

  return maxAmountOutV2 > maxAmountOutV3
    ? { bestRoute: bestRouteV2, maxAmountOut: maxAmountOutV2 }
    : { bestRoute: bestRouteV3, maxAmountOut: maxAmountOutV3 };
};

export const v2Swap = async (
  amount1: bigint,
  amount2Min: bigint,
  path: string[],
  address: string,
  expirationTimestamp: bigint,
  evmApi: EvmApi,
  customGasLimit?: number
) => {
  try {
    const router = getWeb3Contract(v2RouterAddress, evmApi, v2RouterAbi);

    console.log('path', [path, path[0]]);

    // Get current gas price and add 20% to ensure faster processing
    const gasPrice = await evmApi.api.eth.getGasPrice();
    const adjustedGasPrice = (BigInt(gasPrice) * BigInt(120)) / BigInt(100);

    const txOptions = {
      gasPrice: adjustedGasPrice,
      ...(customGasLimit ? { gasLimit: customGasLimit } : {}) // Only include gasLimit if custom value provided
    };

    let tx;

    if (path[0] == WIP_ADDRESS) {
      tx = await router.methods.swapExactETHForTokens(
        amount2Min,
        path,
        address,
        expirationTimestamp,
        {
          ...txOptions,
          value: amount1
        }
      );
    } else if (path[path.length - 1] == WIP_ADDRESS) {
      tx = await router.methods.swapExactTokensForETH(
        amount1,
        amount2Min,
        path,
        address,
        expirationTimestamp,
        txOptions
      );
    } else {
      tx = await router.methods.swapExactTokensForTokens(
        amount1,
        amount2Min,
        path,
        address,
        expirationTimestamp,
        txOptions
      );
    }

    console.log('Transaction submitted:', tx.hash);

    return tx.wait();
  } catch (error) {
    console.error('Error in swap:', error);
    throw error;
  }
};
