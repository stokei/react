import {
  Slider as ChakraSlider,
  SliderProps as ChakraSliderProps
} from '@chakra-ui/react';

export * from './filled-track';
export * from './mark';
export * from './thumb';
export * from './track';

export interface SliderProps extends ChakraSliderProps {}
export const Slider: React.FC<SliderProps> = ({ children, ...props }) => (
  <ChakraSlider {...props}>{children}</ChakraSlider>
);
