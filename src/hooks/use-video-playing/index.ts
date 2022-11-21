import { useEffect, useState } from 'react';
import { useDisclosure } from '../use-disclosure';

export const useVideoPlaying = () => {
  const [isFirstPlay, setIsFirstPlay] = useState(false);
  const {
    isOpen: isPlaying,
    onClose: onPlayingPause,
    onOpen: onPlayingPlay
  } = useDisclosure();

  useEffect(() => {
    if (isPlaying && !isFirstPlay) {
      setIsFirstPlay(true);
    }
  }, [isPlaying, isFirstPlay]);

  return {
    isFirstPlay,
    isPlaying,
    onPlayingPause,
    onPlayingPlay
  };
};
