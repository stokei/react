import { Meta, StoryObj } from '@storybook/react';
import { VideoPlayer, VideoPlayerProps } from '.';
import { decorators } from '../../storybook/decorators';

export default {
  title: 'Components/VideoPlayer',
  component: VideoPlayer,
  decorators
} as Meta<VideoPlayerProps>;

export const Player: StoryObj<VideoPlayerProps> = {
  args: {
    id: 'stokei-player',
    src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    width: 'md'
  }
};
