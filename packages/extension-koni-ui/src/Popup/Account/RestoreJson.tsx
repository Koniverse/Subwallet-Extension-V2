// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AccountProxy } from '@subwallet/extension-base/types';
import { CloseIcon, Layout, PageWrapper } from '@subwallet/extension-koni-ui/components';
import { IMPORT_ACCOUNT_MODAL } from '@subwallet/extension-koni-ui/constants';
import { useAutoNavigateToCreatePassword, useCompleteCreateAccount, useDefaultNavigate, useGoBackFromCreateAccount, useTranslation, useUnlockChecker } from '@subwallet/extension-koni-ui/hooks';
import { batchRestoreV2, jsonRestoreV2, parseBatchSingleJson, parseInfoSingleJson } from '@subwallet/extension-koni-ui/messaging';
import { ThemeProps, ValidateState } from '@subwallet/extension-koni-ui/types';
import { isKeyringPairs$Json, isValidJsonFile } from '@subwallet/extension-koni-ui/utils';
import { KeyringPair$Json } from '@subwallet/keyring/types';
import { Form, Icon, Input, SwList, Upload } from '@subwallet/react-ui';
import { UploadChangeParam, UploadFile } from '@subwallet/react-ui/es/upload/interface';
import AccountCard from '@subwallet/react-ui/es/web3-block/account-card';
import { KeyringPairs$Json } from '@subwallet/ui-keyring/types';
import CN from 'classnames';
import { FileArrowDown } from 'phosphor-react';
import React, { ChangeEventHandler, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { u8aToString } from '@polkadot/util';

type Props = ThemeProps;

const FooterIcon = (
  <Icon
    phosphorIcon={FileArrowDown}
    weight='fill'
  />
);

const formName = 'restore-json-file-form';
const passwordField = 'password';

const focusPassword = () => {
  setTimeout(() => {
    const element = document.getElementById(`${formName}_${passwordField}`);

    if (element) {
      element.focus();
    }
  }, 10);
};

const selectPassword = () => {
  setTimeout(() => {
    const element = document.getElementById(`${formName}_${passwordField}`);

    if (element) {
      (element as HTMLInputElement).select();
    }
  }, 10);
};

const Component: React.FC<Props> = ({ className }: Props) => {
  useAutoNavigateToCreatePassword();

  const { t } = useTranslation();
  const onComplete = useCompleteCreateAccount();
  const navigate = useNavigate();
  const onBack = useGoBackFromCreateAccount(IMPORT_ACCOUNT_MODAL);
  const { goHome } = useDefaultNavigate();

  const [form] = Form.useForm();

  const checkUnlock = useUnlockChecker();

  const [fileValidateState, setFileValidateState] = useState<ValidateState>({});
  const [passwordValidateState, setPasswordValidateState] = useState<ValidateState>({});
  const [fileValidating, setFileValidating] = useState(false);
  const [passwordValidating, setPasswordValidating] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [password, setPassword] = useState('');
  const [jsonFile, setJsonFile] = useState<KeyringPair$Json | KeyringPairs$Json | undefined>(undefined);

  const requirePassword = useMemo<boolean>(() => (!fileValidating && !!jsonFile && !fileValidateState?.status && passwordValidateState?.status !== 'success'), [fileValidateState?.status, jsonFile, passwordValidateState?.status, fileValidating]);

  const [accountProxies, setAccountProxies] = useState<AccountProxy[]>([]);

  const onChangeFile = useCallback((info: UploadChangeParam<UploadFile<unknown>>) => {
    if (fileValidating) {
      return;
    }

    setFileValidating(true);
    setFileValidateState({});
    const uploadFile = info.file;

    uploadFile.originFileObj?.arrayBuffer()
      .then((bytes) => {
        const json = JSON.parse(u8aToString(Uint8Array.from(Buffer.from(bytes)))) as KeyringPair$Json | KeyringPairs$Json;

        if (!isValidJsonFile(json)) {
          throw new Error(t('Invalid JSON file'));
        }

        if (JSON.stringify(jsonFile) !== JSON.stringify(json)) {
          setAccountProxies([]);
          setPassword('');
          setJsonFile(json);
          setPasswordValidateState({});
        }
      })
      .catch((e: Error) => {
        setFileValidateState({
          status: 'error',
          message: e.message
        });
      })
      .finally(() => {
        setFileValidating(false);
      });
  }, [fileValidating, jsonFile, t]);

  const onValidatePassword = useCallback(() => {
    if (!jsonFile || passwordValidating) {
      return;
    }

    setPasswordValidating(true);

    const onFail = (e: Error) => {
      setPasswordValidateState({
        status: 'error',
        message: e.message
      });
      selectPassword();
    };

    if (isKeyringPairs$Json(jsonFile)) {
      parseBatchSingleJson({
        json: jsonFile,
        password
      })
        .then(({ accountProxies }) => {
          setAccountProxies(accountProxies);
          setPasswordValidateState({ status: 'success' });
        })
        .catch(onFail)
        .finally(() => {
          setPasswordValidating(false);
        });
    } else {
      parseInfoSingleJson({
        json: jsonFile,
        password
      })
        .then(({ accountProxy }) => {
          setAccountProxies([accountProxy]);
          setPasswordValidateState({ status: 'success' });
        })
        .catch(onFail)
        .finally(() => {
          setPasswordValidating(false);
        });
    }
  }, [jsonFile, passwordValidating, password]);

  const onImport = useCallback(() => {
    if (!jsonFile) {
      return;
    }

    checkUnlock()
      .then(() => {
        setSubmitting(true);

        setTimeout(() => {
          const isMultiple = isKeyringPairs$Json(jsonFile);

          (isMultiple
            ? batchRestoreV2({
              file: jsonFile,
              password,
              isAllowed: true,
              proxyIds: undefined
            })
            : jsonRestoreV2({
              file: jsonFile,
              password: password,
              address: accountProxies[0].id,
              isAllowed: true,
              withMasterPassword: true
            }))
            .then(() => {
              setTimeout(() => {
                if (isMultiple) {
                  navigate('/keyring/migrate-password');
                } else {
                  onComplete();
                }
              }, 1000);
            })
            .catch((e: Error) => {
              setPasswordValidateState({
                message: e.message,
                status: 'error'
              });
              selectPassword();
            })
            .finally(() => {
              setSubmitting(false);
            });
        }, 500);
      }).catch(() => {
      // User cancel unlock
      });
  }, [accountProxies, checkUnlock, jsonFile, navigate, onComplete, password]);

  const onSubmit = useCallback(() => {
    if (!jsonFile) {
      return;
    }

    if (!requirePassword) {
      onImport();
    } else {
      onValidatePassword();
    }
  }, [jsonFile, onImport, onValidatePassword, requirePassword]);

  const renderItem = useCallback((account: AccountProxy): React.ReactNode => {
    return (
      <AccountCard
        accountName={account.name}
        address={account.id}
        addressPreLength={9}
        addressSufLength={9}
        avatarIdentPrefix={42}
        className='account-item'
        key={account.id}
      />
    );
  }, []);

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const value = event.target.value;

    if (!value) {
      setPasswordValidateState({
        message: t('Password is required'),
        status: 'error'
      });
    } else {
      setPasswordValidateState({});
    }

    setPassword(value);
  }, [t]);

  useEffect(() => {
    if (requirePassword) {
      focusPassword();
    }
  }, [requirePassword]);

  return (
    <PageWrapper className={CN(className)}>
      <Layout.WithSubHeaderOnly
        onBack={onBack}
        rightFooterButton={{
          children: requirePassword ? t('Unlock file') : t('Import by JSON file'),
          icon: FooterIcon,
          onClick: onSubmit,
          disabled: !!fileValidateState.status || (!requirePassword && passwordValidateState.status !== 'success') || !password,
          loading: fileValidating || passwordValidating || submitting
        }}
        subHeaderIcons={[
          {
            icon: <CloseIcon />,
            onClick: goHome
          }
        ]}
        title={t<string>('Import from JSON file')}
      >
        <div className={CN('container')}>
          <div className='description'>
            {t('Drag and drop the JSON file you exported from Polkadot.{js}')}
          </div>
          <Form
            className='form-container'
            form={form}
            name={formName}
          >
            <Form.Item
              validateStatus={fileValidateState.status}
            >
              <Upload.SingleFileDragger
                accept={'application/json'}
                className='file-selector'
                disabled={fileValidating}
                hint={t('Drag and drop the JSON file you exported from Polkadot.{js}')}
                onChange={onChangeFile}
                statusHelp={fileValidateState.message}
                title={t('Import by JSON file')}
              />
            </Form.Item>
            {
              requirePassword && (
                <Form.Item
                  validateStatus={passwordValidateState.status}
                >
                  <div className='input-label'>
                    {t('Please enter the password you have used when creating your Polkadot.{js} account')}
                  </div>
                  <Input.Password
                    id={`${formName}_${passwordField}`}
                    onChange={onChangePassword}
                    placeholder={t('Password')}
                    statusHelp={passwordValidateState.message}
                    type='password'
                    value={password}
                  />
                </Form.Item>
              )
            }
            {
              passwordValidateState.status === 'success' && (
                <Form.Item
                  validateStatus={passwordValidateState.status}
                >
                  <div className='input-label'>
                    {t('List accounts in JSON file')}
                  </div>
                </Form.Item>
              )
            }
          </Form>
          {
            passwordValidateState.status === 'success' && (
              <SwList.Section
                displayRow={true}
                list={accountProxies}
                renderItem={renderItem}
                rowGap='var(--row-gap)'
              />
            )
          }
        </div>
      </Layout.WithSubHeaderOnly>
    </PageWrapper>
  );
};

const ImportJson = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {
    '--row-gap': `${token.sizeXS}px`,

    '.container': {
      padding: token.padding,
      paddingBottom: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },

    '.description': {
      padding: `0 ${token.padding}px`,
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6,
      color: token.colorTextDescription,
      textAlign: 'center'
    },

    '.form-container': {
      marginTop: token.margin
    },

    '.ant-form-item:last-child': {
      marginBottom: 0
    },

    '.input-label': {
      fontSize: token.fontSizeHeading6,
      lineHeight: token.lineHeightHeading6,
      color: token.colorTextDescription,
      marginBottom: token.margin
    },

    '.account-list-item': {
      marginTop: -token.marginXS,

      '.account-item': {
        cursor: 'default'
      },

      '.ant-web3-block-right-item': {
        marginRight: 0
      }
    },

    '.ant-web3-block': {
      display: 'flex !important'
    },

    '.ant-sw-modal-body': {
      padding: `${token.padding}px 0 ${token.padding}px`,
      flexDirection: 'column',
      display: 'flex'
    },

    '.ant-sw-list-wrapper': {
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      margin: `0 -${token.margin}px`
    },

    '.file-selector': {
      '.ant-upload-drag-single': {
        height: 168
      }
    }
  };
});

export default ImportJson;
