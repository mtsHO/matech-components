export {
  createMatechPalette,
  createMatechTheme,
  createMatechThemeOptions,
  getMatechPalette,
} from './factories';
export { MatechThemeProvider, useMatechTheme } from './ThemeProvider';
export {
  createMatechDefaultButtonPalette,
  matechDefaultButtonPalette,
  matechDefaultGlobalPalette,
  matechDefaultPalette,
} from './palette';
export { matechDefaultTypography } from './typography';
export type {
  MatechButtonPalette,
  MatechButtonPaletteVariant,
  MatechButtonTypography,
  MatechGlobalPalette,
  MatechPalette,
  MatechPaletteOptions,
  MatechTextVariant,
  MatechTheme,
  MatechThemeOptions,
  MatechTypography,
  MatechTypographyVariantStyle,
  MatechTypographyOptions,
} from './theme.types';
export type { MatechThemeProviderProps } from './ThemeProvider.types';
