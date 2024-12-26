// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ConfirmationRequestBase } from '@subwallet/extension-base/background/types';
import { EXTENSION_REQUEST_URL } from '@subwallet/extension-base/services/request-service/constants';
import { isWalletConnectRequest } from '@subwallet/extension-base/services/wallet-connect-service/helpers';
import { getDomainFromUrl } from '@subwallet/extension-base/utils';
import { ThemeProps } from '@subwallet/extension-koni-ui/types';
import { Icon, Image, Logo, Typography } from '@subwallet/react-ui';
import CN from 'classnames';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import { DualLogo, WalletConnect } from '../Logo';

interface Props extends ThemeProps {
  request: ConfirmationRequestBase;
  linkIcon?: React.ReactNode;
  linkIconBg?: string;
}

const WalletConnectLogo = (
  <Icon
    customIcon={(
      <WalletConnect
        height='1em'
        width='1em'
      />
    )}
    size='md'
    type='customIcon'
  />
);

// Get domain from full url
function Component ({ className, linkIcon, linkIconBg, request }: Props) {
  const domain = useMemo(() => getDomainFromUrl(request.url), [request.url]);
  const rightLogo = useMemo(() => {
    if (domain === EXTENSION_REQUEST_URL) {
      return (
        <Logo
          network={'subwallet'}
          shape='squircle'
          size={56}
        />
      );
    }

    return (
      <Image
        height={56}
        shape='squircle'
        src={`https://icons.duckduckgo.com/ip2/${domain}.ico`}
        width={56}
      />
    );
  }, [domain]);

  const isWCRequest = useMemo(() => isWalletConnectRequest(request.id), [request.id]);

  const linkNode = useMemo((): React.ReactNode => isWCRequest ? WalletConnectLogo : linkIcon, [isWCRequest, linkIcon]);

  return (
    <div className={CN(className, 'confirmation-general-info-container')}>
      <DualLogo
        leftLogo={(
          <Logo
            network={'subwallet'}
            shape='squircle'
            size={56}
          />
        )}
        linkIcon={linkNode}
        linkIconBg={linkIconBg}
        rightLogo={rightLogo}
      />
      <Typography.Paragraph className={'text-tertiary __domain'}>
        {domain}
      </Typography.Paragraph>
    </div>
  );
}

const ConfirmationGeneralInfo = styled(Component)<Props>(({ theme: { token } }: Props) => ({
  textAlign: 'center',

  '.__domain': {
    marginTop: `calc((var(--content-gap) - ${token.size}px))`
  }
}));

export default ConfirmationGeneralInfo;
