// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { _getOriginChainOfAsset } from '@subwallet/extension-base/services/chain-service/utils';
import { AccountChainType, AccountProxy, AccountProxyType } from '@subwallet/extension-base/types';
import { detectTranslate } from '@subwallet/extension-base/utils';
import { AccountSelectorModal, AlertBox, CloseIcon, EmptyList, PageWrapper, ReceiveModal, TokenBalance, TokenItem, TokenPrice, TonWalletContractSelectorModal } from '@subwallet/extension-web-ui/components';
import AnimatedNetworkGroup from '@subwallet/extension-web-ui/components/MetaInfo/parts/AnimatedNetworkGroup';
import NoContent, { PAGE_TYPE } from '@subwallet/extension-web-ui/components/NoContent';
import { TokenGroupBalanceItem } from '@subwallet/extension-web-ui/components/TokenItem/TokenGroupBalanceItem';
import { DEFAULT_SWAP_PARAMS, DEFAULT_TRANSFER_PARAMS, IS_SHOW_TON_CONTRACT_VERSION_WARNING, SWAP_TRANSACTION, TON_ACCOUNT_SELECTOR_MODAL, TON_WALLET_CONTRACT_SELECTOR_MODAL, TRANSFER_TRANSACTION } from '@subwallet/extension-web-ui/constants';
import { DataContext } from '@subwallet/extension-web-ui/contexts/DataContext';
import { HomeContext } from '@subwallet/extension-web-ui/contexts/screen/HomeContext';
import { ScreenContext } from '@subwallet/extension-web-ui/contexts/ScreenContext';
import { useCoreReceiveModalHelper, useGetChainSlugsByAccount, useSetCurrentPage } from '@subwallet/extension-web-ui/hooks';
import useNotification from '@subwallet/extension-web-ui/hooks/common/useNotification';
import useTranslation from '@subwallet/extension-web-ui/hooks/common/useTranslation';
import { UpperBlock } from '@subwallet/extension-web-ui/Popup/Home/Tokens/UpperBlock';
import { RootState } from '@subwallet/extension-web-ui/stores';
import { AccountAddressItemType, ThemeProps, TransferParams } from '@subwallet/extension-web-ui/types';
import { TokenBalanceItemType } from '@subwallet/extension-web-ui/types/balance';
import { getTransactionFromAccountProxyValue, isAccountAll, sortTokenByValue } from '@subwallet/extension-web-ui/utils';
import { isTonAddress } from '@subwallet/keyring';
import { Button, Icon, ModalContext, Number, Typography } from '@subwallet/react-ui';
import BigN from 'bignumber.js';
import classNames from 'classnames';
import { Coins, FadersHorizontal, SlidersHorizontal } from 'phosphor-react';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';

import DetailTable from './DetailTable';

type Props = ThemeProps;
const BN_0 = new BigN(0);
const BN_100 = new BigN(100);

const searchFunc = (item: TokenBalanceItemType, searchText: string) => {
  const searchTextLowerCase = searchText.toLowerCase();
  const symbol = item.symbol.toLowerCase();

  return symbol.includes(searchTextLowerCase);
};

const tonWalletContractSelectorModalId = TON_WALLET_CONTRACT_SELECTOR_MODAL;
const tonAccountSelectorModalId = TON_ACCOUNT_SELECTOR_MODAL;

const Component = (): React.ReactElement => {
  useSetCurrentPage('/home/tokens');
  const { t } = useTranslation();
  const chainInfoMap = useSelector((state: RootState) => state.chainStore.chainInfoMap);
  const [isShrink, setIsShrink] = useState<boolean>(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const topBlockRef = useRef<HTMLDivElement>(null);
  const accountProxies = useSelector((state: RootState) => state.accountState.accountProxies);
  const currentAccountProxy = useSelector((state: RootState) => state.accountState.currentAccountProxy);
  const isAllAccount = useSelector((state: RootState) => state.accountState.isAllAccount);
  const { accountBalance: { tokenGroupBalanceMap,
    totalBalanceInfo }, tokenGroupStructure: { sortedTokenGroups } } = useContext(HomeContext);
  const notify = useNotification();
  const { onOpenReceive, receiveModalProps } = useCoreReceiveModalHelper();

  const [, setSwapStorage] = useLocalStorage(SWAP_TRANSACTION, DEFAULT_SWAP_PARAMS);

  const [, setStorage] = useLocalStorage<TransferParams>(TRANSFER_TRANSACTION, DEFAULT_TRANSFER_PARAMS);
  const allowedChains = useGetChainSlugsByAccount();
  const buyTokenInfos = useSelector((state: RootState) => state.buyService.tokens);
  const swapPairs = useSelector((state: RootState) => state.swap.swapPairs);
  const { activeModal, checkActive, inactiveModal } = useContext(ModalContext);
  const isTonWalletContactSelectorModalActive = checkActive(tonWalletContractSelectorModalId);
  const [isShowTonWarning, setIsShowTonWarning] = useLocalStorage(IS_SHOW_TON_CONTRACT_VERSION_WARNING, true);
  const tonAddress = useMemo(() => {
    return currentAccountProxy?.accounts.find((acc) => isTonAddress(acc.address))?.address;
  }, [currentAccountProxy]);
  const [currentTonAddress, setCurrentTonAddress] = useState(isAllAccount ? undefined : tonAddress);
  const fromAndToTokenMap = useMemo<Record<string, string[]>>(() => {
    const result: Record<string, string[]> = {};

    swapPairs.forEach((pair) => {
      if (!result[pair.from]) {
        result[pair.from] = [pair.to];
      } else {
        result[pair.from].push(pair.to);
      }
    });

    return result;
  }, [swapPairs]);

  const isEnableSwapButton = useMemo(() => {
    return Object.keys(fromAndToTokenMap).some((tokenSlug) => {
      return allowedChains.includes(_getOriginChainOfAsset(tokenSlug));
    });
  }, [allowedChains, fromAndToTokenMap]);

  const outletContext: {
    searchInput: string,
    setSearchPlaceholder: React.Dispatch<React.SetStateAction<React.ReactNode>>,
    setShowSearchInput: React.Dispatch<React.SetStateAction<boolean>>
  } = useOutletContext();

  const searchInput = outletContext?.searchInput;
  const setSearchPlaceholder = outletContext?.setSearchPlaceholder;
  const setShowSearchInput = outletContext?.setShowSearchInput;

  const { isWebUI } = useContext(ScreenContext);
  const handleScroll = useCallback((event: React.UIEvent<HTMLElement>) => {
    const topPosition = event.currentTarget.scrollTop;

    if (topPosition > 80) {
      setIsShrink((value) => {
        if (!value && topBlockRef.current && containerRef.current) {
          const containerProps = containerRef.current.getBoundingClientRect();

          topBlockRef.current.style.position = 'fixed';
          topBlockRef.current.style.top = `${Math.floor(containerProps.top)}px`;
          topBlockRef.current.style.left = `${containerProps.left}px`;
          topBlockRef.current.style.right = `${containerProps.right}px`;
          topBlockRef.current.style.width = `${containerProps.width}px`;
          topBlockRef.current.style.opacity = '0';
          topBlockRef.current.style.paddingTop = '0';

          setTimeout(() => {
            if (topBlockRef.current) {
              topBlockRef.current.style.opacity = '1';
              topBlockRef.current.style.paddingTop = '32px';
            }
          }, 100);
        }

        return true;
      });
    } else {
      setIsShrink((value) => {
        if (value && topBlockRef.current) {
          topBlockRef.current.style.position = 'absolute';
          topBlockRef.current.style.top = '0';
          topBlockRef.current.style.left = '0';
          topBlockRef.current.style.right = '0';
          topBlockRef.current.style.width = '100%';
          topBlockRef.current.style.opacity = '0';
          topBlockRef.current.style.paddingTop = '0';

          setTimeout(() => {
            if (topBlockRef.current) {
              topBlockRef.current.style.opacity = '1';
              topBlockRef.current.style.paddingTop = '32px';
            }
          }, 100);
        }

        return false;
      });
    }
  }, []);

  const handleResize = useCallback(() => {
    const topPosition = containerRef.current?.scrollTop || 0;

    if (topPosition > 80) {
      if (topBlockRef.current && containerRef.current) {
        const containerProps = containerRef.current.getBoundingClientRect();

        topBlockRef.current.style.top = `${Math.floor(containerProps.top)}px`;
        topBlockRef.current.style.left = `${containerProps.left}px`;
        topBlockRef.current.style.right = `${containerProps.right}px`;
        topBlockRef.current.style.width = `${containerProps.width}px`;
      }
    } else {
      if (topBlockRef.current) {
        topBlockRef.current.style.top = '0';
        topBlockRef.current.style.left = '0';
        topBlockRef.current.style.right = '0';
        topBlockRef.current.style.width = '100%';
      }
    }
  }, []);

  const isTotalBalanceDecrease = totalBalanceInfo.change.status === 'decrease';

  const isSupportBuyTokens = useMemo(() => {
    return Object.values(buyTokenInfos).some((item) => allowedChains.includes(item.network));
  }, [allowedChains, buyTokenInfos]);

  const isHaveOnlyTonSoloAcc = useMemo(() => {
    const checkValidAcc = (currentAcc: AccountProxy) => {
      return currentAcc?.accountType === AccountProxyType.SOLO && currentAcc?.chainTypes.includes(AccountChainType.TON);
    };

    if (isAllAccount) {
      return accountProxies.filter((a) => a.accountType !== AccountProxyType.ALL_ACCOUNT).every((acc) => checkValidAcc(acc));
    } else {
      return currentAccountProxy && checkValidAcc(currentAccountProxy);
    }
  }, [accountProxies, currentAccountProxy, isAllAccount]);

  const tonAccountList: AccountAddressItemType[] = useMemo(() => {
    return accountProxies.filter((acc) => acc?.accountType === AccountProxyType.SOLO && acc?.chainTypes.includes(AccountChainType.TON)).map((item) => ({
      accountName: item.name,
      accountProxyId: item.id,
      accountProxyType: item.accountType,
      accountType: item.accounts[0].type,
      address: item.accounts[0].address,
      accountActions: item.accountActions
    }));
  }, [accountProxies]);

  const onCloseAccountSelector = useCallback(() => {
    setIsShowTonWarning(false);
    inactiveModal(tonAccountSelectorModalId);
  }, [inactiveModal, setIsShowTonWarning]);

  const onSelectAccountSelector = useCallback((item: AccountAddressItemType) => {
    setCurrentTonAddress(item.address);
    activeModal(tonWalletContractSelectorModalId);
  }, [activeModal]);

  const onBackTonWalletContactModal = useCallback(() => {
    inactiveModal(tonWalletContractSelectorModalId);
  }, [inactiveModal]);

  const onCloseTonWalletContactModal = useCallback(() => {
    setIsShowTonWarning(false);
    setTimeout(() => {
      inactiveModal(tonAccountSelectorModalId);
      inactiveModal(tonWalletContractSelectorModalId);
    }, 200);
  }, [inactiveModal, setIsShowTonWarning]);

  const onOpenTonWalletContactModal = useCallback(() => {
    if (isAllAccount) {
      activeModal(tonAccountSelectorModalId);
    } else {
      setCurrentTonAddress(tonAddress);
      activeModal(tonWalletContractSelectorModalId);
    }
  }, [activeModal, isAllAccount, tonAddress]);

  const onClickItem = useCallback((item: TokenBalanceItemType) => {
    navigate(`/home/tokens/detail/${item.slug}`);
  }, [navigate]);

  const onClickManageToken = useCallback(() => {
    navigate('/settings/tokens/manage');
  }, [navigate]);

  const onOpenSendFund = useCallback(() => {
    if (!currentAccountProxy) {
      return;
    }

    if (currentAccountProxy.accountType === AccountProxyType.READ_ONLY) {
      notify({
        message: t('The account you are using is watch-only, you cannot send assets with it'),
        type: 'info',
        duration: 3
      });

      return;
    }

    setStorage({
      ...DEFAULT_TRANSFER_PARAMS,
      fromAccountProxy: getTransactionFromAccountProxyValue(currentAccountProxy)
    });
    navigate('/transaction/send-fund');
  },
  [currentAccountProxy, setStorage, navigate, notify, t]
  );

  const onOpenBuyTokens = useCallback(() => {
    navigate('/buy-tokens');
  },
  [navigate]
  );

  const onOpenSwap = useCallback(() => {
    if (!currentAccountProxy) {
      return;
    }

    if (currentAccountProxy.accountType === AccountProxyType.READ_ONLY) {
      notify({
        message: t('The account you are using is watch-only, you cannot send assets with it'),
        type: 'info',
        duration: 3
      });

      return;
    }

    const filteredAccounts = accountProxies.filter((ap) => !isAccountAll(ap.id));

    const isAllLedger = currentAccountProxy.accountType === AccountProxyType.LEDGER || (filteredAccounts.length > 0 && filteredAccounts.every((ap) => ap.accountType === AccountProxyType.LEDGER));

    if (isAllLedger) {
      notify({
        message: 'The account you are using is Ledger account, you cannot use this feature with it',
        type: 'error',
        duration: 3
      });

      return;
    }

    setSwapStorage({
      ...DEFAULT_SWAP_PARAMS,
      fromAccountProxy: getTransactionFromAccountProxyValue(currentAccountProxy)
    });
    navigate('/transaction/swap');
  }, [accountProxies, currentAccountProxy, navigate, notify, setSwapStorage, t]);

  const tokenGroupBalanceItems = useMemo<TokenBalanceItemType[]>(() => {
    const result: TokenBalanceItemType[] = [];

    sortedTokenGroups.forEach((tokenGroupSlug) => {
      const item = tokenGroupBalanceMap[tokenGroupSlug];

      if (!item) {
        return;
      }

      if (searchInput) {
        if (searchFunc(item, searchInput)) {
          result.push(item);
        }
      } else {
        result.push(item);
      }
    });

    return result.sort(sortTokenByValue);
  }, [sortedTokenGroups, tokenGroupBalanceMap, searchInput]);

  const tokenBalanceClick = useCallback((item: TokenBalanceItemType) => {
    return () => {
      onClickItem(item);
    };
  }, [onClickItem]);

  const getRowSubContent = useCallback((row: TokenBalanceItemType) => {
    const relatedChains = row.relatedChains;

    if (relatedChains.length === 1) {
      if (chainInfoMap[relatedChains[0]]) {
        return (
          <Typography.Text className={'token-item-information__sub-title'}>
            {chainInfoMap[relatedChains[0]].name?.replace(' Relay Chain', '') || ''}
          </Typography.Text>
        );
      }
    } else if (relatedChains.length > 1) {
      return (
        <div className={'token-item-information__sub-content'}>
          <Typography.Text className={'token-item-information__sub-title'}>
            {`${relatedChains.length} ${t('networks')}`}
          </Typography.Text>

          <AnimatedNetworkGroup chains={relatedChains} />
        </div>
      );
    }

    return (
      <Typography.Text className={'token-item-information__sub-title'}></Typography.Text>
    );
  }, [chainInfoMap, t]);

  useEffect(() => {
    setSearchPlaceholder?.(t('Token name'));
    setShowSearchInput?.(true);
  }, [setSearchPlaceholder, setShowSearchInput, t]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  if (isWebUI) {
    const isTotalZero = totalBalanceInfo.convertedValue.eq(BN_0);

    return (
      <div className='token-table'>
        {tokenGroupBalanceItems.length <= 0
          ? (
            <NoContent
              className={'__no-content-block'}
              pageType={PAGE_TYPE.TOKEN}
            />
          )
          : (
            <DetailTable
              columns={[
                {
                  title: t<string>('Token name'),
                  dataIndex: 'name',
                  key: 'name',
                  render: (_, row) => {
                    return (
                      <TokenItem
                        chain={row.chain}
                        logoKey={row.logoKey}
                        slug={row.slug}
                        subContent={getRowSubContent(row)}
                        symbol={row.symbol}
                      />
                    );
                  }
                },
                {
                  title: t<string>('Portfolio %'),
                  dataIndex: 'percentage',
                  key: 'percentage',
                  className: '__percentage-col',
                  render: (_, row) => {
                    return (
                      <Number
                        decimal={0}
                        decimalOpacity={0.45}
                        suffix={'%'}
                        value={isTotalZero ? BN_0 : row.total.convertedValue.multipliedBy(BN_100).dividedBy(totalBalanceInfo.convertedValue)}
                      />
                    );
                  }
                },
                {
                  title: t<string>('Price'),
                  dataIndex: 'price',
                  key: 'price',
                  render: (_, row) => {
                    return (
                      <TokenPrice
                        pastValue={row.price24hValue}
                        value={row.priceValue}
                      />
                    );
                  }
                },
                {
                  title: 'Balance',
                  dataIndex: 'balance',
                  key: 'balance',
                  render: (_, row) => {
                    return (
                      <TokenBalance
                        convertedValue={row.total.convertedValue}
                        symbol={row.symbol}
                        value={row.total.value}
                      />
                    );
                  }
                }
              ]}
              dataSource={tokenGroupBalanceItems}
              onClick={onClickItem}
            />

          )}
        <div className='__manage-token-button-wrapper'>
          <Button
            className={'__manage-token-button'}
            icon={(
              <Icon
                customSize='28px'
                phosphorIcon={SlidersHorizontal}
              />
            )}
            onClick={onClickManageToken}
            size={'xs'}
            type='ghost'
          >
            {t('Manage token list')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {isShrink &&
        <div className={'__header-overlay'}>

        </div>
      }
      <div
        className={'tokens-screen-container'}
        onScroll={handleScroll}
        ref={containerRef}
      >

        <div
          className={classNames('__upper-block-wrapper', {
            '-is-shrink': isShrink,
            '-decrease': isTotalBalanceDecrease
          })}
          ref={topBlockRef}
        >
          <UpperBlock
            isPriceDecrease={isTotalBalanceDecrease}
            isShrink={isShrink}
            isSupportBuyTokens={isSupportBuyTokens}
            isSupportSwap={isEnableSwapButton}
            onOpenBuyTokens={onOpenBuyTokens}
            onOpenReceive={onOpenReceive}
            onOpenSendFund={onOpenSendFund}
            onOpenSwap={onOpenSwap}
            totalChangePercent={totalBalanceInfo.change.percent}
            totalChangeValue={totalBalanceInfo.change.value}
            totalValue={totalBalanceInfo.convertedValue}
          />
        </div>

        <div
          className={'__scroll-container'}
        >
          {
            isHaveOnlyTonSoloAcc && isShowTonWarning && (
              <>
                <AlertBox
                  className={classNames('ton-solo-acc-alert-area')}
                  description={<Trans
                    components={{
                      highlight: (
                        <a
                          className='link'
                          onClick={onOpenTonWalletContactModal}
                        />
                      )
                    }}
                    i18nKey={detectTranslate("TON wallets have multiple versions, each with its own wallet address and balance. <highlight>Change versions</highlight> if you don't see balances")}
                  />}
                  title={t('Change wallet address & version')}
                  type={'warning'}
                />
                <AccountSelectorModal
                  items={tonAccountList}
                  modalId={tonAccountSelectorModalId}
                  onCancel={onCloseAccountSelector}
                  onSelectItem={onSelectAccountSelector}
                />
                {currentTonAddress && isTonWalletContactSelectorModalActive &&
                  <TonWalletContractSelectorModal
                    address={currentTonAddress}
                    chainSlug={'ton'}
                    id={tonWalletContractSelectorModalId}
                    isShowBackButton={isAllAccount}
                    onBack={onBackTonWalletContactModal}
                    onCancel={onCloseTonWalletContactModal}
                    rightIconProps={{
                      icon: <CloseIcon />,
                      onClick: onCloseTonWalletContactModal
                    }}
                  />
                }
              </>
            )
          }
          {
            tokenGroupBalanceItems.map((item) => {
              return (
                <TokenGroupBalanceItem
                  key={item.slug}
                  {...item}
                  onPressItem={tokenBalanceClick(item)}
                />
              );
            })
          }
          {
            !tokenGroupBalanceItems.length && (
              <EmptyList
                className={'__empty-list'}
                emptyMessage={t('Try searching or importing one')}
                emptyTitle={t('No tokens found')}
                phosphorIcon={Coins}
              />
            )
          }
          <div className={'__scroll-footer'}>
            <Button
              icon={<Icon phosphorIcon={FadersHorizontal} />}
              onClick={onClickManageToken}
              size={'xs'}
              type={'ghost'}
            >
              {t('Manage tokens')}
            </Button>
          </div>
        </div>
        {
          !isWebUI && (
            <ReceiveModal
              {...receiveModalProps}
            />
          )
        }
      </div>
    </>
  );
};

type WrapperProps = ThemeProps & {
  searchInput?: string
}

const WrapperComponent = ({ className = '' }: WrapperProps): React.ReactElement<Props> => {
  const dataContext = useContext(DataContext);

  return (
    <PageWrapper
      className={`tokens ${className}`}
      hideLoading={true}
      resolve={dataContext.awaitStores(['price', 'chainStore', 'assetRegistry', 'balance', 'swap'])}
    >
      <Component />
    </PageWrapper>
  );
};

const Tokens = styled(WrapperComponent)<WrapperProps>(({ theme: { extendToken, token } }: WrapperProps) => {
  return ({
    overflow: 'hidden',

    '.token-table': {
      '.token-group-balance-item': {
        marginBottom: '0px !important'
      },

      '.ant-table-row': {
        cursor: 'pointer'
      }
    },

    'td.__percentage-col': {
      verticalAlign: 'top',

      '.ant-number': {
        lineHeight: token.lineHeightLG,
        fontSize: token.fontSizeLG
      },

      '.ant-number .ant-typography': {
        fontSize: 'inherit !important',
        lineHeight: 'inherit',
        textAlign: 'end'
      }
    },

    '.__empty-list': {
      marginTop: token.marginSM,
      marginBottom: token.marginSM
    },

    '.tokens-screen-container': {
      height: '100%',
      color: token.colorTextLight1,
      fontSize: token.fontSizeLG,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      overflowX: 'hidden',
      paddingTop: 210
    },

    '.__scroll-container': {
      paddingLeft: token.size,
      paddingRight: token.size
    },

    '.__upper-block-wrapper': {
      backgroundColor: token.colorBgDefault,
      position: 'absolute',
      paddingTop: '32px',
      height: 210,
      zIndex: 10,
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      backgroundImage: extendToken.tokensScreenSuccessBackgroundColor,
      transition: 'opacity, padding-top 0.27s ease',

      '&.-is-shrink': {
        height: 104
      },

      '&.-decrease': {
        backgroundImage: extendToken.tokensScreenDangerBackgroundColor
      }
    },

    '.tokens-upper-block': {
      flex: 1
    },

    '.__scroll-footer': {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: token.size
    },

    '.token-group-balance-item': {
      marginBottom: token.sizeXS
    },

    '.__upper-block-wrapper.-is-shrink': {
      '.__static-block': {
        display: 'none'
      },

      '.__scrolling-block': {
        display: 'flex'
      }
    },

    '.token-item-information__sub-content': {
      display: 'flex',
      gap: token.sizeXXS,
      alignItems: 'center'
    },

    '.web-ui-enable &': {
      '.__no-content-block': {
        paddingTop: 92,
        paddingBottom: 132
      },

      '.__manage-token-button-wrapper': {
        display: 'flex',
        justifyContent: 'center'
      },

      '.ant-table-wrapper + .__manage-token-button-wrapper': {
        marginTop: token.margin
      },

      '.__manage-token-button': {
        '&:not(:hover)': {
          color: token.colorTextLight4
        }
      }
    },
    '.__header-overlay': {
      position: 'fixed',
      height: 10,
      top: token.sizeXXL,
      left: 0,
      right: 0,
      zIndex: 5,
      backgroundColor: token.colorBgSecondary
    }
  });
});

export default Tokens;
