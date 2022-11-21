import { Box, BoxProps } from '../../box';
import { IconButton } from '../../icon-button';
import { useVideoPlayer } from '../../../hooks/use-video-player';

export interface PlayButtonProps extends BoxProps {}
export const PlayButton: React.FC<PlayButtonProps> = ({ ...props }) => {
  const { isPlaying, isFinished, onTogglePlaying, onReload } = useVideoPlayer();

  return (
    <Box flex="1" position="relative" {...props}>
      {isFinished ? (
        <IconButton
          fontSize="2xl"
          height="9"
          variant="link"
          name="reload"
          colorScheme="white"
          onClick={onReload}
        />
      ) : (
        <IconButton
          fontSize="2xl"
          height="9"
          variant="link"
          colorScheme="white"
          name={isPlaying ? 'pause' : 'play'}
          onClick={onTogglePlaying}
        />
      )}
    </Box>
  );
};
