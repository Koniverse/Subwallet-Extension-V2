// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type ApiStatusValue = 'error' | 'success' | 'fail';

export interface SWApiResponseSuccess<T> {
  status: ApiStatusValue,
  data: T
}

export interface SWApiResponseError {
  status: ApiStatusValue;
  error: {
    message: string;
    code: number;
  },
}

export type SWApiResponse<T> = SWApiResponseSuccess<T> | SWApiResponseError
