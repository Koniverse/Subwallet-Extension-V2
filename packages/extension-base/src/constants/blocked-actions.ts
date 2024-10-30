// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ExtrinsicType } from '@subwallet/extension-base/background/KoniTypes';
import { fetchStaticData } from '@subwallet/extension-base/utils';

interface BlockedActionsFeaturesMap {
  blockedActionsMap: Record<ExtrinsicType, string[]>,
  blockedFeaturesList: string[]
}

const PRODUCTION_BRANCHES = ['master', 'webapp', 'webapp-dev'];
const branchName = process.env.BRANCH_NAME || 'koni-dev';
const targetFolder = PRODUCTION_BRANCHES.indexOf(branchName) > -1 ? 'list' : 'preview';

interface EnvConfig {
  appConfig?: AppConfig,
  browserConfig?: BrowserConfig,
  osConfig?: OSConfig
}

// todo: check if can check exactly App Environment, Browser Type, OS Type

interface AppConfig {
  environment: string,
  version?: string,
}

interface BrowserConfig {
  type: string,
  version?: string
}

interface OSConfig {
  type: string,
  version?: string
}

type BlockedConfigObjects = Record<string, EnvConfig>

export async function fetchBlockedConfigObjects (): Promise<BlockedConfigObjects> { // todo: recheck default return
  const targetFile = `${targetFolder}/envConfig.json`;

  return await fetchStaticData<BlockedConfigObjects>('blocked-actions', targetFile);
}

export function getPassConfigId (currentConfig: EnvConfig, blockedConfigObjects: BlockedConfigObjects) {
  const passList: string[] = [];

  Object.entries(blockedConfigObjects).forEach(([key, appliedConfig]) => {
    let passAppConfig = false;
    let passBrowserConfig = false;
    let passOSConfig = false;

    if (!appliedConfig.appConfig || !currentConfig.appConfig) {
      passAppConfig = true;
    } else {
      const isPassEnv = currentConfig.appConfig.environment === appliedConfig.appConfig.environment;
      const isPassVer = isPassVersion(currentConfig.appConfig.version as string, appliedConfig.appConfig.version);

      passAppConfig = isPassEnv && isPassVer;
    }

    if (!appliedConfig.browserConfig || !currentConfig.browserConfig) {
      passBrowserConfig = true;
    } else {
      const isPassType = currentConfig.browserConfig.type === appliedConfig.browserConfig.type;
      const isPassVer = isPassVersion(currentConfig.browserConfig.version as string, appliedConfig.browserConfig.version);

      passBrowserConfig = isPassType && isPassVer;
    }

    if (!appliedConfig.osConfig || !currentConfig.osConfig) {
      passOSConfig = true;
    } else {
      const isPassType = currentConfig.osConfig.type === appliedConfig.osConfig.type;
      const isPassVer = isPassVersion(currentConfig.osConfig.version as string, appliedConfig.osConfig.version);

      passOSConfig = isPassType && isPassVer;
    }

    if (passAppConfig && passBrowserConfig && passOSConfig) {
      passList.push(key);
    }
  });

  return passList;
}

function isPassVersion (versionStr: string, versionCondition?: string) { // todo: check if has case versionStr = undefined?
  const versionArr = versionStr.split('.');

  if (!versionCondition) {
    return true;
  }

  if (versionCondition.includes('>=')) {
    const versionConditionStr = versionCondition.replace('>=', '').trim();
    const versionConditionArr = versionConditionStr.split('.'); // todo: map(Number) instead of parseInt later

    if (versionConditionStr === versionStr) {
      return true;
    }

    for (let i = 0; i < versionArr.length; i++) {
      if (parseInt(versionArr[i]) < parseInt(versionConditionArr[i])) {
        return false;
      }

      if (parseInt(versionArr[i]) > parseInt(versionConditionArr[i])) {
        return true;
      }
    }

    return true;
  }

  if (versionCondition.includes('>')) {
    const versionConditionArr = versionCondition.replace('>', '').trim().split('.');

    for (let i = 0; i < versionArr.length; i++) {
      if (parseInt(versionArr[i]) < parseInt(versionConditionArr[i])) {
        return false;
      }

      if (parseInt(versionArr[i]) > parseInt(versionConditionArr[i])) {
        return true;
      }
    }

    return false;
  }

  // todo: also handle less use cases: <, <=

  const versionConditionStr = versionCondition.trim();

  return versionStr === versionConditionStr;
}

export async function fetchLastestBlockedActionsAndFeatures (ids: string[]) {
  const targetFiles = ids.map((id) => `${targetFolder}/${id}.json`);

  return await Promise.all(targetFiles.map((targetFile) => fetchStaticData<BlockedActionsFeaturesMap>('blocked-actions', targetFile)));
}
