export { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import React, { PropsWithChildren, useMemo } from 'react';
import { StokeiThemeConfig } from '../../interfaces';
import { theme } from '../../styles/themes';

export interface StokeiThemeContextValues {}

export interface StokeiThemeContextProps {
  readonly config?: StokeiThemeConfig;
}

export const StokeiThemeContext = React.createContext(
  {} as StokeiThemeContextValues
);

export const StokeiThemeProvider: React.FC<
  PropsWithChildren<StokeiThemeContextProps>
> = ({ children, config }) => {
  const themeData = useMemo(() => theme(config), []);
  return <ChakraProvider theme={themeData}>{children}</ChakraProvider>;
};
