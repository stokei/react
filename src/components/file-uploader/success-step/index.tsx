import { Stack, StackProps } from '../../stack';
import { Text } from '../../typography';

export interface FileUploaderResultStepProps extends StackProps {
  isSuccessfullyUpload: boolean;
}

export const FileUploaderResultStep: React.FC<FileUploaderResultStepProps> = ({
  isSuccessfullyUpload,
  ...props
}) => {
  return (
    <Stack width="full" spacing="4" direction="column" {...props}>
      <Text>{isSuccessfullyUpload ? 'OKEY' : 'ERRO'}</Text>
    </Stack>
  );
};
