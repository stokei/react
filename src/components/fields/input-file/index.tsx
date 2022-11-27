import { useCallback, useRef } from 'react';
import { Box } from '../../box';
import { Button } from '../../button';
import { Stack } from '../../stack';
import { FormLabel } from '../../typography';
import { Input, InputProps } from '../input';

export * from './list';
export * from './list-item';

export interface InputFileProps extends Omit<InputProps, 'onChange'> {
  id: string;
  buttonText?: string;
  onChange: (files: File[]) => void;
}

export const InputFile: React.FC<InputFileProps> = ({
  id,
  children,
  label,
  labelDescription,
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
        containerProps={{ display: 'none' }}
        onChange={(e) =>
          onChange?.(!!e.target.files?.length ? Array.from(e.target.files) : [])
        }
      />
      {label && (
        <FormLabel marginBottom={labelDescription ? 0 : '2'}>{label}</FormLabel>
      )}
      <Stack
        width="full"
        spacing="4"
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        borderWidth="thin"
        borderStyle="dashed"
        padding="5"
      >
        <Button variant="outline" onClick={onChooseFileClick}>
          {children}
        </Button>
      </Stack>
    </Box>
  );
};
