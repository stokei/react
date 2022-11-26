import { useState } from 'react';

import { Box } from '../../box';
import { Stack, StackProps } from '../../stack';
import { IconButton } from '../../icon-button';
import { useVideoPlayer } from '../../../hooks/use-video-player';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from '../../slider';

export interface VolumeButtonProps extends StackProps {}
export const VolumeButton: React.FC<VolumeButtonProps> = ({ ...props }) => {
  const [isVolumeHover, setIsVolumeHover] = useState<boolean>(false);

  const { isMuted, onToggleMute, volume, onChangeVolume } = useVideoPlayer();

  return (
    <Stack
      spacing="2"
      direction="row"
      alignItems="center"
      onMouseEnter={() => setIsVolumeHover(true)}
      onMouseLeave={() => setIsVolumeHover(false)}
      {...props}
    >
      <IconButton
        fontSize="2xl"
        height="9"
        variant="link"
        name={isMuted ? 'muted' : 'unmuted'}
        onClick={onToggleMute}
        colorScheme="white"
      />
      {isVolumeHover && (
        <Slider
          width="12"
          defaultValue={volume}
          value={volume}
          min={0}
          max={1}
          step={0.1}
          colorScheme="primary"
          onChange={onChangeVolume}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      )}
    </Stack>
  );
};
