// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TokenHasBalanceInfo } from '@subwallet/extension-base/services/fee-service/interfaces';
import { swapCustomFormatter } from '@subwallet/extension-base/utils';
import ChooseFeeItem from '@subwallet/extension-koni-ui/components/Field/TransactionFee/FeeEditor/ChooseFeeItem';
import { RootState } from '@subwallet/extension-koni-ui/stores';
import { ThemeProps } from '@subwallet/extension-koni-ui/types';
import { ModalContext, Number, SwModal } from '@subwallet/react-ui';
import BigN from 'bignumber.js';
import CN from 'classnames';
import React, { useCallback, useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

type Props = ThemeProps & {
  modalId: string,
  convertedFeeValueToUSD: string | number | BigN,
  items: TokenHasBalanceInfo[] | undefined,
  onSelectItem: (slug: string) => void,
  selectedItem?: string,
}
const numberMetadata = { maxNumberFormat: 8 };

// TODO: Merge this component with ChooseFeeTokenModal in Swap.
const Component: React.FC<Props> = (props: Props) => {
  const { className, convertedFeeValueToUSD, items, modalId, onSelectItem, selectedItem } = props;
  const { currencyData } = useSelector((state: RootState) => state.price);
  const { inactiveModal } = useContext(ModalContext);

  const onCancel = useCallback(() => {
    inactiveModal(modalId);
  }, [inactiveModal, modalId]);

  return (
    <>
      <SwModal
        className={CN(className, 'choose-fee-token-container')}
        closable={true}
        destroyOnClose={true}
        id={modalId}
        onCancel={onCancel}
        title={'Choose fee token'}
      >
        <div className={'__choose-fee-wrapper'}>
          <div className={'__estimate-fee'}>
            <span className={'__title'}>Estimated  fee</span>
            <Number
              className={'__value'}
              customFormatter={swapCustomFormatter}
              decimal={0}
              decimalOpacity={0.45}
              formatType={'custom'}
              metadata={numberMetadata}
              prefix={(currencyData.isPrefix && currencyData.symbol) || ''}
              size={30}
              suffix={(!currencyData.isPrefix && currencyData.symbol) || ''}
              value={convertedFeeValueToUSD}
            />
            <span className={'__pay-with'}>Pay with token:</span>
          </div>
          {items && items.map((item, index) => (
            <ChooseFeeItem
              amountToPay={convertedFeeValueToUSD}
              balance={item?.free}
              key={`${item.slug}-${index}`}
              onSelect={onSelectItem}
              selected={selectedItem === item.slug}
              slug={item.slug}
            />
          ))}
        </div>
      </SwModal>
    </>
  );
};

const ChooseFeeTokenModal = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {
    '.__estimate-fee': {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24
    },
    '.__title': {
      fontSize: 14,
      fontWeight: token.bodyFontWeight,
      lineHeight: token.lineHeight,
      color: token.colorTextTertiary
    },
    '.__pay-with': {
      fontSize: 14,
      fontWeight: token.fontWeightStrong,
      lineHeight: token.lineHeight,
      color: token.colorTextTertiary
    },
    '.__value': {
      fontSize: token.fontSizeHeading2,
      lineHeight: token.lineHeightHeading2,
      fontWeight: token.fontWeightStrong,
      color: token.colorTextLight1,

      '.ant-number-integer, ant-number-prefix': {
        color: 'inherit !important',
        fontSize: 'inherit !important',
        fontWeight: `${token.fontWeightStrong}px !important`,
        lineHeight: 'inherit'
      },

      '.ant-number-decimal': {
        color: `${token.colorTextLight3} !important`,
        fontSize: `${token.fontSizeHeading3}px !important`,
        fontWeight: 'inherit !important',
        lineHeight: token.lineHeightHeading3
      }
    }

  };
});

export default ChooseFeeTokenModal;
