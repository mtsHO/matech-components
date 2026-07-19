import type { MatechThemeOptions } from '../theme.types';

export function createMatechThemeOptions(
  overrides?: MatechThemeOptions,
): MatechThemeOptions {
  return overrides ?? {};
}
