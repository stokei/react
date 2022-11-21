import { useState } from 'react';
import { secondsToTime } from '../../../utils/seconds-to-time';
import { Box, BoxProps } from '../../box';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from '../../slider';
import { Tooltip } from '../../tooltip';
import { useVideoPlayer } from '../../../hooks/use-video-player';

export interface VolumeProps extends BoxProps {}
export const Volume: React.FC<VolumeProps> = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const { currentTime, duration, onChangeCurrentTime } = useVideoPlayer();

  return (
    <Box flex="1" position="relative">
      <Slider
        defaultValue={currentTime}
        value={currentTime}
        min={0}
        max={duration}
        colorScheme="primary"
        onChange={onChangeCurrentTime}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>

        <Tooltip
          hasArrow
          bg="primary.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={secondsToTime(currentTime)}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Box>
  );
};
