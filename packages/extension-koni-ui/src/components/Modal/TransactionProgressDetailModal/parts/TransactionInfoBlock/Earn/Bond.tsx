// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { RequestBondingSubmit, StakingType } from '@subwallet/extension-base/background/KoniTypes';
import { getValidatorLabel } from '@subwallet/extension-base/koni/api/staking/bonding/utils';
import { CommonFeeComponent, SummaryEarningProcessData } from '@subwallet/extension-base/types';
import CommonTransactionInfo from '@subwallet/extension-koni-ui/components/Confirmation/CommonTransactionInfo';
import MetaInfo from '@subwallet/extension-koni-ui/components/MetaInfo/MetaInfo';
import { useGetChainPrefixBySlug, useSelector } from '@subwallet/extension-koni-ui/hooks';
import useGetNativeTokenBasicInfo from '@subwallet/extension-koni-ui/hooks/common/useGetNativeTokenBasicInfo';
import { getCurrentCurrencyTotalFee } from '@subwallet/extension-koni-ui/utils';
import CN from 'classnames';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { TransactionInfoBlockProps } from '../types';

type Props = TransactionInfoBlockProps;

const Component: React.FC<Props> = (props: Props) => {
  const { className, progressData } = props;

  const combineInfo = useMemo(() => (progressData.combineInfo as SummaryEarningProcessData), [progressData.combineInfo]);
  const data = useMemo(() => (combineInfo.data as unknown as RequestBondingSubmit), [combineInfo.data]);

  const assetRegistryMap = useSelector((state) => state.assetRegistry.assetRegistry);
  const { currencyData, priceMap } = useSelector((state) => state.price);

  const handleValidatorLabel = useMemo(() => {
    return getValidatorLabel(combineInfo.brief.chain);
  }, [combineInfo.brief.chain]);
  const networkPrefix = useGetChainPrefixBySlug(combineInfo.brief.chain);

  const { t } = useTranslation();

  const { decimals, symbol } = useGetNativeTokenBasicInfo(combineInfo.brief.chain);

  const estimatedFeeValue = useMemo(() => {
    const feeComponents: CommonFeeComponent[] = progressData.steps.reduce((previousValue, currentStep) => {
      return [
        ...previousValue,
        ...currentStep.fee.feeComponent
      ];
    }, [] as CommonFeeComponent[]);

    return getCurrentCurrencyTotalFee(feeComponents, assetRegistryMap, priceMap);
  }, [assetRegistryMap, priceMap, progressData.steps]);

  return (
    <div className={CN(className)}>
      <MetaInfo
        className={'meta-info'}
        hasBackgroundWrapper
        spaceSize={'xs'}
      >
        <CommonTransactionInfo
          address={data.address}
          network={combineInfo.brief.chain}
          onlyReturnInnerContent
        />

        <MetaInfo.AccountGroup
          accounts={data.selectedValidators}
          content={t(`{{number}} selected ${handleValidatorLabel.toLowerCase()}`, { replace: { number: data.selectedValidators.length } })}
          identPrefix={networkPrefix}
          label={t(data.type === StakingType.POOLED ? 'Pool' : handleValidatorLabel)}
        />

        <MetaInfo.Number
          decimals={decimals}
          label={t('Amount')}
          suffix={symbol}
          value={data.amount}
        />

        <MetaInfo.Number
          decimals={0}
          label={'Estimated fee'}
          prefix={(currencyData.isPrefix && currencyData.symbol) || ''}
          suffix={(!currencyData.isPrefix && currencyData.symbol) || ''}
          value={estimatedFeeValue}
        />
      </MetaInfo>
    </div>
  );
};

export const NativeStakingProcessConfirmation = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {
    '.__meta-info-wrapper.__meta-info-wrapper': {
      paddingTop: token.padding,
      paddingBottom: token.padding
    }
  };
});
