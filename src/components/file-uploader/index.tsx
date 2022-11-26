import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useStorageUpload } from '../../hooks';
import { Image } from '../image';
import { Progress } from '../progress';
import { Stack, StackProps } from '../stack';
import { FileUploaderResultStep } from './success-step';

enum CurrentStep {
  INITIAL = 'INITIAL',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED'
}

export interface FileUploaderProps extends Omit<StackProps, 'onError'> {
  readonly uploadURL: string;
  readonly onSuccess: (
    file?: File | Blob | Pick<ReadableStreamDefaultReader, 'read'>
  ) => void;
  readonly onError: (
    error: Error,
    file?: File | Blob | Pick<ReadableStreamDefaultReader, 'read'>
  ) => void;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  uploadURL,
  onError,
  onSuccess,
  ...props
}) => {
  const [file, setFile] = useState<any>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isSuccessfullyUpload, setIsSuccessfullyUpload] =
    useState<boolean>(false);

  const { isStart, isLoading, isCompleted, onStartUpload } = useStorageUpload({
    uploadURL,
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

  const filePreviewURL = useMemo(() => {
    if (file) {
      return URL.createObjectURL(file);
    }
  }, [file]);

  const onChangeFile = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const currentFile = e.target.files?.[0];
      setFile(currentFile);
      onStartUpload(currentFile);
    },
    [onStartUpload]
  );

  const currentStep = useMemo(() => {
    if (isCompleted) {
      return CurrentStep.COMPLETED;
    }
    if (isLoading) {
      return CurrentStep.PROCESSING;
    }
    return CurrentStep.INITIAL;
  }, [isCompleted, isLoading]);

  return (
    <Stack width="full" spacing="4" direction="column" {...props}>
      {currentStep === CurrentStep.INITIAL && (
        <Stack width="full" spacing="4" direction="column">
          <input type="file" onChange={onChangeFile} />
        </Stack>
      )}
      {currentStep === CurrentStep.PROCESSING && file && (
        <Stack width="full" spacing="4" direction="column">
          <Image src={filePreviewURL} />
          {isStart && <Progress value={progress} />}
        </Stack>
      )}
      {currentStep === CurrentStep.COMPLETED && (
        <Stack width="full" spacing="4" direction="column">
          <Image src={filePreviewURL} />
          <FileUploaderResultStep isSuccessfullyUpload={isSuccessfullyUpload} />
        </Stack>
      )}
    </Stack>
  );
};
