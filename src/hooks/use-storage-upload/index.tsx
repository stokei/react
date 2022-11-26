import { useCallback, useState } from 'react';
import { Upload } from 'tus-js-client';

export interface UseStorageUploadProps {
  readonly uploadURL: string;
  readonly onSuccess: (
    file?: File | Blob | Pick<ReadableStreamDefaultReader, 'read'>
  ) => void;
  readonly onError: (
    error: Error,
    file?: File | Blob | Pick<ReadableStreamDefaultReader, 'read'>
  ) => void;
  readonly onProgress?: (progress: number) => void;
}
export interface UseStorageUploadResponse {
  readonly isLoading: boolean;
  readonly isStart: boolean;
  readonly isCompleted: boolean;
  readonly onStartUpload: (
    file?: File | Blob | Pick<ReadableStreamDefaultReader, 'read'>
  ) => void;
  readonly onAbortUpload: () => void;
}

export const useStorageUpload = ({
  onError,
  onSuccess,
  onProgress,
  uploadURL
}: UseStorageUploadProps): UseStorageUploadResponse => {
  const [uploadClient, setUploadClient] = useState<Upload | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isStart, setIsStart] = useState<boolean>(false);

  const onStartUpload = useCallback(
    (file: any) => {
      setIsLoading(true);
      setIsStart(true);
      const upload = new Upload(file, {
        endpoint: uploadURL,
        chunkSize: file?.size && Math.round(file?.size / 10),
        retryDelays: [0, 3000, 5000, 10000, 20000],
        metadata: {
          filename: file?.name,
          filetype: file?.type
        },
        onProgress: (bytesUploaded, bytesTotal) => {
          const percentage = Math.round((bytesUploaded / bytesTotal) * 100);
          onProgress?.(percentage);
        },
        onError: (error) => {
          setIsLoading(false);
          setIsCompleted(true);
          onError?.(error, upload.file);
        },
        onSuccess: () => {
          setIsLoading(false);
          setIsCompleted(true);
          onSuccess?.(upload.file);
        }
      });
      upload.start();
      setUploadClient(upload);
    },
    [uploadURL, onError, onSuccess, onProgress]
  );

  const onAbortUpload = useCallback(() => {
    if (uploadClient) {
      uploadClient.abort();
    }
  }, [uploadClient]);

  return {
    isStart,
    isLoading,
    isCompleted,
    onStartUpload,
    onAbortUpload
  };
};
