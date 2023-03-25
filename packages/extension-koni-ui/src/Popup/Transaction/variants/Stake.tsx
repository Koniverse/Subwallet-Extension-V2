// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ExtrinsicType, NominationPoolInfo, NominatorMetadata, StakingType, ValidatorInfo } from '@subwallet/extension-base/background/KoniTypes';
import { _STAKING_CHAIN_GROUP } from '@subwallet/extension-base/services/chain-service/constants';
import { _getChainNativeTokenBasicInfo, _getChainNativeTokenSlug, _getOriginChainOfAsset } from '@subwallet/extension-base/services/chain-service/utils';
import { SWTransactionResponse } from '@subwallet/extension-base/services/transaction-service/types';
import { PageWrapper } from '@subwallet/extension-koni-ui/components';
import { AccountSelector } from '@subwallet/extension-koni-ui/components/Field/AccountSelector';
import AmountInput from '@subwallet/extension-koni-ui/components/Field/AmountInput';
import MultiValidatorSelector from '@subwallet/extension-koni-ui/components/Field/MultiValidatorSelector';
import PoolSelector from '@subwallet/extension-koni-ui/components/Field/PoolSelector';
import RadioGroup from '@subwallet/extension-koni-ui/components/Field/RadioGroup';
import { TokenSelector } from '@subwallet/extension-koni-ui/components/Field/TokenSelector';
import MetaInfo from '@subwallet/extension-koni-ui/components/MetaInfo';
import { StakingNetworkDetailModal } from '@subwallet/extension-koni-ui/components/Modal/Staking/StakingNetworkDetailModal';
import { ALL_KEY } from '@subwallet/extension-koni-ui/constants/commont';
import { DataContext } from '@subwallet/extension-koni-ui/contexts/DataContext';
import { useGetBalance, useSelector } from '@subwallet/extension-koni-ui/hooks';
import useGetChainStakingMetadata from '@subwallet/extension-koni-ui/hooks/screen/staking/useGetChainStakingMetadata';
import useGetNominatorInfo from '@subwallet/extension-koni-ui/hooks/screen/staking/useGetNominatorInfo';
import useGetSupportedStakingTokens from '@subwallet/extension-koni-ui/hooks/screen/staking/useGetSupportedStakingTokens';
import { submitBonding, submitPoolBonding } from '@subwallet/extension-koni-ui/messaging';
import { accountFilterFunc, fetchChainValidators } from '@subwallet/extension-koni-ui/Popup/Transaction/helper/stakingHandler';
import FreeBalance from '@subwallet/extension-koni-ui/Popup/Transaction/parts/FreeBalance';
import TransactionContent from '@subwallet/extension-koni-ui/Popup/Transaction/parts/TransactionContent';
import TransactionFooter from '@subwallet/extension-koni-ui/Popup/Transaction/parts/TransactionFooter';
import { TransactionContext, TransactionFormBaseProps } from '@subwallet/extension-koni-ui/Popup/Transaction/Transaction';
import { ThemeProps } from '@subwallet/extension-koni-ui/types';
import { FormCallbacks, FormFieldData } from '@subwallet/extension-koni-ui/types/form';
import { isAccountAll } from '@subwallet/extension-koni-ui/util';
import { convertFieldToObject, simpleCheckForm } from '@subwallet/extension-koni-ui/util/form/form';
import { parseNominations } from '@subwallet/extension-koni-ui/util/transaction/stake';
import { Button, Divider, Form, Icon } from '@subwallet/react-ui';
import { useForm } from '@subwallet/react-ui/es/form/Form';
import BigN from 'bignumber.js';
import { PlusCircle } from 'phosphor-react';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import styled from 'styled-components';

type Props = ThemeProps

enum FormFieldName {
  TOKEN = 'token',
  VALUE = 'value',
  NOMINATE = 'nominate',
  POOL = 'pool',
  TYPE = 'type',
}

interface StakeFormProps extends TransactionFormBaseProps {
  [FormFieldName.TOKEN]: string;
  [FormFieldName.VALUE]: string;
  [FormFieldName.NOMINATE]: string;
  [FormFieldName.POOL]: string;
  [FormFieldName.TYPE]: StakingType;
}

const Component: React.FC<Props> = (props: Props) => {
  const { className } = props;

  const { t } = useTranslation();
  const { chain: stakingChain, type: _stakingType } = useParams();

  const dataContext = useContext(DataContext);
  const { chain, from, onDone, setChain, setDisabledRightBtn, setFrom, setShowRightBtn, setTransactionType } = useContext(TransactionContext);

  const defaultStakingType: StakingType = useMemo(() => {
    switch (_stakingType) {
      case StakingType.POOLED:
        return StakingType.POOLED;
      case StakingType.NOMINATED:
        return StakingType.NOMINATED;
      default:
        return StakingType.POOLED;
    }
  }, [_stakingType]);

  const [form] = useForm<StakeFormProps>();

  const [isDisable, setIsDisable] = useState(true);

  const currentTokenSlug = Form.useWatch(FormFieldName.TOKEN, form);
  const stakingType = Form.useWatch(FormFieldName.TYPE, form);

  const chainStakingMetadata = useGetChainStakingMetadata(chain);
  const nominatorMetadataList = useGetNominatorInfo(chain, stakingType, from);
  const nominatorMetadata: NominatorMetadata | undefined = useMemo(() => nominatorMetadataList[0], [nominatorMetadataList]);
  const { nativeTokenBalance } = useGetBalance(chain, from);
  const tokenList = useGetSupportedStakingTokens(stakingType, from, stakingChain);

  const isRelayChain = useMemo(() => _STAKING_CHAIN_GROUP.relay.includes(chain), [chain]);
  const [loading, setLoading] = useState(false);

  // TODO: should do better to get validators info
  const { nominationPoolInfoMap, validatorInfoMap } = useSelector((state) => state.bonding);
  const { chainInfoMap } = useSelector((state) => state.chainStore);
  const { currentAccount } = useSelector((state) => state.accountState);
  const { assetRegistry } = useSelector((state) => state.assetRegistry);

  const existentialDeposit = useMemo(() => {
    const assetInfo = assetRegistry[currentTokenSlug];

    if (assetInfo) {
      return assetInfo.minAmount || '0';
    }

    return '0';
  }, [assetRegistry, currentTokenSlug]);

  const maxValue = useMemo(() => {
    const balance = new BigN(nativeTokenBalance.value);
    const ed = new BigN(existentialDeposit);

    if (ed.gte(balance)) {
      return '0';
    } else {
      return balance.minus(ed).toString();
    }
  }, [existentialDeposit, nativeTokenBalance.value]);

  const { decimals, symbol } = useMemo((): { symbol: string, decimals: number } => {
    if (chain) {
      const chainInfo = chainInfoMap[chain];

      return _getChainNativeTokenBasicInfo(chainInfo);
    }

    return {
      decimals: 0,
      symbol: 'Unit'
    };
  }, [chainInfoMap, chain]);

  const isAllAccount = isAccountAll(currentAccount?.address || '');

  const defaultSlug = useMemo(() => {
    if (stakingChain && stakingChain !== ALL_KEY) {
      const chainInfo = chainInfoMap[stakingChain];

      return _getChainNativeTokenSlug(chainInfo);
    }

    return '';
  }, [chainInfoMap, stakingChain]);

  const formDefault: StakeFormProps = useMemo(() => {
    return {
      from: from,
      chain: chain,
      [FormFieldName.VALUE]: '0',
      [FormFieldName.POOL]: '',
      [FormFieldName.NOMINATE]: '',
      [FormFieldName.TOKEN]: defaultSlug,
      [FormFieldName.TYPE]: defaultStakingType
    };
  }, [defaultSlug, from, defaultStakingType, chain]);

  const onFieldsChange: FormCallbacks<StakeFormProps>['onFieldsChange'] = useCallback((changedFields: FormFieldData[], allFields: FormFieldData[]) => {
    const { error } = simpleCheckForm(changedFields, allFields);

    const allMap = convertFieldToObject<StakeFormProps>(allFields);
    const changesMap = convertFieldToObject<StakeFormProps>(changedFields);

    const { from, [FormFieldName.TOKEN]: token } = changesMap;

    if (from) {
      setFrom(from);
    }

    if (token !== undefined) {
      const chain = _getOriginChainOfAsset(token);

      setChain(chain);
    }

    const checkEmpty: Record<string, boolean> = {};

    const stakingType = allMap[FormFieldName.TYPE];

    for (const [key, value] of Object.entries(allMap)) {
      checkEmpty[key] = !!value;
    }

    if (stakingType === StakingType.NOMINATED) {
      checkEmpty.pool = true;
    } else if (stakingType === StakingType.POOLED) {
      checkEmpty.nominate = true;
    }

    setIsDisable(error || Object.values(checkEmpty).some((value) => !value));
  }, [setChain, setFrom]);

  const getSelectedValidators = useCallback((nominations: string[]) => {
    const validatorList = validatorInfoMap[chain];

    if (!validatorList) {
      return [];
    }

    const result: ValidatorInfo[] = [];

    validatorList.forEach((validator) => {
      if (nominations.includes(validator.address)) {
        result.push(validator);
      }
    });

    return result;
  }, [chain, validatorInfoMap]);

  const getSelectedPool = useCallback((poolId?: string) => {
    const nominationPoolList = nominationPoolInfoMap[chain];

    for (const pool of nominationPoolList) {
      if (String(pool.id) === poolId) {
        return pool;
      }
    }

    return undefined;
  }, [nominationPoolInfoMap, chain]);

  const onSubmit: FormCallbacks<StakeFormProps>['onFinish'] = useCallback((values: StakeFormProps) => {
    if (!nominatorMetadata) {
      return;
    }

    setLoading(true);
    const { from, [FormFieldName.NOMINATE]: nominate, [FormFieldName.POOL]: pool, [FormFieldName.VALUE]: value, [FormFieldName.TYPE]: type } = values;
    let bondingPromise: Promise<SWTransactionResponse>;

    if (pool && type === StakingType.POOLED) {
      const selectedPool = getSelectedPool(pool);

      bondingPromise = submitPoolBonding({
        amount: value, // TODO: value is wrong
        chain: chain,
        nominatorMetadata: nominatorMetadata,
        selectedPool: selectedPool as NominationPoolInfo,
        address: from
      });
    } else {
      const selectedValidators = getSelectedValidators(parseNominations(nominate));

      bondingPromise = submitBonding({
        amount: value,
        chain: chain,
        nominatorMetadata: nominatorMetadata,
        selectedValidators,
        type: StakingType.NOMINATED
      });
    }

    setTimeout(() => {
      bondingPromise
        .then((response) => {
          const { errors, extrinsicHash, warnings } = response;

          if (errors.length || warnings.length) {
            console.log('failed', errors, warnings);
            // setErrors(errors.map((e) => e.message));
            // setWarnings(warnings.map((w) => w.message));
          } else if (extrinsicHash) {
            onDone(extrinsicHash);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 300);
  }, [nominatorMetadata, chain, getSelectedPool, getSelectedValidators, onDone]);

  const getMetaInfo = useCallback(() => {
    if (chainStakingMetadata) {
      return (
        <MetaInfo
          className={'meta-info'}
          labelColorScheme={'gray'}
          spaceSize={'xs'}
          valueColorScheme={'light'}
        >
          {
            chainStakingMetadata.expectedReturn &&
            (
              <MetaInfo.Number
                label={t('Estimated earnings:')}
                suffix={'% / year'}
                value={chainStakingMetadata.expectedReturn}
              />
            )
          }

          {
            chainStakingMetadata.minStake &&
            (
              <MetaInfo.Number
                decimals={decimals}
                label={t('Minimum active:')}
                suffix={symbol}
                value={chainStakingMetadata.minStake}
                valueColorSchema={'success'}
              />
            )
          }
        </MetaInfo>
      );
    }

    return null;
  }, [chainStakingMetadata, decimals, symbol, t]);

  useEffect(() => {
    const address = currentAccount?.address || '';

    if (address) {
      if (!isAccountAll(address)) {
        setFrom(address);
      }
    }
  }, [currentAccount?.address, setFrom]);

  useEffect(() => {
    if (stakingChain && stakingChain !== ALL_KEY) {
      setChain(stakingChain);
    }
  }, [setChain, stakingChain]);

  useEffect(() => {
    setTransactionType(ExtrinsicType.STAKING_JOIN_POOL);
    setShowRightBtn(true);
  }, [setShowRightBtn, setTransactionType]);

  useEffect(() => {
    setDisabledRightBtn(!chainStakingMetadata);
  }, [chainStakingMetadata, setDisabledRightBtn]);

  useEffect(() => {
    // fetch validators when change chain
    // _stakingType is predefined form start
    if (!!chain && !!from) {
      fetchChainValidators(chain, _stakingType || ALL_KEY);
    }
  }, [from, _stakingType, chain]);

  return (
    <>
      <TransactionContent>
        <PageWrapper
          className={className}
          resolve={dataContext.awaitStores(['staking'])}
        >
          <Form
            className={'form-container form-space-sm'}
            form={form}
            initialValues={formDefault}
            onFieldsChange={onFieldsChange}
            onFinish={onSubmit}
          >
            <Form.Item
              className='staking-type'
              hidden={_stakingType !== ALL_KEY}
              name={FormFieldName.TYPE}
            >
              <RadioGroup
                optionType='button'
                options={[
                  {
                    label: 'Pools',
                    value: StakingType.POOLED
                  },
                  {
                    label: 'Nominate',
                    value: StakingType.NOMINATED
                  }
                ]}
              />
            </Form.Item>
            <Form.Item
              hidden={!isAllAccount}
              name={'from'}
            >
              <AccountSelector filter={accountFilterFunc(chainInfoMap, stakingType, chain || stakingChain)} />
            </Form.Item>

            {
              !isAllAccount &&
              (
                <Form.Item name={FormFieldName.TOKEN}>
                  <TokenSelector
                    disabled={stakingChain !== ALL_KEY || !from}
                    items={tokenList}
                    prefixShape='circle'
                  />
                </Form.Item>
              )
            }

            <FreeBalance
              address={from}
              chain={chain}
              className={'account-free-balance'}
              label={t('Available balance:')}
            />

            <div className={'form-row'}>
              {
                isAllAccount &&
                (
                  <Form.Item name={FormFieldName.TOKEN}>
                    <TokenSelector
                      disabled={stakingChain !== ALL_KEY || !from}
                      items={tokenList}
                      prefixShape='circle'
                    />
                  </Form.Item>
                )
              }

              <Form.Item
                hideError
                name={FormFieldName.VALUE}
                rules={[
                  { required: true },
                  ({ getFieldValue }) => ({
                    validator: (_, value: string) => {
                      const type = getFieldValue(FormFieldName.TYPE) as StakingType;
                      const val = new BigN(value);

                      if (type === StakingType.POOLED) {
                        if (val.lte(0)) {
                          return Promise.reject(new Error('Value must be greater then 0'));
                        }
                      } else {
                        if (!nominatorMetadata?.isBondedBefore || !isRelayChain) {
                          if (val.lte(0)) {
                            return Promise.reject(new Error('Value must be greater then 0'));
                          }
                        }
                      }

                      return Promise.resolve();
                    }
                  })
                ]}
              >
                <AmountInput
                  decimals={decimals}
                  maxValue={maxValue}
                />
              </Form.Item>
            </div>

            <Form.Item
              hidden={stakingType !== StakingType.POOLED}
              name={FormFieldName.POOL}
            >
              <PoolSelector
                chain={chain}
                from={from}
                label={t('Select pool')}
              />
            </Form.Item>

            <Form.Item
              hidden={stakingType !== StakingType.NOMINATED}
              name={FormFieldName.NOMINATE}
            >
              <MultiValidatorSelector
                chain={currentTokenSlug ? chain : ''}
                from={currentTokenSlug ? from : ''}
              />
            </Form.Item>
          </Form>
          {
            chainStakingMetadata && (
              <>
                <Divider />
                {getMetaInfo()}
              </>
            )
          }
        </PageWrapper>
      </TransactionContent>

      <TransactionFooter
        errors={[]}
        warnings={[]}
      >
        <Button
          disabled={isDisable}
          icon={(
            <Icon
              phosphorIcon={PlusCircle}
              weight={'fill'}
            />
          )}
          loading={loading}
          onClick={form.submit}
        >
          {t('Stake')}
        </Button>
      </TransactionFooter>

      {
        chainStakingMetadata &&
        (
          <StakingNetworkDetailModal
            estimatedEarning={chainStakingMetadata.expectedReturn}
            inflation={chainStakingMetadata.inflation}
            maxValidatorPerNominator={chainStakingMetadata.maxValidatorPerNominator}
            minimumActive={{ decimals, value: chainStakingMetadata.minStake, symbol }}
            unstakingPeriod={chainStakingMetadata.unstakingPeriod}
          />
        )
      }
    </>
  );
};

const Stake = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {
    '.staking-type': {
      marginBottom: token.margin
    },

    '.account-free-balance': {
      marginBottom: token.marginXS
    },

    '.meta-info': {
      marginTop: token.paddingSM
    },

    '.react-tabs__tab-list': {
      marginLeft: 0,
      marginRight: 0
    }
  };
});

export default Stake;
