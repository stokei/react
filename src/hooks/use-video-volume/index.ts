import { useCallback, useState } from 'react';
import { useDisclosure } from '../use-disclosure';

export const useVideoVolume = () => {
  const [volume, setVolume] = useState<number>(0);
  const {
    isOpen: isMuted,
    onClose: onMute,
    onOpen: onUnmute,
    onToggle: onToggleMute
  } = useDisclosure();

  const onChangeVolume = useCallback((vol: number) => setVolume(vol), []);

  return {
    volume,
    isMuted,
    onMute,
    onUnmute,
    onToggleMute,
    onChangeVolume
  };
};
