import { ChangeEvent, useCallback, useRef } from 'react';
import { Box } from '../box';
import { Stack } from '../stack';
import { Input, InputProps } from '../input';

export enum InputFileErrorType {
  MAX_SIZE_EXCEEDED = 'MAX_SIZE_EXCEEDED'
}

export interface InputFileProps
  extends Omit<InputProps, 'onChange' | 'onError'> {
  id: string;
  maxSize?: number;
  onChange: (files: File[]) => void;
  onError?: (e: InputFileErrorType) => void;
}

export const InputFile: React.FC<InputFileProps> = ({
  id,
  children,
  maxSize,
  onChange,
  onError,
  ...props
}) => {
  const inputRef = useRef<any>();

  const onChooseFileClick = useCallback(() => {
    inputRef.current?.click?.();
  }, []);

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let hasError = false;
      const files = !!e.target.files?.length ? Array.from(e.target.files) : [];

      if (!!maxSize && maxSize > 0 && !!files.length) {
        const existsAFileLargerThanTheMaximumSize = files.some(
          (file) => file.size > maxSize
        );
        if (existsAFileLargerThanTheMaximumSize) {
          hasError = true;
          onError?.(InputFileErrorType.MAX_SIZE_EXCEEDED);
        }
      }
      if (!hasError) {
        onChange?.(files);
      }
    },
    [onChange, onError, maxSize]
  );

  return (
    <Box width="full" flexDir="column" display="flex">
      <Input
        {...props}
        id={id}
        ref={inputRef}
        type="file"
        display="none"
        onChange={onChangeInput}
      />
      <Stack
        width="full"
        spacing="4"
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        borderWidth="thin"
        borderStyle="dashed"
        padding="5"
        onClick={onChooseFileClick}
      >
        {children}
      </Stack>
    </Box>
  );
};
