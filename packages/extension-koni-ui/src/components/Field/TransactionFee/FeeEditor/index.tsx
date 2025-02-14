// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { _getAssetDecimals, _getAssetPriceId, _getAssetSymbol } from '@subwallet/extension-base/services/chain-service/utils';
import { TokenHasBalanceInfo } from '@subwallet/extension-base/services/fee-service/interfaces';
import { FeeDetail, TransactionFee } from '@subwallet/extension-base/types';
import { BN_ZERO } from '@subwallet/extension-base/utils';
import ChooseFeeTokenModal from '@subwallet/extension-koni-ui/components/Field/TransactionFee/FeeEditor/ChooseFeeTokenModal';
import { ASSET_HUB_CHAIN_SLUGS, BN_TEN, CHOOSE_FEE_TOKEN_MODAL } from '@subwallet/extension-koni-ui/constants';
import { useSelector } from '@subwallet/extension-koni-ui/hooks';
import { ThemeProps } from '@subwallet/extension-koni-ui/types';
import { Icon, ModalContext, Number, Tooltip } from '@subwallet/react-ui';
import BigN from 'bignumber.js';
import CN from 'classnames';
import { PencilSimpleLine } from 'phosphor-react';
import React, { useCallback, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { FeeEditorModal } from './FeeEditorModal';

export type RenderFieldNodeParams = {
  isLoading: boolean;
  feeInfo: {
    decimals: number,
    symbol: string,
    value: BigN,
    convertedValue: BigN
  },
  disableEdit: boolean,
  onClickEdit: VoidFunction
}

type Props = ThemeProps & {
  onSelect?: (option: TransactionFee) => void;
  isLoading?: boolean;
  tokenSlug: string;
  feeOptionsInfo?: FeeDetail;
  estimateFee: string;
  renderFieldNode?: (params: RenderFieldNodeParams) => React.ReactNode;
  feeType?: string;
  loading?: boolean;
  listTokensCanPayFee: TokenHasBalanceInfo[];
  onSetTokenPayFee: (slug: string) => void;
  currentTokenPayFee?: string;
  chainValue?: string;
  destChainValue?: string;
  selectedFeeOption?: TransactionFee
};

// todo: will update dynamic later
const modalId = 'FeeEditorModalId';

const Component = ({ chainValue, className, currentTokenPayFee, destChainValue, estimateFee, feeOptionsInfo, feeType, isLoading = false, listTokensCanPayFee, loading, onSelect, onSetTokenPayFee, renderFieldNode, selectedFeeOption, tokenSlug }: Props): React.ReactElement<Props> => {
  const { t } = useTranslation();
  const { activeModal } = useContext(ModalContext);
  const assetRegistry = useSelector((root) => root.assetRegistry.assetRegistry);
  // @ts-ignore
  const priceMap = useSelector((state) => state.price.priceMap);

  const tokenAsset = (() => {
    return assetRegistry[tokenSlug] || undefined;
  })();

  const decimals = _getAssetDecimals(tokenAsset);
  // @ts-ignore
  const priceId = _getAssetPriceId(tokenAsset);
  const priceValue = priceMap[priceId] || 0;
  const symbol = _getAssetSymbol(tokenAsset);

  const feeValue = useMemo(() => {
    return BN_ZERO;
  }, []);

  const feePriceValue = useMemo(() => {
    return BN_ZERO;
  }, []);

  const convertedFeeValueToUSD = useMemo(() => {
    return new BigN(estimateFee)
      .multipliedBy(priceValue)
      .dividedBy(BN_TEN.pow(decimals || 0))
      .toNumber();
  }, [decimals, estimateFee, priceValue]);

  const onClickEdit = useCallback(() => {
    setTimeout(() => {
      if (chainValue && ASSET_HUB_CHAIN_SLUGS.includes(chainValue)) {
        activeModal(CHOOSE_FEE_TOKEN_MODAL);
      } else {
        activeModal(modalId);
      }
    }, 100);
  }, [activeModal, chainValue]);

  const onSelectTransactionFee = useCallback((fee: TransactionFee) => {
    onSelect?.(fee);
  }, [onSelect]);

  const customFieldNode = useMemo(() => {
    if (!renderFieldNode) {
      return null;
    }

    return renderFieldNode({
      isLoading: isLoading,
      feeInfo: {
        decimals,
        symbol,
        value: feeValue,
        convertedValue: feePriceValue
      },
      disableEdit: isLoading,
      onClickEdit
    });
  }, [decimals, feeValue, isLoading, onClickEdit, renderFieldNode, symbol, feePriceValue]);

  const isEditButton = useMemo(() => {
    const isXcm = chainValue && destChainValue && chainValue !== destChainValue;

    return !!(chainValue && listTokensCanPayFee.length > 0 && (ASSET_HUB_CHAIN_SLUGS.includes(chainValue) || feeType === 'evm')) && !isXcm;
  }, [chainValue, destChainValue, feeType, listTokensCanPayFee?.length]);

  return (
    <>
      {
        customFieldNode || (
          <div className={CN(className, '__estimate-fee-wrapper')}>
            <div className='__field-left-part'>
              <div className='__field-label'>
                {t('Estimate fee')}:
              </div>

              <Number
                className={'__fee-value'}
                decimal={decimals}
                suffix={symbol}
                value={estimateFee}
              />
            </div>
            {feeType !== 'ton' && (
              <div className='__field-right-part'>
                <div
                  className='__fee-editor-area'
                >
                  <Number
                    className={'__fee-price-value'}
                    decimal={0}
                    prefix={'~ $'}
                    value={convertedFeeValueToUSD}
                  />
                  <Tooltip
                    placement='leftTop'
                    title={isEditButton ? undefined : t('Coming soon!')}
                  >
                    <div onClick={ isEditButton ? onClickEdit : undefined}>
                      <Icon
                        className={'__edit-icon'}
                        customSize={'20px'}
                        phosphorIcon={PencilSimpleLine}
                      />
                    </div>
                  </Tooltip>
                </div>
              </div>
            )}
          </div>
        )
      }

      <FeeEditorModal
        chainValue={chainValue}
        currentTokenPayFee={currentTokenPayFee}
        decimals={decimals}
        feeOptionsInfo={feeOptionsInfo}
        feeType={feeType}
        listTokensCanPayFee={listTokensCanPayFee}
        modalId={modalId}
        onSelectOption={onSelectTransactionFee}
        onSetTokenPayFee={onSetTokenPayFee}
        priceValue={priceValue}
        selectedFeeOption={selectedFeeOption}
        symbol={symbol}
        tokenSlug={tokenSlug}
      />

      <ChooseFeeTokenModal
        convertedFeeValueToUSD={convertedFeeValueToUSD}
        items={listTokensCanPayFee}
        modalId={CHOOSE_FEE_TOKEN_MODAL}
        onSelectItem={onSetTokenPayFee}
        selectedItem={currentTokenPayFee || tokenSlug}
      />
    </>
  );
};

const FeeEditor = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return ({
    display: 'flex',
    gap: token.sizeXS,
    minHeight: 24,
    alignItems: 'center',

    '.ant-number': {
      '&, .ant-typography': {
        color: 'inherit !important',
        fontSize: 'inherit !important',
        fontWeight: 'inherit !important',
        lineHeight: 'inherit'
      }
    },

    '&.__estimate-fee-wrapper': {
      backgroundColor: token.colorBgSecondary,
      padding: token.paddingSM,
      height: token.sizeXXL,
      borderRadius: token.borderRadiusLG,
      '.__edit-icon': {
        color: token['gray-5']
      }
    },

    '.__field-left-part': {
      flex: 1,
      display: 'flex',
      gap: token.sizeXXS,
      fontSize: token.fontSize,
      lineHeight: token.lineHeight,
      color: token.colorTextLight4
    },

    '.__field-right-part': {

    },

    '.__fee-editor-area': {
      cursor: 'pointer',
      display: 'flex',
      gap: token.sizeXXS,
      fontSize: token.fontSize,
      lineHeight: token.lineHeight,
      color: token.colorTextLight1
    }
  });
});

export default FeeEditor;
