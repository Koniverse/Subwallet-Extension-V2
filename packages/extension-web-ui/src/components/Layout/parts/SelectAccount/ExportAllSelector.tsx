// Copyright 2019-2022 @subwallet/extension-web-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ALL_ACCOUNT_KEY } from '@subwallet/extension-base/constants';
import { AccountProxy, AccountProxyType } from '@subwallet/extension-base/types';
import { AccountProxySelectorAllItem, BaseModal, BasicInputWrapper, FilterModal, GeneralEmptyList } from '@subwallet/extension-web-ui/components';
import ExportAllSelectItem from '@subwallet/extension-web-ui/components/Layout/parts/SelectAccount/ExportAllSelectItem';
import AccountExportPasswordModal from '@subwallet/extension-web-ui/components/Modal/Account/AccountExportPasswordModal';
import { EXPORT_ACCOUNTS_PASSWORD_MODAL, SELECT_ACCOUNT_MODAL } from '@subwallet/extension-web-ui/constants';
import { useFilterModal, useGoBackSelectAccount, useSelectAccount } from '@subwallet/extension-web-ui/hooks';
import { AccountSignMode, ThemeProps } from '@subwallet/extension-web-ui/types';
import { isAccountAll, searchAccountProxyFunction } from '@subwallet/extension-web-ui/utils';
import { Button, ButtonProps, Icon, InputRef, ModalContext, SwList, Tooltip } from '@subwallet/react-ui';
import { SwListSectionRef } from '@subwallet/react-ui/es/sw-list';
import CN from 'classnames';
import { CaretLeft, Export, FadersHorizontal, Info } from 'phosphor-react';
import React, { ForwardedRef, forwardRef, SyntheticEvent, useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface Props extends ThemeProps, BasicInputWrapper {
  items: AccountProxy[];
  isSingleSelect?: boolean;
}

const filterOptions = [
  {
    label: 'Unified account',
    value: AccountProxyType.UNIFIED
  },
  {
    label: 'Solo account',
    value: AccountProxyType.SOLO
  },
  {
    label: 'QR signer account',
    value: AccountProxyType.QR
  },
  {
    label: 'Ledger account',
    value: AccountProxyType.LEDGER
  },
  {
    label: 'Watch-only account',
    value: AccountSignMode.READ_ONLY
  }
];
const renderEmpty = () => <GeneralEmptyList />;
const FILTER_MODAL_ID = 'export-account-filter-modal';
const defaultModalId = 'multi-export-account-selector';
const modalId = SELECT_ACCOUNT_MODAL;

const Component = (props: Props, ref: ForwardedRef<InputRef>) => {
  const { className = '',
    id = defaultModalId,
    isSingleSelect = false,
    items,
    onChange } = props;
  const { t } = useTranslation();
  const { activeModal, checkActive } = useContext(ModalContext);
  const onBack = useGoBackSelectAccount(id);

  const isActive = checkActive(modalId);

  const sectionRef = useRef<SwListSectionRef>(null);

  const getAllIdProxy = useMemo(() => {
    const idProxies: string[] = [];

    items.forEach((obj) => {
      idProxies.push(obj.id);
    });

    return idProxies;
  }, [items]);
  const { changeAccounts, onChangeSelectedAccounts } = useSelectAccount(getAllIdProxy, id, onChange, isSingleSelect);

  const { filterSelectionMap, onApplyFilter, onChangeFilterOption, onCloseFilterModal, onResetFilter, selectedFilters } = useFilterModal(FILTER_MODAL_ID);

  const filterFunction = useMemo<(item: AccountProxy) => boolean>(() => {
    return (item) => {
      const accountType = item.accountType;

      if (!selectedFilters.length) {
        return true;
      }

      for (const filter of selectedFilters) {
        if (filter === '') {
          return true;
        }

        if (filter === AccountProxyType.UNIFIED && accountType === AccountProxyType.UNIFIED) {
          return true;
        } else if (filter === AccountProxyType.SOLO && accountType === AccountProxyType.SOLO) {
          return true;
        } else if (filter === AccountProxyType.QR && accountType === AccountProxyType.QR) {
          return true;
        } else if (filter === AccountProxyType.READ_ONLY && accountType === AccountProxyType.READ_ONLY) {
          return true;
        } else if (filter === AccountProxyType.LEDGER && accountType === AccountProxyType.LEDGER) {
          return true;
        }
      }

      return false;
    };
  }, [selectedFilters]);

  const onClickItem = useCallback((value: string) => {
    if (changeAccounts.length === items.length - 1) {
      onChangeSelectedAccounts(ALL_ACCOUNT_KEY);
    } else {
      onChangeSelectedAccounts(value);
    }
  }, [changeAccounts, items.length, onChangeSelectedAccounts]);

  const onAccountSelect = useCallback((id: string) => {
    return () => {
      onChangeSelectedAccounts(id);
    };
  }, [onChangeSelectedAccounts]);

  const renderItem = useCallback((item: AccountProxy) => {
    const selected = changeAccounts.includes(item.id);
    const currentAccountIsAll = isAccountAll(item.id);

    if (currentAccountIsAll) {
      return (
        <AccountProxySelectorAllItem
          className='all-account-selection'
          isSelected={selected}
          key={item.id}
          onClick={onAccountSelect(ALL_ACCOUNT_KEY)}
          showUnSelectedIcon
        />
      );
    }

    return (
      <ExportAllSelectItem
        accountProxy={item}
        className={className}
        isSelected={selected}
        key={item.id}
        onClick={onClickItem}
        showUnSelectedIcon
      />
    );
  }, [changeAccounts, className, onAccountSelect, onClickItem]);

  const onClickFilterButton = useCallback(
    (e?: SyntheticEvent) => {
      e && e.stopPropagation();
      activeModal(FILTER_MODAL_ID);
    },
    [activeModal]
  );

  useEffect(() => {
    if (!isActive) {
      onResetFilter();
      onChangeSelectedAccounts('');
    }
  }, [isActive, onChangeSelectedAccounts, onResetFilter]);

  const exportAllAccounts = useCallback(() => {
    activeModal(EXPORT_ACCOUNTS_PASSWORD_MODAL);
  }, [activeModal]);

  const getNumberAccount = useMemo(() => {
    if (changeAccounts.includes(ALL_ACCOUNT_KEY)) {
      return changeAccounts.length - 1;
    } else {
      return changeAccounts.length;
    }
  }, [changeAccounts]);

  const getListAccount = useMemo(() => {
    if (changeAccounts.includes(ALL_ACCOUNT_KEY)) {
      return changeAccounts.filter((item) => item !== ALL_ACCOUNT_KEY);
    } else {
      return changeAccounts;
    }
  }, [changeAccounts]);

  const isDiableExport = useMemo(() => {
    if (changeAccounts.length > 0) {
      return false;
    }

    return true;
  }, [changeAccounts]);

  const rightButton = useMemo((): ButtonProps => {
    return ({
      icon: (
        <Tooltip
          className={'__icon-export-remind'}
          overlayClassName={CN(className, '__tooltip-overlay-remind')}
          placement={'bottomLeft'}
          title={t('SubWallet only supports accounts created and attached directly on the SubWallet Dashboard, does not support exporting accounts connected from the extension.')}
        >
          <div className={'__tooltip-info-wrapper'}>
            <Icon
              className={CN('__export-remind-btn')}
              phosphorIcon={Info}
              weight='fill'
            />
          </div>
        </Tooltip>
      ),
      size: 'xs',
      type: 'ghost',
      tooltipPlacement: 'topLeft'
    });
  }, [className, t]);

  return (
    <>
      <BaseModal
        className={`${className}`}
        closeIcon={(
          <Icon
            phosphorIcon={CaretLeft}
            size='md'
          />
        )}
        footer={(
          <Button
            block
            disabled={isDiableExport}
            icon={(
              <Icon
                phosphorIcon={Export}
                weight={'fill'}
              />
            )}
            onClick={exportAllAccounts}
          >
            {getNumberAccount > 1 ? t(`Export ${getNumberAccount} accounts`) : t(`Export ${getNumberAccount} account`)}
          </Button>
        )}
        id={id}
        onCancel={onBack}
        rightIconProps={rightButton}
        title={t('Export account')}
      >
        <SwList.Section
          actionBtnIcon={<Icon phosphorIcon={FadersHorizontal} />}
          enableSearchInput
          filterBy={filterFunction}
          list={items}
          onClickActionBtn={onClickFilterButton}
          ref={sectionRef}
          renderItem={renderItem}
          renderWhenEmpty={renderEmpty}
          searchFunction={searchAccountProxyFunction}
          searchMinCharactersCount={2}
          searchPlaceholder={t<string>('Account name')}
          showActionBtn
        />
      </BaseModal>

      <FilterModal
        id={FILTER_MODAL_ID}
        onApplyFilter={onApplyFilter}
        onCancel={onCloseFilterModal}
        onChangeOption={onChangeFilterOption}
        optionSelectionMap={filterSelectionMap}
        options={filterOptions}
      />
      <AccountExportPasswordModal
        addresses={getListAccount}
      />
    </>
  );
};

const ExportAllSelector = styled(forwardRef(Component))<Props>(({ theme: { token } }: Props) => {
  return {
    '.ant-sw-modal-body': {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: 0
    },
    '.__tooltip-info-wrapper': {
      display: 'flex'
    },

    '.ant-sw-modal-footer': {
      margin: 0,
      marginTop: token.marginXS,
      borderTop: 0,
      paddingLeft: 0,
      paddingRight: 0
    },
    '.ant-sw-list-search-input': {
      paddingBottom: token.paddingXS,
      paddingRight: 0,
      paddingLeft: 0
    },
    '.ant-sw-list': {
      paddingRight: 0,
      paddingLeft: 0
    },

    '.all-account-selection': {
      '.account-item-name': {
        fontSize: token.fontSizeLG
      }

    }
  };
});

export default ExportAllSelector;
