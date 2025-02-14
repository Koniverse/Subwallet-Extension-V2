// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { _ChainAsset } from '@subwallet/chain-list/types';
import { _getAssetDecimals, _getAssetSymbol, _getChainName } from '@subwallet/extension-base/services/chain-service/utils';
import { BaseStepType, BriefSwapStep, CommonStepType, ProcessStep, SummaryEarningProcessData, SwapStepType, YieldPoolType, YieldStepType } from '@subwallet/extension-base/types';
import { ProgressStepItem } from '@subwallet/extension-koni-ui/components';
import { useSelector } from '@subwallet/extension-koni-ui/hooks';
import { RootState } from '@subwallet/extension-koni-ui/stores';
import { ThemeProps } from '@subwallet/extension-koni-ui/types';
import { toDisplayNumber } from '@subwallet/extension-koni-ui/utils';
import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

type Props = ThemeProps & {
  processStep: ProcessStep,
  index: number,
  isLastItem?: boolean;
  combineInfo: unknown;
};

const Component: FC<Props> = (props: Props) => {
  const { className, combineInfo, index, isLastItem, processStep } = props;
  const { t } = useTranslation();
  const chainInfoMap = useSelector((root) => root.chainStore.chainInfoMap);
  const assetRegistry = useSelector((root: RootState) => root.assetRegistry.assetRegistry);

  const text = useMemo(() => {
    if (([
      CommonStepType.XCM,
      YieldStepType.XCM
    ] as BaseStepType[]).includes(processStep.type)) {
      const analysisMetadata = () => {
        try {
          const { destinationTokenInfo, originTokenInfo, sendingValue } = processStep.metadata as unknown as {
            sendingValue: string,
            originTokenInfo: _ChainAsset,
            destinationTokenInfo: _ChainAsset
          };

          return {
            tokenValue: toDisplayNumber(sendingValue, originTokenInfo.decimals || 0),
            tokenSymbol: _getAssetSymbol(originTokenInfo),
            chainName: _getChainName(chainInfoMap[originTokenInfo.originChain]),
            destChainName: _getChainName(chainInfoMap[destinationTokenInfo.originChain])
          };
        } catch (e) {
          console.log('analysisMetadata error', e);

          return {
            tokenValue: '',
            tokenSymbol: '',
            chainName: '',
            destChainName: ''
          };
        }
      };

      return t('Transfer {{tokenValue}} {{tokenSymbol}} from {{chainName}} to {{destChainName}}', {
        replace: {
          ...analysisMetadata()
        }
      });
    }

    if (processStep.type === SwapStepType.SWAP) {
      const analysisMetadata = () => {
        try {
          const { fromAmount, pair, toAmount } = processStep.metadata as unknown as BriefSwapStep;
          const fromAsset = assetRegistry[pair.from];
          const toAsset = assetRegistry[pair.to];

          return {
            fromTokenValue: toDisplayNumber(fromAmount, _getAssetDecimals(fromAsset)),
            fromTokenSymbol: _getAssetSymbol(fromAsset),
            toTokenValue: toDisplayNumber(toAmount, _getAssetDecimals(toAsset)),
            toTokenSymbol: _getAssetSymbol(toAsset)
          };
        } catch (e) {
          console.log('analysisMetadata error', e);

          return {
            fromTokenValue: '',
            fromTokenSymbol: '',
            toTokenValue: '',
            toTokenSymbol: ''
          };
        }
      };

      return t('Swap {{fromTokenValue}} {{fromTokenSymbol}} for {{toTokenValue}} {{toTokenSymbol}}', {
        replace: {
          ...analysisMetadata()
        }
      });
    }

    if (([
      CommonStepType.TOKEN_APPROVAL,
      YieldStepType.TOKEN_APPROVAL
    ] as BaseStepType[]).includes(processStep.type)) {
      const analysisMetadata = () => {
        try {
          const { tokenApprove } = processStep.metadata as unknown as {
            tokenApprove: string,
          };

          const asset = assetRegistry[tokenApprove];

          return {
            tokenSymbol: _getAssetSymbol(asset),
            chainName: _getChainName(chainInfoMap[asset.originChain])
          };
        } catch (e) {
          console.log('analysisMetadata error', e);

          return {
            tokenSymbol: '',
            chainName: ''
          };
        }
      };

      return t('Approve {{tokenSymbol}} on {{chainName}} for transfer', {
        replace: {
          ...analysisMetadata()
        }
      });
    }

    if (([
      YieldStepType.NOMINATE,
      YieldStepType.JOIN_NOMINATION_POOL,
      YieldStepType.MINT_VDOT,
      YieldStepType.MINT_VMANTA,
      YieldStepType.MINT_LDOT,
      YieldStepType.MINT_QDOT,
      YieldStepType.MINT_SDOT,
      YieldStepType.MINT_STDOT
    ] as BaseStepType[]).includes(processStep.type)) {
      const analysisMetadata = () => {
        try {
          const { brief } = combineInfo as SummaryEarningProcessData;

          const asset = assetRegistry[brief.token];
          const earnMethod = (() => {
            if (brief.method === YieldPoolType.NOMINATION_POOL) {
              return t('nomination pool');
            }

            if (brief.method === YieldPoolType.NATIVE_STAKING) {
              return t('direct nomination');
            }

            if (brief.method === YieldPoolType.PARACHAIN_STAKING) {
              return t('parachain staking');
            }

            return t('liquid staking');
          })();

          return {
            tokenValue: toDisplayNumber(brief.amount, _getAssetDecimals(asset)),
            tokenSymbol: _getAssetSymbol(asset),
            earnMethod
          };
        } catch (e) {
          console.log('analysisMetadata error', e);

          return {
            tokenValue: '',
            tokenSymbol: '',
            earnMethod: ''
          };
        }
      };

      return t('Stake {{tokenValue}} {{tokenSymbol}} via {{earnMethod}}', {
        replace: {
          ...analysisMetadata()
        }
      });
    }

    return '';
  }, [assetRegistry, chainInfoMap, combineInfo, processStep.metadata, processStep.type, t]);

  return (
    <ProgressStepItem
      className={className}
      index={index}
      isLastItem={isLastItem}
      status={processStep.status}
      text={text}
    />
  );
};

export const Item = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return ({

  });
});
