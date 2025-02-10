// Copyright 2019-2022 @subwallet/extension-web-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { fetchStaticData } from '@subwallet/extension-base/utils';
import { MktCampaignModalContext, MktCampaignModalInfo } from '@subwallet/extension-web-ui/contexts/MktCampaignModalContext';
import { useGroupYieldPosition } from '@subwallet/extension-web-ui/hooks';
import { useGetAppInstructionData } from '@subwallet/extension-web-ui/hooks/static-content/useGetAppInstructionData';
import { useHandleAppBannerMap } from '@subwallet/extension-web-ui/hooks/static-content/useHandleAppBannerMap';
import { useHandleAppConfirmationMap } from '@subwallet/extension-web-ui/hooks/static-content/useHandleAppConfirmationMap';
import { useHandleAppPopupMap } from '@subwallet/extension-web-ui/hooks/static-content/useHandleAppPopupMap';
import { RootState } from '@subwallet/extension-web-ui/stores';
import { EarningPoolsParam, EarningPositionDetailParam } from '@subwallet/extension-web-ui/types';
import { AppBannerData, AppBasicInfoData, AppConfirmationData, AppPopupData, MktCampaignHistoryData, OnlineContentDataType, PopupFrequency } from '@subwallet/extension-web-ui/types/staticContent';
import { openInNewTab } from '@subwallet/extension-web-ui/utils';
import React, { useCallback, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import urlParse from 'url-parse';

// todo: Recheck this file (compare with the one in extension-koni-ui)

interface AppOnlineContentContextProviderProps {
  children?: React.ReactElement;
}

interface AppOnlineContentContextType {
  appPopupMap: Record<string, AppPopupData[]>;
  appBannerMap: Record<string, AppBannerData[]>;
  appConfirmationMap: Record<string, AppConfirmationData[]>;
  popupHistoryMap: Record<string, MktCampaignHistoryData>;
  bannerHistoryMap: Record<string, MktCampaignHistoryData>;
  confirmationHistoryMap: Record<string, MktCampaignHistoryData>;
  updatePopupHistoryMap: (id: string) => void;
  updateBannerHistoryMap: (ids: string[]) => void;
  updateConfirmationHistoryMap: (id: string) => void;
  checkPopupExistTime: (info: AppBasicInfoData) => boolean;
  checkPopupVisibleByFrequency: (
    repeat: PopupFrequency,
    lastShowTime: number,
    showTimes: number,
    customizeRepeatTime: number | null,
  ) => boolean;
  handleButtonClick: (id: string) => (type: OnlineContentDataType, url?: string) => void;
  checkBannerVisible: (showTimes: number) => boolean;
  checkPositionParam: (screen: string, positionParams: { property: string; value: string }[], value: string[]) => boolean;
  showAppPopup: (currentRoute: string | undefined) => void;
}

const TIME_MILLI = {
  DAY: 86400,
  WEEK: 604800,
  MONTH: 2592000
};

export const AppOnlineContentContext = React.createContext({} as AppOnlineContentContextType);

const getPositionByRouteName = (currentRoute?: string) => {
  if (!currentRoute) {
    return '';
  }

  switch (currentRoute) {
    case '/home/nfts/collections':
      return 'nft';
    case '/home/earning':
      return 'earning';
    case '/home/crowdloans':
      return 'crowdloan';
    case '/home/mission-pools':
      return 'mission_pool';
    case '/home/history':
      return 'history';
    case '/':
    default:
      return 'token';
  }
};

export const AppOnlineContentContextProvider = ({ children }: AppOnlineContentContextProviderProps) => {
  const mktCampaignModalContext = useContext(MktCampaignModalContext);
  const yieldPositionList = useGroupYieldPosition();
  const language = useSelector((state: RootState) => state.settings.language);
  const { getAppInstructionData } = useGetAppInstructionData(language);
  const navigate = useNavigate();

  const { bannerHistoryMap,
    confirmationHistoryMap,
    popupHistoryMap } = useSelector((state: RootState) => state.staticContent);

  const getAppContentData = useCallback(async (dataType: OnlineContentDataType) => {
    return await fetchStaticData(`app-${dataType}s`);
  }, []);

  // check popup exist time
  const checkPopupExistTime = useCallback((info: AppBasicInfoData) => {
    if (info.start_time && info.stop_time) {
      const now = new Date();
      const startTime = new Date(info.start_time);
      const endTime = new Date(info.stop_time);

      if (now >= startTime && now <= endTime) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }, []);

  // check popup frequency
  const checkPopupVisibleByFrequency = useCallback(
    (repeat: PopupFrequency, lastShowTime: number, showTimes: number, customizeRepeatTime: number | null) => {
      if (customizeRepeatTime) {
        return Date.now() - lastShowTime > customizeRepeatTime * 86400000;
      } else {
        if (repeat) {
          switch (repeat) {
            case 'once':
              return showTimes < 1;
            case 'daily':
              return Date.now() - lastShowTime > TIME_MILLI.DAY;
            case 'weekly':
              return Date.now() - lastShowTime > TIME_MILLI.WEEK;
            case 'monthly':
              return Date.now() - lastShowTime > TIME_MILLI.MONTH;
            case 'every_time':
              return true;
          }
        } else {
          return Date.now() - lastShowTime > TIME_MILLI.DAY;
        }
      }
    },
    []
  );

  // check banner hidden
  const checkBannerVisible = useCallback((showTimes: number) => {
    return showTimes === 0;
  }, []);

  const checkPositionParam = useCallback(
    (screen: string, positionParams: { property: string; value: string }[], value: string[]) => {
      if (positionParams && positionParams.length) {
        switch (screen) {
          case 'token_detail': {
            const allowTokenSlugs = positionParams
              .filter((item) => item.property === 'tokenSlug')
              .map((param) => param.value);

            return allowTokenSlugs.some((slug) => value[0].toLowerCase().includes(slug.toLowerCase()));
          }

          case 'earning': {
            const allowPoolSlugs = positionParams.filter((item) => item.property === 'poolSlug').map((param) => param.value);

            return allowPoolSlugs.some((slug) => value[0].toLowerCase().includes(slug.toLowerCase()));
          }

          case 'missionPools': {
            const selectedIds = positionParams.filter((item) => item.property === 'id').map((param) => param.value);

            return selectedIds.some((id) => value[0].toLowerCase().includes(id.toLowerCase()));
          }

          case 'send-fund': {
            const currentChain = value[0];
            const currentDestChain = value[1];
            let isValidChain = true;
            let isValidDestChain = true;

            positionParams.forEach((item) => {
              if (item.property === 'chainValue') {
                isValidChain = item.value === currentChain;
              }

              if (item.property === 'destChainValue') {
                isValidDestChain = item.value === currentDestChain;
              }
            });

            return isValidChain && isValidDestChain;
          }

          default:
            return true;
        }
      } else {
        return true;
      }
    },
    []
  );

  const { appPopupMap, setAppPopupData, updatePopupHistoryMap } = useHandleAppPopupMap(yieldPositionList, checkPopupExistTime);
  const { appBannerMap, setAppBannerData, updateBannerHistoryMap } = useHandleAppBannerMap(
    yieldPositionList,
    checkPopupExistTime
  );
  const { appConfirmationMap, setAppConfirmationData, updateConfirmationHistoryMap } = useHandleAppConfirmationMap(yieldPositionList);

  useEffect(() => {
    getAppInstructionData();
  }, [getAppInstructionData]);

  useEffect(() => {
    const popupPromise = getAppContentData('popup');
    const bannerPromise = getAppContentData('banner');
    const confirmationPromise = getAppContentData('confirmation');

    Promise.all([popupPromise, bannerPromise, confirmationPromise])
      .then((values) => {
        // @ts-ignore
        setAppPopupData((values[0] || []) as AppPopupData[]);
        // @ts-ignore
        setAppBannerData((values[1] || []) as AppBannerData[]);
        // @ts-ignore
        setAppConfirmationData((values[2] || []) as AppConfirmationData[]);
      })
      .catch((e) => {
        console.error(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleButtonClick = useCallback(
    (id: string) => {
      return (type: OnlineContentDataType, url?: string) => {
        if (type === 'popup') {
          updatePopupHistoryMap(id);
        } else if (type === 'confirmation') {
          updateConfirmationHistoryMap(id);
        }

        if (url) {
          // eslint-disable-next-line new-cap
          const parseUrl = new urlParse(url);
          const urlQuery = parseUrl.query.substring(1);
          const urlQueryMap: Record<string, string> = {};

          urlQuery.split('&').forEach((item) => {
            const splitItem = item.split('=');

            urlQueryMap[splitItem[0]] = splitItem[1];
          });

          if (url.startsWith('subwallet://')) {
            if (parseUrl.pathname.startsWith('/main/nfts/collection')) {
              navigate('/home/nfts/collections');
            }

            if (parseUrl.pathname.startsWith('/main/crowdloans')) {
              navigate('/home/crowdloans');
            }

            if (parseUrl.pathname.startsWith('/main/earning')) {
              navigate('/home/earning');
            }

            if (parseUrl.pathname.startsWith('/main/earning/earning-position-detail')) {
              navigate('/home/earning/position-detail', { state: {
                earningSlug: urlQueryMap.slug
              } as EarningPositionDetailParam });
            }

            if (parseUrl.pathname.startsWith('/main/earning/earning-pool-list')) {
              navigate('/home/earning/pools', { state: {
                poolGroup: urlQueryMap.group,
                symbol: urlQueryMap.symbol
              } as EarningPoolsParam });
            }

            if (parseUrl.pathname.startsWith('/main/tokens/tokens/token-groups-detail')) {
              navigate(`home/tokens/detail/${urlQueryMap.slug}`);
            }
          } else {
            openInNewTab(url)();
          }
        }
      };
    },
    [navigate, updateConfirmationHistoryMap, updatePopupHistoryMap]
  );

  const showAppPopup = useCallback(
    (currentRoute: string | undefined) => {
      const currentTransformRoute = getPositionByRouteName(currentRoute) || '';
      const currentPopupList = appPopupMap[currentTransformRoute];

      if (currentPopupList && currentPopupList.length) {
        const filteredPopupList = currentPopupList.filter((item) => {
          const popupHistory = popupHistoryMap[`${item.position}-${item.id}`];

          if (popupHistory) {
            return checkPopupVisibleByFrequency(
              item.repeat,
              popupHistory.lastShowTime,
              popupHistory.showTimes,
              item.repeat_every_x_days
            );
          } else {
            return false;
          }
        }).sort((a, b) => a.priority - b.priority);

        if (filteredPopupList && filteredPopupList.length) {
          const result: MktCampaignModalInfo[] = filteredPopupList.map((item) => ({
            type: 'popup',
            repeat: item.repeat,
            title: item.info?.name,
            message: item.content || '',
            buttons: item.buttons,
            onClickBtn: (url?: string) => {
              handleButtonClick(`${item.position}-${item.id}`)('popup', url);
            }
          }));

          mktCampaignModalContext.openModal(result[0]);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [appPopupMap, checkPopupVisibleByFrequency, handleButtonClick, popupHistoryMap]
  );

  return (
    <AppOnlineContentContext.Provider
      value={{
        appPopupMap,
        appBannerMap,
        appConfirmationMap,
        popupHistoryMap,
        bannerHistoryMap,
        confirmationHistoryMap,
        updatePopupHistoryMap,
        updateBannerHistoryMap,
        updateConfirmationHistoryMap,
        checkPopupExistTime,
        checkPopupVisibleByFrequency,
        handleButtonClick,
        checkBannerVisible,
        checkPositionParam,
        showAppPopup
      }}
    >
      {children}
    </AppOnlineContentContext.Provider>
  );
};
