export { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import React, { PropsWithChildren, useMemo } from 'react';
import { StokeiThemeConfig } from '../../interfaces';
import { theme } from '../../styles/themes';

import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import '@uppy/image-editor/dist/style.css';

export interface StokeiThemeContextValues {
  readonly appId: string;
  readonly accountId?: string;
  readonly cloudflareAPIToken: string;
}

export interface StokeiThemeContextProps {
  readonly appId: string;
  readonly accountId?: string;
  readonly cloudflareAPIToken: string;
  readonly config?: StokeiThemeConfig;
}

export const StokeiThemeContext = React.createContext(
  {} as StokeiThemeContextValues
);

export const StokeiThemeProvider: React.FC<
  PropsWithChildren<StokeiThemeContextProps>
> = ({ children, config, appId, accountId, cloudflareAPIToken }) => {
  const themeData = useMemo(() => theme(config), []);
  const stokeiConfig = useMemo(
    () => ({ appId, accountId, cloudflareAPIToken }),
    [appId, accountId, cloudflareAPIToken]
  );
  return (
    <ChakraProvider theme={themeData}>
      <StokeiThemeContext.Provider value={stokeiConfig}>
        {children}
      </StokeiThemeContext.Provider>
    </ChakraProvider>
  );
};
