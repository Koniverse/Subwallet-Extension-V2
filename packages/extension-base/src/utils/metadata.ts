// Copyright 2019-2022 @subwallet/extension-base
// SPDX-License-Identifier: Apache-2.0

import { ChainService } from '@subwallet/extension-base/services/chain-service';
import { _SubstrateApi } from '@subwallet/extension-base/services/chain-service/types';

import { ApiPromise } from '@polkadot/api';
import { getSpecExtensions, getSpecTypes } from '@polkadot/types-known';
import { u8aToHex } from '@polkadot/util';
import { HexString } from '@polkadot/util/types';
import { ExtraInfo, merkleizeMetadata } from '@polkadot-api/merkleize-metadata';

export const _isRuntimeUpdated = (signedExtensions?: string[]): boolean => {
  return signedExtensions ? signedExtensions.includes('CheckMetadataHash') : false;
};

export const calculateMetadataHash = (extraInfo: ExtraInfo, metadataV15: HexString): string => {
  const _merkleizeMetadata = merkleizeMetadata(metadataV15, extraInfo);

  return u8aToHex(_merkleizeMetadata.digest());
};

export const getShortMetadata = (blob: HexString, extraInfo: ExtraInfo, metadata: HexString): string => {
  const _merkleizeMetadata = merkleizeMetadata(metadata, extraInfo);

  return u8aToHex(_merkleizeMetadata.getProofForExtrinsicPayload(blob));
};

const getMetadataV15 = async (api: ApiPromise): Promise<HexString | undefined> => {
  try {
    if (api.call.metadata.metadataAtVersion) {
      const metadataV15 = await api.call.metadata.metadataAtVersion(15);

      if (!metadataV15.isEmpty) {
        return metadataV15.unwrap().toHex();
      }
    }
  } catch (err) {
    console.error('Error fetching metadata V15:', err);
  }

  return undefined;
};

export const cacheMetadata = (
  chain: string,
  substrateApi: _SubstrateApi,
  chainService?: ChainService
): void => {
  // Update metadata to database with async methods
  substrateApi.api.isReady.then(async (api) => {
    const currentSpecVersion = api.runtimeVersion.specVersion.toString();
    const specName = api.runtimeVersion.specName.toString();
    const genesisHash = api.genesisHash.toHex();
    const metadata = await chainService?.getMetadata(chain);

    // Avoid date existed metadata
    if (metadata && metadata.specVersion === currentSpecVersion && metadata.genesisHash === genesisHash) {
      return;
    }

    const systemChain = api.runtimeChain;
    // const _metadata: Option<OpaqueMetadata> = await api.call.metadata.metadataAtVersion(15);
    // const metadataHex = _metadata.isSome ? _metadata.unwrap().toHex().slice(2) : ''; // Need unwrap to create metadata object

    const [metadataHex, hexV15] = await Promise.all([
      Promise.resolve(api.runtimeMetadata.toHex()),
      getMetadataV15(api)
    ]);

    chainService?.upsertMetadata(chain, {
      chain: chain,
      genesisHash: genesisHash,
      specName: specName,
      specVersion: currentSpecVersion,
      hexValue: metadataHex,
      types: getSpecTypes(api.registry, systemChain, api.runtimeVersion.specName, api.runtimeVersion.specVersion) as unknown as Record<string, string>,
      userExtensions: getSpecExtensions(api.registry, systemChain, api.runtimeVersion.specName),
      hexV15
    }).catch(console.error);
  }).catch(console.error);
};
