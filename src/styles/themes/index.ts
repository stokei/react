import { extendTheme } from '@chakra-ui/react';
import { StokeiThemeConfig, StokeiThemeConfigColor } from '../../interfaces';
import {
  generatePalette,
  generatePaletteToChakraUI
} from '../../utils/color-palette';
import { components } from './components';
import { foundations } from './foundations';

export * from './colors';
export { generatePalette, generatePaletteToChakraUI };

const setThemeConfigColors = (colors?: StokeiThemeConfigColor) => ({
  ...(colors?.text && generatePaletteToChakraUI('text', colors?.text)),
  ...(colors?.heading && generatePaletteToChakraUI('heading', colors?.heading)),
  ...(colors?.primary && generatePaletteToChakraUI('primary', colors?.primary)),
  ...(colors?.secondary &&
    generatePaletteToChakraUI('secondary', colors?.secondary)),
  ...(colors?.success && generatePaletteToChakraUI('success', colors?.success)),
  ...(colors?.error && generatePaletteToChakraUI('error', colors?.error)),
  ...(colors?.warning && generatePaletteToChakraUI('warning', colors?.warning)),
  ...(colors?.info && generatePaletteToChakraUI('info', colors?.info))
});

export const theme = (config?: StokeiThemeConfig) => {
  const colors = setThemeConfigColors(config?.colors);
  return extendTheme({
    ...components,
    ...foundations,
    styles: {
      global: {
        initialColorMode: 'light',
        useSystemColorMode: false,
        body: {
          bg: 'background.100'
        },
        p: {
          color: 'text.500'
        },
        'h1, h2, h3, h4, h5, h6': {
          color: 'heading.500'
        }
      }
    },
    colors: {
      ...colors,
      ...generatePaletteToChakraUI('primary', '#24615e'),
      ...generatePaletteToChakraUI('secondary', '#EE833C'),
      ...generatePaletteToChakraUI('text', '#3c5251'),
      ...generatePaletteToChakraUI('heading', '#0C2221'),
      ...generatePaletteToChakraUI('background', '#8fa3a3'),
      'background.50': '#fbfefe',
      'background.100': '#f1f8f8',
      'background.200': '#ddeeee',
      ...generatePaletteToChakraUI('success', '#38a169'),
      ...generatePaletteToChakraUI('error', '#e53e3e'),
      ...generatePaletteToChakraUI('warning', '#d69e2e'),
      ...generatePaletteToChakraUI('info', '#00b5d8'),
      ...generatePaletteToChakraUI('disabled', '#9fa5a5'),
      ...generatePaletteToChakraUI('black', '#0e2524'),
      ...generatePaletteToChakraUI('white', '#fbfefe'),
      ...colors
    },
    fonts: {
      ...config?.fonts,
      ...(config?.fonts?.heading && { heading: config?.fonts?.heading }),
      ...(config?.fonts?.normal && {
        mono: config?.fonts?.normal,
        body: config?.fonts?.normal
      })
    }
  });
};
