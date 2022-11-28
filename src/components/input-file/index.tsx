import { useCallback, useRef } from 'react';
import { Box } from '../box';
import { Stack } from '../stack';
import { Input, InputProps } from '../input';

export interface InputFileProps extends Omit<InputProps, 'onChange'> {
  id: string;
  onChange: (files: File[]) => void;
}

export const InputFile: React.FC<InputFileProps> = ({
  id,
  children,
  onChange,
  ...props
}) => {
  const inputRef = useRef<any>();

  const onChooseFileClick = useCallback(() => {
    inputRef.current?.click?.();
  }, []);

  return (
    <Box width="full" flexDir="column" display="flex">
      <Input
        {...props}
        id={id}
        ref={inputRef}
        type="file"
        display="none"
        onChange={(e) =>
          onChange?.(!!e.target.files?.length ? Array.from(e.target.files) : [])
        }
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
