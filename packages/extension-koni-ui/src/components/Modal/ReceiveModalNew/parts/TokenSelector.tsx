// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { _ChainAsset } from '@subwallet/chain-list/types';
import { _getChainName } from '@subwallet/extension-base/services/chain-service/utils';
import { TokenSelectorItem } from '@subwallet/extension-koni-ui/components';
import TokenEmptyList from '@subwallet/extension-koni-ui/components/EmptyList/TokenEmptyList';
import Search from '@subwallet/extension-koni-ui/components/Search';
import { RECEIVE_MODAL_TOKEN_SELECTOR } from '@subwallet/extension-koni-ui/constants';
import { useSelector, useTranslation } from '@subwallet/extension-koni-ui/hooks';
import { ThemeProps } from '@subwallet/extension-koni-ui/types';
import { ModalContext, SwList, SwModal } from '@subwallet/react-ui';
import { SwListSectionRef } from '@subwallet/react-ui/es/sw-list';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

interface Props extends ThemeProps {
  onSelectItem?: (item: _ChainAsset) => void,
  items: _ChainAsset[];
  onCancel?: VoidFunction;
}

const modalId = RECEIVE_MODAL_TOKEN_SELECTOR;

const renderEmpty = () => <TokenEmptyList modalId={modalId} />;

// todo : will move to Modal/Selector if is necessary
function Component ({ className = '', items, onCancel, onSelectItem }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { checkActive } = useContext(ModalContext);
  const [currentSearchText, setCurrentSearchText] = useState<string>('');
  // @ts-ignore
  const chainInfoMap = useSelector((state) => state.chainStore.chainInfoMap);

  const listItems = useMemo(() => {
    const filteredList = items.filter((item) => {
      const chainName = _getChainName(chainInfoMap[item.originChain]);

      return item.symbol.toLowerCase().includes(currentSearchText.toLowerCase()) || item.name.toLowerCase().includes(currentSearchText.toLowerCase()) || chainName.toLowerCase().includes(currentSearchText.toLowerCase());
    });

    if (currentSearchText.toLowerCase() === 'ton') {
      filteredList.unshift(filteredList.splice(filteredList.findIndex((item) => item.slug === 'ton-NATIVE-TON'), 1)[0]);

      return filteredList;
    } else {
      return filteredList;
    }
  }, [chainInfoMap, currentSearchText, items]);

  const isActive = checkActive(modalId);

  const sectionRef = useRef<SwListSectionRef>(null);

  const handleSearch = useCallback((value: string) => {
    setCurrentSearchText(value);
  }, []);

  const onSelect = useCallback((item: _ChainAsset) => {
    return () => {
      onSelectItem?.(item);
    };
  }, [onSelectItem]);

  const renderItem = useCallback((item: _ChainAsset) => {
    return (
      <TokenSelectorItem
        chainName={_getChainName(chainInfoMap[item.originChain])}
        chainSlug={item.originChain}
        className={'token-selector-item'}
        key={item.slug}
        onClick={onSelect(item)}
        tokenSlug={item.slug}
        tokenSymbol={item.symbol}
      />
    );
  }, [chainInfoMap, onSelect]);

  useEffect(() => {
    if (!isActive) {
      setTimeout(() => {
        sectionRef.current?.setSearchValue('');
      }, 100);
    }
  }, [isActive]);

  return (
    <SwModal
      className={`${className}`}
      destroyOnClose={true}
      id={modalId}
      onCancel={onCancel}
      title={t('Select token')}
    >
      <Search
        autoFocus={true}
        className={'__search-box'}
        onSearch={handleSearch}
        placeholder={t<string>('Token name')}
        searchValue={currentSearchText}
      />
      <SwList
        className={'__list-container'}
        list={listItems}
        renderItem={renderItem}
        renderWhenEmpty={renderEmpty}
        searchableMinCharactersCount={2}
      />
    </SwModal>
  );
}

export const TokenSelectorModal = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return ({
    '.ant-sw-modal-content': {
      height: '100vh'
    },

    '.ant-sw-modal-body': {
      overflow: 'auto',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      paddingBottom: 0
    },

    '.ant-sw-list-section': {
      flex: 1
    },

    '.ant-sw-list': {
      paddingBottom: 0
    },

    '.__search-box': {
      marginBottom: token.marginXS
    },

    '.ant-sw-modal-footer.ant-sw-modal-footer': {
      borderTop: 0
    },

    '.token-selector-item + .token-selector-item': {
      marginTop: token.marginXS
    }
  });
});
