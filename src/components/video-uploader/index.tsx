import { useState, useEffect } from 'react';
import Uppy from '@uppy/core';
import { Dashboard, useUppy } from '@uppy/react';
import Tus from '@uppy/tus';
import { MAX_VIDEO_SIZE } from '../../constants/file-sizes';
import { useStokeiTheme } from '../../hooks';
import { Locale } from '../../interfaces';
import { Stack, StackProps } from '../stack';

export type LocaleVideoUploader = Locale<
  | 'dropPasteFiles'
  | 'note'
  | 'save'
  | 'cancel'
  | 'pauseUpload'
  | 'retryUpload'
  | 'resumeUpload'
  | 'uploadPaused'
  | 'uploadComplete'
  | 'myDevice'
  | 'back'
>;

export interface VideoUploaderProps extends Omit<StackProps, 'onError'> {
  readonly id: string;
  readonly uploadURL: string;
  readonly locale: LocaleVideoUploader;
  readonly accept?: string[];
  readonly onSuccess: (fileId: string) => void;
  readonly onError: () => void;
}

export const VideoUploader: React.FC<VideoUploaderProps> = ({
  accept,
  uploadURL,
  locale,
  onSuccess,
  onError,
  ...props
}) => {
  const [fileId, setFileId] = useState('');

  const { appId, accountId, cloudflareAPIToken } = useStokeiTheme();

  const uppy = useUppy(() => {
    return new Uppy({
      allowMultipleUploadBatches: false,
      autoProceed: true,
      restrictions: {
        allowedFileTypes: accept || ['video/*'],
        maxFileSize: MAX_VIDEO_SIZE,
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1
      },
      meta: {
        accountId,
        appId
      }
    }).use(Tus, {
      endpoint: uploadURL,
      headers: {
        Authorization: `Bearer ${cloudflareAPIToken}`
      },
      onAfterResponse(req, res) {
        const body = res.getBody();
        const bodyFormated = body && JSON.parse(body);
        if (bodyFormated?.file?.id) {
          setFileId(bodyFormated?.file?.id);
        }
      }
    });
  });

  useEffect(() => {
    return () => uppy.close({ reason: 'unmount' });
  }, [uppy]);

  useEffect(() => {
    uppy.on('complete', (result) => {
      const isSuccess = !!result?.successful?.length;
      const isFailed = !!result?.failed?.length;
      if (fileId && isSuccess) {
        onSuccess?.(fileId);
      }
      if (isFailed) {
        onError?.();
      }
    });
  }, [uppy, fileId]);

  return (
    <Stack width="full" spacing="4" direction="column" {...props}>
      <Dashboard
        width="100%"
        height="100%"
        note={locale?.note}
        uppy={uppy}
        locale={{
          strings: locale
        }}
      />
    </Stack>
  );
};
