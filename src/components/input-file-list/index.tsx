import { Stack, StackProps } from '../stack';

export interface InputFileListProps extends StackProps {}

export const InputFileList: React.FC<InputFileListProps> = ({
  children,
  ...props
}) => {
  return (
    <Stack width="full" spacing="2" {...props}>
      {children}
    </Stack>
  );
};
