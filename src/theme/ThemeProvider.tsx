import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from 'react';
import { createMatechTheme } from './helpers/createMatechTheme';
import type { MatechTheme, MatechThemeOptions } from './theme.types';

const defaultTheme = createMatechTheme();

const MatechThemeContext = createContext<MatechTheme>(defaultTheme);

export type MatechThemeProviderProps = {
  children: ReactNode;
  theme?: MatechTheme | MatechThemeOptions;
};

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
