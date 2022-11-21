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
    src: 'https://vjs.zencdn.net/v/oceans.mp4',
    width: 'md',
    duration: 46.6
  }
};
