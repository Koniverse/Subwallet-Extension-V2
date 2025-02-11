// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ProcessTransactionData, StepStatus } from '@subwallet/extension-base/types';
import { ThemeProps } from '@subwallet/extension-koni-ui/types';
import { Icon } from '@subwallet/react-ui';
import { SwIconProps } from '@subwallet/react-ui/es/icon';
import CN from 'classnames';
import { CheckCircle, ProhibitInset, Spinner } from 'phosphor-react';
import { IconWeight } from 'phosphor-react/src/lib';
import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

type Props = ThemeProps & {
  progressData: ProcessTransactionData
};

const Component: FC<Props> = (props: Props) => {
  const { className, progressData } = props;
  const { t } = useTranslation();

  const iconProp = useMemo<SwIconProps>(() => {
    const iconInfo = (() => {
      if (progressData.status === StepStatus.COMPLETE) {
        return {
          phosphorIcon: CheckCircle,
          weight: 'fill'
        };
      } else if (progressData.status === StepStatus.FAILED) {
        return {
          phosphorIcon: ProhibitInset,
          weight: 'fill'
        };
      }

      return {
        phosphorIcon: Spinner
      };
    })();

    return {
      phosphorIcon: iconInfo.phosphorIcon,
      weight: iconInfo.weight as IconWeight,
      size: 'md'
    };
  }, [progressData.status]);

  const title = useMemo(() => {
    return t('Sending token ...');
  }, [t]);

  return (
    <div
      className={CN(className, {
        '-processing': ![StepStatus.COMPLETE, StepStatus.FAILED].includes(progressData.status),
        '-complete': progressData.status === StepStatus.COMPLETE,
        '-failed': progressData.status === StepStatus.FAILED
      })}
    >
      <Icon
        {...iconProp}
        className={CN('__icon')}
      />

      <div className='__title'>
        {title}
      </div>
    </div>
  );
};

export const CurrentProgressStep = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return ({
    display: 'flex',
    alignItems: 'center',
    gap: token.sizeSM,

    '.__icon': {
      minWidth: 32,
      height: 32,
      borderRadius: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',

      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        inset: 0,
        borderRadius: '100%',
        zIndex: 1,
        opacity: 0.1
      },

      svg: {
        position: 'relative',
        zIndex: 2
      }
    },

    '&.-processing': {
      color: token.colorWarning,

      '.__icon:before': {
        backgroundColor: token.colorWarning
      }
    },

    '&.-complete': {
      color: token.colorSuccess,

      '.__icon:before': {
        backgroundColor: token.colorSuccess
      }
    },

    '&.-failed': {
      color: token.colorError,

      '.__icon:before': {
        backgroundColor: token.colorError
      }
    }
  });
});
