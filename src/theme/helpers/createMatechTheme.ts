import { createMatechPalette } from './createMatechPalette';
import { matechDefaultTypography } from '../typography/default.typography';
import type { MatechTheme, MatechThemeOptions } from '../theme.types';

export function createMatechTheme(
  options?: MatechThemeOptions,
): MatechTheme {
  const fontFamily =
    options?.typography?.fontFamily ?? matechDefaultTypography.fontFamily;

  return {
    palette: createMatechPalette(options),
    options,
    typography: {
      fontFamily,
      button: {
        ...matechDefaultTypography.button,
        fontFamily,
        ...options?.typography?.button,
      },
    },
  };
}
