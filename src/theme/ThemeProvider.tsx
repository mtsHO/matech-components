import {
  createContext,
  useContext,
  useMemo,
} from 'react';
import { createMatechTheme } from './factories';
import type { MatechTheme, MatechThemeOptions } from './theme.types';
import type { MatechThemeProviderProps } from './ThemeProvider.types';

const defaultTheme = createMatechTheme();

const MatechThemeContext = createContext<MatechTheme>(defaultTheme);

function isMatechTheme(value?: MatechTheme | MatechThemeOptions): value is MatechTheme {
  return Boolean(value && 'palette' in value);
}

export function MatechThemeProvider({
  children,
  theme,
}: MatechThemeProviderProps) {
  const resolvedTheme = useMemo(
    () => (isMatechTheme(theme) ? theme : createMatechTheme(theme)),
    [theme],
  );

  return (
    <MatechThemeContext.Provider value={resolvedTheme}>
      {children}
    </MatechThemeContext.Provider>
  );
}

export function useMatechTheme() {
  return useContext(MatechThemeContext);
}
