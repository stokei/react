import { themes, ThemeProvider, ensure } from '@storybook/theming';

import { StokeiThemeProvider } from '../../contexts';

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={ensure(themes.light)}>
      <StokeiThemeProvider
        appId="app_stokei"
        accountId="acc_stokei"
        cloudflareAPIToken="xamNZPUFI3b1w28ExLjTaOWM9qpu-s23hebKFzGq"
      >
        {Story()}
      </StokeiThemeProvider>
    </ThemeProvider>
  )
];
