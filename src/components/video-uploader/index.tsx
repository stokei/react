import { useCallback, useMemo, useState } from 'react';
import { useStorageUpload, useUploadFiles } from '../../hooks';
import { InputFile } from '../input-file';
import { InputFileList } from '../input-file-list';
import { InputFileListItem } from '../input-file-list-item';
import { Stack, StackProps } from '../stack';

export interface VideoUploaderProps extends Omit<StackProps, 'onError'> {
  readonly id: string;
  readonly accountId: string;
  readonly appId: string;
  readonly uploadURL: string;
  readonly onSuccess: (
    file?: File | Blob | Pick<ReadableStreamDefaultReader, 'read'>
  ) => void;
  readonly onError: (
    error: Error,
    file?: File | Blob | Pick<ReadableStreamDefaultReader, 'read'>
  ) => void;
}

export const VideoUploader: React.FC<VideoUploaderProps> = ({
  children,
  uploadURL,
  accountId,
  appId,
  onError,
  onSuccess,
  ...props
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [isSuccessfullyUpload, setIsSuccessfullyUpload] =
    useState<boolean>(false);

  const { files, onAddFiles, onRemoveFile } = useUploadFiles();

  const { isStart, isLoading, isCompleted, onStartUpload, onAbortUpload } =
    useStorageUpload({
      uploadURL,
      accountId,
      appId,
      onError: (...args) => {
        setIsSuccessfullyUpload(false);
        onError?.(...args);
      },
      onSuccess: (...args) => {
        setIsSuccessfullyUpload(true);
        onSuccess?.(...args);
      },
      onProgress: setProgress
    });

  const onChangeFile = useCallback(
    (file: File) => {
      onAddFiles([file]);
      onStartUpload(file);
    },
    [onStartUpload, onAddFiles]
  );

  const onRemoveAndAbortFile = useCallback(
    (position: number) => {
      setProgress(0);
      setIsSuccessfullyUpload(false);
      onRemoveFile(position);
      onAbortUpload();
    },
    [onRemoveFile, onAbortUpload]
  );

  const fileURL = useMemo(
    () => files?.[0] && URL.createObjectURL(files[0]),
    [files]
  );

  const file = useMemo(() => files[0], [files]);

  return (
    <Stack width="full" spacing="4" direction="column" {...props}>
      {!file || (!isLoading && !isCompleted) ? (
        <InputFile
          id={'file-input-' + props.id}
          onChange={(files) => onChangeFile(files[0])}
          accept="video/*"
        >
          {children}
        </InputFile>
      ) : (
        <InputFileList>
          <InputFileListItem
            fileURL={fileURL}
            filename={file?.name}
            size={file?.size}
            isLoading={isLoading}
            progress={isStart ? progress : 0}
            success={isSuccessfullyUpload}
            isFinished={isCompleted}
            onRemoveFile={() => onRemoveAndAbortFile(0)}
          />
        </InputFileList>
      )}
    </Stack>
  );
};
