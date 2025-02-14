// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { _getAssetDecimals, _getAssetPriceId, _getAssetSymbol } from '@subwallet/extension-base/services/chain-service/utils';
import { swapCustomFormatter } from '@subwallet/extension-base/utils';
import { BN_TEN } from '@subwallet/extension-koni-ui/constants';
import { useSelector } from '@subwallet/extension-koni-ui/hooks';
import { ThemeProps } from '@subwallet/extension-koni-ui/types';
import { Icon, Logo, Number } from '@subwallet/react-ui';
import BigN from 'bignumber.js';
import CN from 'classnames';
import { CheckCircle } from 'phosphor-react';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

type Props = ThemeProps & {
  slug: string,
  amountToPay: string | number | BigN,
  selected?: boolean,
  onSelect?: (slug: string) => void,
  balance: string,
}
const numberMetadata = { maxNumberFormat: 8 };

// TODO: Merge this component with ChooseFeeItem in Swap.
const Component: React.FC<Props> = (props: Props) => {
  const { amountToPay, balance, className, onSelect, selected, slug } = props;
  const assetRegistryMap = useSelector((state) => state.assetRegistry.assetRegistry);
  const priceMap = useSelector((state) => state.price.priceMap);
  const { t } = useTranslation();
  const _onSelect = useCallback(() => {
    onSelect?.(slug);
  }, [onSelect, slug]);

  const feeAssetInfo = useMemo(() => {
    return (slug ? assetRegistryMap[slug] : undefined);
  }, [assetRegistryMap, slug]);

  const decimal = _getAssetDecimals(feeAssetInfo);

  const convertedAmountToPay = useMemo(() => {
    if (!priceMap[_getAssetPriceId(feeAssetInfo)] || !priceMap[_getAssetPriceId(feeAssetInfo)]) {
      return undefined;
    }

    return new BigN(amountToPay).div(priceMap[_getAssetPriceId(feeAssetInfo)] || 0);
  }, [amountToPay, feeAssetInfo, priceMap]);

  const isDisableItem = useMemo(() => {
    if (!convertedAmountToPay) {
      return true;
    }

    return (new BigN(balance).dividedBy(BN_TEN.pow(decimal || 0))).lte(new BigN(convertedAmountToPay));
  }, [balance, convertedAmountToPay, decimal]);

  return (
    <>
      <div
        className={CN(className, '__choose-fee-item-wrapper', { '__is-disable': isDisableItem })}
        onClick={isDisableItem ? undefined : _onSelect}
      >
        <div className={'__left-part'}>
          <Logo
            className='token-logo'
            isShowSubLogo={false}
            shape='squircle'
            size={40}
            token={slug.toLowerCase()}
          />
          <div className={'__fee-info'}>
            <div className={'__line-1'}>
              {convertedAmountToPay
                ? (<Number
                  className={'__amount-fee-info'}
                  customFormatter={swapCustomFormatter}
                  decimal={0}
                  formatType={'custom'}
                  metadata={numberMetadata}
                  suffix={_getAssetSymbol(feeAssetInfo)}
                  value={convertedAmountToPay}
                />)
                : <div className={'__fee-symbol'}>{_getAssetSymbol(feeAssetInfo)}</div>
              }
            </div>
            <div className={'__line-2'}>
              <span className={'__label-available-balance'}>{t('Available balance:')}&nbsp;</span>
              <Number
                className={'__available-balance-info'}
                customFormatter={swapCustomFormatter}
                decimal={decimal}
                formatType={'custom'}
                metadata={numberMetadata}
                suffix={_getAssetSymbol(feeAssetInfo)}
                value={balance}
              />
            </div>
          </div>
        </div>
        {selected && (
          <Icon
            className='check-icon'
            phosphorIcon={CheckCircle}
            size='md'
            weight='fill'
          />
        )}
      </div>
    </>
  );
};

const ChooseFeeItem = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: token.colorBgSecondary,
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    cursor: 'pointer',

    '&.__is-disable': {
      backgroundColor: token.colorBgSecondary,
      opacity: '0.4',
      pointerEvents: 'none',
      cursor: 'not_allowed'
    },

    '.__left-part': {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    },

    '.__available-balance-info': {
      fontSize: 12,
      lineHeight: token.lineHeightSM,
      fontWeight: token.bodyFontWeight,
      color: token.colorTextDescription,

      '.ant-number, .ant-typography': {
        color: 'inherit !important',
        fontSize: 'inherit !important',
        fontWeight: 'inherit !important',
        lineHeight: 'inherit'
      }
    },

    '.__fee-info': {
      fontSize: 16,
      lineHeight: token.lineHeightLG,
      fontWeight: token.fontWeightStrong,
      color: token.colorWhite
    },

    '.__line-2': {
      fontSize: 12,
      lineHeight: token.lineHeightSM,
      fontWeight: token.bodyFontWeight,
      color: token.colorTextDescription,
      display: 'flex',
      alignItems: 'baseline',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },

    '.check-icon': {
      color: token.colorSuccess
    }
  };
});

export default ChooseFeeItem;
