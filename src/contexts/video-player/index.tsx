import React, { PropsWithChildren, useMemo } from 'react';

export { ColorModeScript } from '@chakra-ui/react';

export interface VideoPlayerContextValues {
  readonly isPlaying: boolean;
  readonly isFinished: boolean;
  readonly isFullScreen: boolean;
  readonly isPictureInPicture: boolean;
  readonly isMuted: boolean;
  readonly duration: number;
  readonly volume: number;
  readonly poster: string;
  readonly initialTime: number;
  readonly currentTime: number;
  readonly onChangeCurrentTime: (time: number) => void;
  readonly onPlay: () => void;
  readonly onPause: () => void;
  readonly onReload: () => void;
  readonly onTogglePlaying: () => void;
  readonly onToggleMute: () => void;
  readonly onToggleFullScreen: () => void;
  readonly onTogglePictureInPicture: () => void;
  readonly onChangeVolume: (volume: number) => void;
}

export interface VideoPlayerContextProps {
  readonly currentTime: number;
  readonly duration: number;
  readonly poster: string;
  readonly isPlaying: boolean;
  readonly isMuted: boolean;
  readonly isFullScreen: boolean;
  readonly isPictureInPicture: boolean;
  readonly volume: number;
  readonly onPlay: () => void;
  readonly onPause: () => void;
  readonly onReload: () => void;
  readonly onTogglePlaying: () => void;
  readonly onChangeCurrentTime: (time: number) => void;
  readonly onToggleMute: () => void;
  readonly onToggleFullScreen: () => void;
  readonly onTogglePictureInPicture: () => void;
  readonly onChangeVolume: (volume: number) => void;
}

export const VideoPlayerContext = React.createContext(
  {} as VideoPlayerContextValues
);

export const VideoPlayerProvider: React.FC<
  PropsWithChildren<VideoPlayerContextProps>
> = ({
  children,
  isFullScreen,
  isPictureInPicture,
  isPlaying,
  isMuted,
  volume,
  currentTime,
  duration,
  poster,
  onPause,
  onPlay,
  onReload,
  onTogglePlaying,
  onChangeCurrentTime,
  onToggleMute,
  onToggleFullScreen,
  onTogglePictureInPicture,
  onChangeVolume
}) => {
  const configValues: VideoPlayerContextValues = useMemo(
    () => ({
      isPlaying,
      isFullScreen,
      isPictureInPicture,
      isFinished: currentTime >= duration,
      isMuted,
      volume,
      poster,
      duration,
      initialTime: 0,
      currentTime,
      onPause,
      onPlay,
      onReload,
      onTogglePlaying,
      onChangeCurrentTime,
      onToggleFullScreen,
      onTogglePictureInPicture,
      onToggleMute,
      onChangeVolume
    }),
    [
      currentTime,
      duration,
      isMuted,
      isPlaying,
      isFullScreen,
      isPictureInPicture,
      onChangeCurrentTime,
      onChangeVolume,
      onPause,
      onPlay,
      onReload,
      onToggleMute,
      onTogglePlaying,
      onToggleFullScreen,
      onTogglePictureInPicture,
      poster,
      volume
    ]
  );

  return (
    <VideoPlayerContext.Provider value={configValues}>
      {children}
    </VideoPlayerContext.Provider>
  );
};
