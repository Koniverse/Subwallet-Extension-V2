// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SubmitJoinNominationPool, SummaryEarningProcessData } from '@subwallet/extension-base/types';
import CommonTransactionInfo from '@subwallet/extension-koni-ui/components/Confirmation/CommonTransactionInfo';
import MetaInfo from '@subwallet/extension-koni-ui/components/MetaInfo/MetaInfo';
import useGetNativeTokenBasicInfo from '@subwallet/extension-koni-ui/hooks/common/useGetNativeTokenBasicInfo';
import CN from 'classnames';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { TransactionInfoBlockProps } from '../types';

type Props = TransactionInfoBlockProps;

const Component: React.FC<Props> = (props: Props) => {
  const { className, progressData } = props;
  const combineInfo = useMemo(() => (progressData.combineInfo as SummaryEarningProcessData), [progressData.combineInfo]);
  const data = useMemo(() => (combineInfo.data as unknown as SubmitJoinNominationPool), [combineInfo.data]);

  const { t } = useTranslation();
  const { decimals, symbol } = useGetNativeTokenBasicInfo(combineInfo.brief.chain);

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

        <MetaInfo.Account
          address={data.selectedPool.address}
          label={t('Pool')}
          networkPrefix={42}
        />

        {/* <MetaInfo.AccountGroup */}
        {/*  accounts={data.address} */}
        {/*  content={t(`${data.selectedValidators.length} selected validators`)} */}
        {/*  label={t('Pool')} */}
        {/* /> */}

        <MetaInfo.Number
          decimals={decimals}
          label={t('Amount')}
          suffix={symbol}
          value={data.amount}
        />

        <MetaInfo.Number
          decimals={decimals}
          label={t('Estimated fee')}
          suffix={symbol}
          value={0}
        />
      </MetaInfo>
    </div>
  );
};

export const NominationPoolProcessConfirmation = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {
    '.__meta-info-wrapper.__meta-info-wrapper': {
      paddingTop: token.padding,
      paddingBottom: token.padding
    }
  };
});
