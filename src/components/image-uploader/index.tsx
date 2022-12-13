import { useState, useEffect } from 'react';
import Uppy from '@uppy/core';
import { Dashboard, useUppy } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
import ImageEditor from '@uppy/image-editor';
import { MAX_VIDEO_SIZE } from '../../constants/file-sizes';
import { useStokeiTheme } from '../../hooks';
import { Locale } from '../../interfaces';
import { Stack, StackProps } from '../stack';

export type LocaleImageUploader = Locale<
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

export interface ImageUploaderProps extends Omit<StackProps, 'onError'> {
  readonly id: string;
  readonly uploadURL: string;
  readonly locale: LocaleImageUploader;
  readonly accept?: string[];
  readonly onSuccess: (fileId: string) => void;
  readonly onError: () => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  id,
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
      restrictions: {
        allowedFileTypes: accept || ['image/*'],
        maxFileSize: MAX_VIDEO_SIZE,
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1
      }
    })
      .use(XHRUpload, {
        endpoint: uploadURL,
        method: 'POST',
        formData: true,
        fieldName: 'file',
        limit: 1,
        headers: {
          // Authorization: `Bearer ${cloudflareAPIToken}`
        },
        getResponseData(responseText, response) {
          if (!response) {
            return;
          }
          const body = responseText && JSON.parse(responseText);
          console.log(body);
          return {
            fileName: responseText
          };
        }
      })
      .use(ImageEditor, { quality: 0.9, target: id });
  });

  useEffect(() => {
    return () => uppy.close({ reason: 'unmount' });
  }, [uppy]);

  useEffect(() => {
    uppy.on('upload-success', (result, response) => {
      const isSuccess = !!result?.data;
      console.log(response);
      if (fileId && isSuccess) {
        onSuccess?.(fileId);
      }
    });
  }, [uppy, fileId]);

  useEffect(() => {
    uppy.on('upload-error', (result, error) => {
      console.log(error);
      const isFailed = !!result?.data;
      if (isFailed) {
        onError?.();
      }
    });
  }, [uppy]);

  return (
    <Stack width="full" spacing="4" direction="column" {...props}>
      <Dashboard
        width="100%"
        height="100%"
        note={locale?.note}
        uppy={uppy}
        lang="pt-br"
        target={id}
        plugins={['ImageEditor']}
        locale={{
          strings: locale
        }}
      />
    </Stack>
  );
};
