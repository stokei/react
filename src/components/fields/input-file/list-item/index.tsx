import { memo } from 'react';
import { formatBytes } from '../../../../utils/format-bytes';
import { Box } from '../../../box';
import { CircularProgress } from '../../../circular-progress';
import { Icon } from '../../../icon';
import { IconButton } from '../../../icon-button';
import { Link } from '../../../link';
import { Stack, StackProps } from '../../../stack';
import { Text } from '../../../typography';

export interface InputFileListItemProps extends StackProps {
  readonly fileURL: string;
  readonly filename: string;
  readonly size: number;
  readonly progress?: number;
  readonly success?: boolean;
  readonly isFinished?: boolean;
  readonly onRemoveFile: () => void;
}

export const InputFileListItem: React.FC<InputFileListItemProps> = memo(
  ({
    children,
    onRemoveFile,
    fileURL,
    filename,
    size,
    progress,
    success,
    isFinished,
    ...props
  }) => (
    <Stack
      key={fileURL}
      direction="row"
      width="full"
      spacing="2"
      alignItems="center"
      {...props}
    >
      <Stack direction="column" flex="1" spacing="2">
        <Box>
          <Link href={fileURL} target="_blank">
            <Text fontWeight="bold" lineHeight="shorter">
              {filename}
            </Text>
          </Link>
        </Box>
        <Text fontSize="sm" lineHeight="shorter">
          {formatBytes(size, 2)}
        </Text>
      </Stack>
      {!isFinished && progress && progress > 0 && (
        <CircularProgress size="20px" value={progress} />
      )}
      {isFinished && (
        <Icon
          name={success ? 'ok' : 'error'}
          boxSize="5"
          color={success ? 'success.500' : 'error.500'}
        />
      )}
      <IconButton
        name="trash"
        variant="ghost"
        colorScheme="red"
        onClick={onRemoveFile}
      />
    </Stack>
  )
);
