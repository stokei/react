import { StokeiThemeProvider } from '../../contexts';

export const decorators = [
  (Story: any) => <StokeiThemeProvider>{Story()}</StokeiThemeProvider>
];
