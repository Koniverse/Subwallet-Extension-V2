// Copyright 2019-2022 @subwallet/extension-koni authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { CaSetting } from '@subwallet/extension-base/background/KoniTypes';
import { EXTENSION_PREFIX } from '@subwallet/extension-base/defaults';
import SubscribableStore from '@subwallet/extension-base/stores/SubscribableStore';

export default class CASettingStore extends SubscribableStore<CaSetting> {
  constructor () {
    super(EXTENSION_PREFIX ? `${EXTENSION_PREFIX}subwallet-ca-store` : null);
  }
}
