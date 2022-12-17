import { themes, ThemeProvider, ensure } from '@storybook/theming';

import { StokeiProvider } from '../../contexts';

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={ensure(themes.light)}>
      <StokeiProvider
        appId="app_stokei"
        accountId="acc_stokei"
        cloudflareAPIToken="xamNZPUFI3b1w28ExLjTaOWM9qpu-s23hebKFzGq"
      >
        {Story()}
      </StokeiProvider>
    </ThemeProvider>
  )
];
