import React from 'react';
import { secondsToTime } from '../../../utils/seconds-to-time';
import { Box, BoxProps } from '../../box';
import { Stack } from '../../stack';
import { useVideoPlayer } from '../../../hooks/use-video-player';
import { PlayButton } from '../play-button';
import { Progress } from '../progress';
import { Time } from '../time';
import { VolumeButton } from '../volume-button';
import { FullScreenButton } from '../fullscreen-button';
import { PictureInPictureButton } from '../picture-in-picture-button';

export interface ControlsProps extends BoxProps {}
export const Controls: React.FC<ControlsProps> = () => {
  const { duration, currentTime } = useVideoPlayer();
  return (
    <Stack
      width="full"
      spacing="0"
      paddingY="3"
      paddingX="4"
      direction="column"
    >
      <Box width="full">
        <Progress />
      </Box>
      <Stack spacing="4" direction="row" alignItems="center" rounded="md">
        <Stack spacing="2" direction="row" alignItems="center">
          <PlayButton />
          <VolumeButton />
        </Stack>
        <Stack spacing="1" direction="row">
          <Time>{secondsToTime(currentTime)}</Time>
          <Time>/</Time>
          <Time>{secondsToTime(duration)}</Time>
        </Stack>
        <Stack
          flex="1"
          spacing="2"
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <PictureInPictureButton />
          <FullScreenButton />
        </Stack>
      </Stack>
    </Stack>
  );
};
