// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Warning from '@subwallet/extension-koni-ui/components/Warning';
import useIsMounted from '@subwallet/extension-koni-ui/hooks/useIsMounted';
import { Result, Validator } from '@subwallet/extension-koni-ui/util/validators';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface BasicProps {
  isError?: boolean;
  value?: string | null;
  onChange?: (value: string) => void;
  resetValue?: boolean;
}

type Props<T extends BasicProps> = T & {
  className?: string;
  component: React.ComponentType<T>;
  defaultValue?: string;
  onFocus?: (value: string) => void;
  onValidatedChange: (value: string | null) => void;
  validator: Validator<string>;
  onScrollToError?: () => void;
}

function ValidatedInput<T extends Record<string, unknown>> ({ className, component: Input, defaultValue, onFocus, onScrollToError, onValidatedChange, resetValue, validator, ...props }: Props<T>): React.ReactElement<Props<T>> {
  const [value, setValue] = useState(defaultValue || '');
  const [validationResult, setValidationResult] = useState<Result<string>>(Result.ok(''));
  const isMounted = useIsMounted();

  useEffect(() => {
    if (Result.isError(validationResult)) {
      onScrollToError && onScrollToError();
    }
  }, [onScrollToError, validationResult]);

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (resetValue) {
      setValue('');
    }
  }, [resetValue]);

  useEffect(() => {
    // Do not show any error on first mount
    if (!isMounted) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async (): Promise<void> => {
      const result = await validator(value);

      setValidationResult(result);
      onValidatedChange(Result.isOk(result) ? value : null);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, validator, onValidatedChange]);

  return (
    <div className={className}>
      <Input
        {...props as unknown as T}
        className={className}
        isError={Result.isError(validationResult)}
        onChange={setValue}
        onFocus={onFocus}
        value={value}
      />
      {Result.isError(validationResult) && (
        <Warning
          className='validated-input__warning'
          isBelowInput
          isDanger
        >
          {validationResult.error.errorDescription}
        </Warning>
      )}
    </div>
  );
}

export default styled(ValidatedInput)`
  .validated-input__warning {
    margin-top: 10px;
  }
`;
