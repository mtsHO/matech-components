export {
  createMatechPalette,
} from './helpers/createMatechPalette';
export { createMatechTheme } from './helpers/createMatechTheme';
export { createMatechThemeOptions } from './helpers/createMatechThemeOptions';
export { getMatechPalette } from './helpers/getMatechPalette';
export { MatechThemeProvider, useMatechTheme } from './ThemeProvider';
export { matechDefaultPalette } from './palette/default.palette';
export { matechDefaultButtonPalette } from './palette/components/button.palette';
export { matechDefaultGlobalPalette } from './palette/global.palette';
export { matechDefaultTypography } from './typography/default.typography';
export type {
  MatechButtonPalette,
  MatechButtonPaletteVariant,
  MatechButtonTypography,
  MatechGlobalPalette,
  MatechPalette,
  MatechPaletteOptions,
  MatechTheme,
  MatechThemeOptions,
  MatechTypography,
  MatechTypographyOptions,
} from './theme.types';
export type { MatechThemeProviderProps } from './ThemeProvider';
