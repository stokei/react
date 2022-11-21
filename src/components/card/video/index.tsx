import React from 'react';
import {
  VideoPlayerProps,
  VideoPlayer,
  VideoPlayerPosterProps,
  VideoPlayerPoster
} from '../../video-player';

export interface CardVideoProps extends VideoPlayerProps {}
export const CardVideo: React.FC<CardVideoProps> = ({ ...props }) => (
  <VideoPlayer width="full" roundedTop="md" overflow="hidden" {...props} />
);

export interface CardVideoPosterProps extends VideoPlayerPosterProps {}
export const CardVideoPoster: React.FC<CardVideoPosterProps> = ({
  ...props
}) => (
  <VideoPlayerPoster
    width="full"
    roundedTop="md"
    overflow="hidden"
    {...props}
  />
);
