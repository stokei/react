import { Box, BoxProps } from '../../box';
import { Icon } from '../../icon';
import { Button } from '../../button';
import { useVideoPlayer } from '../../../hooks/use-video-player';

export interface BigPlayButtonProps extends BoxProps {}
export const BigPlayButton: React.FC<BigPlayButtonProps> = ({ ...props }) => {
  const { onPlay } = useVideoPlayer();

  return (
    <Box flex="1" position="relative" {...props}>
      <Button paddingX="5" onClick={onPlay}>
        <Icon name="play" />
      </Button>
    </Box>
  );
};
