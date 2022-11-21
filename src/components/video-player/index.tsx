import { forwardRef } from '@chakra-ui/react';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { AspectRatio } from '../aspect-ratio';
import { Box, BoxProps } from '../box';
import { BigPlayButton } from './big-play-button';
import { Controls } from './controls';
import { Poster } from './poster';
import { VideoPlayerProvider } from '../../contexts';
import { useVideoPlaying, useVideoVolume } from '../../hooks';

export {
  Poster as VideoPlayerPoster,
  type PosterProps as VideoPlayerPosterProps
} from './poster';

type VideoProps = BoxProps &
  Omit<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    'height' | 'width' | 'color'
  >;
const Video: React.FC<VideoProps> = forwardRef(({ ...props }, ref) => (
  <Box as="video" width="full" height="full" {...props} ref={ref} />
));

export interface VideoPlayerViewerData {
  readonly userId: string;
  readonly fullname: string;
}
export interface VideoPlayerProps extends BoxProps {
  readonly id: string;
  readonly src: string;
  readonly videoId: string;
  readonly videoName: string;
  readonly duration: number;
  readonly viewer?: VideoPlayerViewerData;
  readonly poster: string;
}
export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  id,
  src,
  poster,
  videoId,
  videoName,
  duration,
  ...props
}) => {
  const playerRef = useRef<any>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isVideoHover, setIsVideoHover] = useState<boolean>(false);
  const [isShowingControls, setIsShowingControls] = useState<boolean>(false);
  const { isPlaying, onPlayingPause, onPlayingPlay, isFirstPlay } =
    useVideoPlaying();
  const { volume, isMuted, onToggleMute, onChangeVolume } = useVideoVolume();

  useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player) {
        playerRef.current = undefined;
      }
    };
  }, [playerRef]);

  useEffect(() => {
    if (isPlaying) {
      setIsShowingControls(true);
      const timeout = setTimeout(() => setIsShowingControls(false), 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
    return () => {};
  }, [isPlaying, isVideoHover]);

  const onPlayClicked = useCallback(() => {
    onPlayingPlay();
    playerRef.current?.play();
    return true;
  }, [onPlayingPlay]);

  const onPauseClicked = useCallback(() => {
    onPlayingPause();
    playerRef.current?.pause();
  }, [onPlayingPause]);

  const onTogglePlayClicked = useCallback(() => {
    if (isPlaying) {
      return onPauseClicked();
    }
    return onPlayClicked();
  }, [onPauseClicked, onPlayClicked, isPlaying]);

  const onReloadClicked = useCallback(() => {
    if (playerRef.current?.currentTime) {
      playerRef.current.currentTime = 0;
    }
    onPlayClicked();
  }, [onPlayClicked]);

  const onChangeCurrentTime = useCallback((e: any) => {
    setCurrentTime(e.target?.currentTime);
  }, []);

  const onChangeCurrentTimeToProgress = useCallback(
    (time: number) => {
      onPauseClicked();
      setCurrentTime(time);
      if (playerRef.current?.currentTime) {
        playerRef.current.currentTime = time;
      }
    },
    [onPauseClicked]
  );

  const onChangePlayerVolume = useCallback(
    (e: any) => {
      onChangeVolume(e.target?.volume);
    },
    [onChangeVolume]
  );

  const onTogglePlayerMute = useCallback(() => {
    onToggleMute();
    playerRef.current.muted = !playerRef.current.muted;
  }, [onToggleMute]);

  const videoDuration = useMemo(() => {
    if (duration) {
      return duration;
    }
    return 0;
  }, [duration]);

  return (
    <VideoPlayerProvider
      poster={poster}
      isPlaying={isPlaying}
      duration={videoDuration}
      currentTime={currentTime}
      onPlay={onPlayClicked}
      onPause={onPauseClicked}
      onReload={onReloadClicked}
      onTogglePlaying={onTogglePlayClicked}
      onChangeCurrentTime={onChangeCurrentTimeToProgress}
      volume={volume}
      isMuted={isMuted}
      onToggleMute={onTogglePlayerMute}
      onChangeVolume={onChangePlayerVolume}
    >
      <Box
        width="full"
        position="relative"
        flexDir="column"
        onMouseEnter={isPlaying ? () => setIsVideoHover(true) : undefined}
        onMouseLeave={isPlaying ? () => setIsVideoHover(false) : undefined}
        {...props}
      >
        <AspectRatio ratio={16 / 9}>
          <Box width="full" flex="1">
            <Video
              id={id}
              ref={playerRef}
              onTimeUpdate={onChangeCurrentTime}
              poster={poster}
              src={src}
              border={0}
              backgroundColor="black.900"
              borderRadius="lg"
              overflow="hidden"
              onClick={onTogglePlayClicked}
            />
            {isFirstPlay ? (
              <Box width="full" position="absolute" bottom={0} left={0}>
                {(!isPlaying || isVideoHover || isShowingControls) && (
                  <Controls />
                )}
              </Box>
            ) : (
              <Box
                position="absolute"
                bottom={0}
                left={0}
                width="full"
                height="full"
                flexDir="column"
                justifyContent="flex-end"
              >
                <Poster src={poster} duration={videoDuration} />
                <Box
                  width="full"
                  height="full"
                  zIndex="1"
                  position="absolute"
                  bottom={0}
                  left={0}
                  flex="1"
                  justifyContent="center"
                  alignItems="center"
                >
                  <BigPlayButton justifyContent="center" />
                </Box>
              </Box>
            )}
          </Box>
        </AspectRatio>
      </Box>
    </VideoPlayerProvider>
  );
};
