import type { ReactNode } from 'react';
import type { MatechTheme, MatechThemeOptions } from './theme.types';

export type MatechThemeProviderProps = {
  children: ReactNode;
  theme?: MatechTheme | MatechThemeOptions;
};
