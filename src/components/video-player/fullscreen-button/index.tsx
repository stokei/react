import { Box, BoxProps } from '../../box';
import { IconButton } from '../../icon-button';
import { useVideoPlayer } from '../../../hooks/use-video-player';

export interface FullScreenButtonProps extends BoxProps {}
export const FullScreenButton: React.FC<FullScreenButtonProps> = ({
  ...props
}) => {
  const { isFullScreen, onToggleFullScreen } = useVideoPlayer();

  return (
    <Box alignItems="center" {...props}>
      <IconButton
        fontSize="lg"
        height="9"
        variant="link"
        name={!isFullScreen ? 'fullscreen' : 'exitFullscreen'}
        onClick={onToggleFullScreen}
        colorScheme="white"
      />
    </Box>
  );
};
