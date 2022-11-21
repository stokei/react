import { Box, BoxProps } from '../../box';
import { IconButton } from '../../icon-button';
import { useVideoPlayer } from '../../../hooks/use-video-player';

export interface VolumeButtonProps extends BoxProps {}
export const VolumeButton: React.FC<VolumeButtonProps> = ({ ...props }) => {
  const { isMuted, onToggleMute } = useVideoPlayer();

  return (
    <Box flex="1" position="relative" {...props}>
      <IconButton
        fontSize="2xl"
        height="9"
        variant="link"
        name={isMuted ? 'muted' : 'unmuted'}
        onClick={onToggleMute}
        colorScheme="white"
      />
    </Box>
  );
};
