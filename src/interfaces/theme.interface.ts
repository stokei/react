export interface StokeiThemeConfigColor {
  readonly text?: string;
  readonly heading?: string;
  readonly primary?: string;
  readonly secondary?: string;
  readonly success?: string;
  readonly error?: string;
  readonly warning?: string;
  readonly info?: string;
}
export interface StokeiThemeConfigFont {
  readonly heading?: string;
  readonly normal?: string;
}

export interface StokeiThemeConfig {
  readonly colors?: StokeiThemeConfigColor;
  readonly fonts?: StokeiThemeConfigFont;
}
