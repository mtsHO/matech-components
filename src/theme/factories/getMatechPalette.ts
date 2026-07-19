import { createMatechPalette } from './createMatechPalette';
import type {
  MatechPalette,
  MatechTheme,
  MatechThemeOptions,
} from '../theme.types';

export function getMatechPalette(
  theme?: MatechTheme | MatechThemeOptions,
): MatechPalette {
  if (theme && 'palette' in theme) {
    return theme.palette;
  }

  return createMatechPalette(theme);
}
