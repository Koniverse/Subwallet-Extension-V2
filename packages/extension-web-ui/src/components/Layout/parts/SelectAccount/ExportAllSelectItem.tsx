// Copyright 2019-2022 @subwallet/extension-web-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AccountChainType, AccountProxy, AccountProxyType } from '@subwallet/extension-base/types';
import { AccountProxyAvatar } from '@subwallet/extension-web-ui/components';
import { Theme } from '@subwallet/extension-web-ui/themes';
import { PhosphorIcon } from '@subwallet/extension-web-ui/types';
import { Icon } from '@subwallet/react-ui';
import CN from 'classnames';
import { CheckCircle, Eye, GitCommit, Needle, QrCode, Question, Strategy, Swatches } from 'phosphor-react';
import { IconWeight } from 'phosphor-react/src/lib';
import React, { Context, useCallback, useContext, useMemo } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { KeypairType } from '@polkadot/util-crypto/types';

type AccountProxyTypeIcon = {
  className?: string;
  value: PhosphorIcon,
  weight?: IconWeight
}
export interface _AccountCardItem {
  className?: string;
  isSelected?: boolean;
  accountProxy: AccountProxy;
  preventPrefix?: boolean;
  type?: KeypairType;
  showUnSelectedIcon?: boolean;
  disabled?: boolean;
  onClick?: (value: string) => void;
}

function Component (props: _AccountCardItem): React.ReactElement<_AccountCardItem> {
  const { accountProxy,
    disabled,
    isSelected,
    onClick,
    showUnSelectedIcon } = props;

  const { accountType, chainTypes, id: accountProxyId, name: accountName } = useMemo(() => accountProxy, [accountProxy]);

  const token = useContext<Theme>(ThemeContext as Context<Theme>).token;
  const logoMap = useContext<Theme>(ThemeContext as Context<Theme>).logoMap;
  const chainTypeLogoMap = useMemo(() => {
    return {
      [AccountChainType.SUBSTRATE]: logoMap.network.polkadot as string,
      [AccountChainType.ETHEREUM]: logoMap.network.ethereum as string,
      [AccountChainType.BITCOIN]: logoMap.network.bitcoin as string,
      [AccountChainType.TON]: logoMap.network.ton as string
    };
  }, [logoMap.network.bitcoin, logoMap.network.ethereum, logoMap.network.polkadot, logoMap.network.ton]);
  const _onSelect = useCallback(() => {
    onClick && onClick(accountProxyId || '');
  },
  [accountProxyId, onClick]
  );

  const accountProxyTypeIconProps = ((): AccountProxyTypeIcon | null => {
    if (accountType === AccountProxyType.UNIFIED) {
      return {
        className: '-is-unified',
        value: Strategy,
        weight: 'fill'
      };
    }

    if (accountType === AccountProxyType.SOLO) {
      return {
        className: '-is-solo',
        value: GitCommit,
        weight: 'fill'
      };
    }

    if (accountType === AccountProxyType.QR) {
      return {
        value: QrCode,
        weight: 'fill'
      };
    }

    if (accountType === AccountProxyType.READ_ONLY) {
      return {
        value: Eye,
        weight: 'fill'
      };
    }

    if (accountType === AccountProxyType.LEDGER) {
      return {
        value: Swatches,
        weight: 'fill'
      };
    }

    if (accountType === AccountProxyType.INJECTED) {
      return {
        value: Needle,
        weight: 'fill'
      };
    }

    if (accountType === AccountProxyType.UNKNOWN) {
      return {
        value: Question,
        weight: 'fill'
      };
    }

    return null;
  })();

  return (
    <>
      <div
        className={CN(props.className, { '-selected': isSelected })}
        onClick={disabled ? undefined : _onSelect}
      >
        <div className='__item-left-part'>
          <div className='__item-avatar-wrapper'>
            <AccountProxyAvatar
              size={32}
              value={accountProxyId || ''}
            />

            {
              !!accountProxyTypeIconProps && (
                <div className={CN('__item-avatar-icon', accountProxyTypeIconProps.className, {
                  '-is-derived': !!accountProxy.parentId
                })}
                >
                  <Icon
                    customSize={'12px'}
                    phosphorIcon={accountProxyTypeIconProps.value}
                    weight={accountProxyTypeIconProps.weight as IconWeight}
                  />
                </div>
              )
            }
          </div>
        </div>
        <div className='__item-center-part'>
          <div className={'middle-item__name-wrapper'}>
            <div className='__item-name'>{accountName}</div>
            <div className='__item-chain-types'>
              {
                chainTypes.map((nt) => {
                  return (
                    <img
                      alt='Network type'
                      className={'__item-chain-type-item'}
                      key={nt}
                      src={chainTypeLogoMap[nt]}
                    />
                  );
                })
              }
            </div>
          </div>
        </div>

        <div className={'__item-right-part'}>
          {(showUnSelectedIcon || isSelected) && (
            <Icon
              className={'__select-icon'}
              iconColor={isSelected ? token.colorSuccess : token.colorTextLight4}
              phosphorIcon={CheckCircle}
              size={'sm'}
              weight={'fill'}
            />
          )}
        </div>
      </div>
    </>
  );
}

const ExportAllSelectItem = styled(Component)<_AccountCardItem>(({ theme }) => {
  const { token } = theme as Theme;

  return {
    height: 68,
    background: token.colorBgSecondary,
    padding: token.paddingSM,
    borderRadius: token.borderRadiusLG,
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    transition: `background ${token.motionDurationMid} ease-in-out`,
    marginTop: token.marginXS,
    '&.-selected': {
      backgroundColor: token.colorBgInput
    },
    '.__item-left-part': {
      paddingRight: token.paddingXS
    },
    '.__item-avatar-wrapper': {
      position: 'relative'
    },
    '.__item-avatar-icon': {
      color: token.colorWhite,
      width: 16,
      height: 16,
      position: 'absolute',
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',

      '&.-is-unified': {
        color: token.colorSuccess
      },

      '&.-is-solo': {
        color: token['blue-9']
      },

      '&.-is-derived': {
        color: token.colorWarning
      }
    },
    '.__item-center-part': {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      flex: 1
    },
    '.__item-name': {
      fontSize: token.fontSizeLG,
      color: token.colorTextLight1,
      lineHeight: token.lineHeightLG,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      'white-space': 'nowrap'
    },
    '.__item-address': {
      fontSize: token.fontSizeSM,
      color: token.colorTextLight4,
      lineHeight: token.lineHeightSM,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      'white-space': 'nowrap'
    },
    '.__item-chain-types': {
      display: 'flex',
      paddingTop: 2,

      '.__item-chain-type-item': {
        display: 'block',
        boxShadow: '-4px 0px 4px 0px rgba(0, 0, 0, 0.40)',
        width: token.size,
        height: token.size,
        borderRadius: '100%',
        marginLeft: -token.marginXXS
      },

      '.__item-chain-type-item:first-of-type': {
        marginLeft: 0
      }
    },
    '.__item-right-part': {
      marginLeft: 'auto',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '.__select-icon.__select-icon': {
      minWidth: 40,
      display: 'flex',
      justifyContent: 'center',
      marginRight: -8
    },
    '&:hover': {
      background: token.colorBgInput
    }
  };
});

export default ExportAllSelectItem;
