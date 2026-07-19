import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  createMatechPalette,
  createMatechTheme,
  createMatechThemeOptions,
  getMatechPalette,
  MatechThemeProvider,
  matechDefaultGlobalPalette,
  matechDefaultPalette,
  matechDefaultTypography,
  useMatechTheme,
} from './index';

function ThemeProbe() {
  const theme = useMatechTheme();

  return (
    <>
      <span data-testid="brand">{theme.palette.global.brand}</span>
      <span data-testid="font-family">{theme.typography.fontFamily}</span>
    </>
  );
}

describe('theme helpers and provider', () => {
  it('returns an empty object when no theme options are provided', () => {
    expect(createMatechThemeOptions()).toEqual({});
  });

  it('returns the same options object when overrides are provided', () => {
    const overrides = {
      global: {
        brand: '#115E59',
      },
    };

    expect(createMatechThemeOptions(overrides)).toBe(overrides);
  });

  it('creates a palette by merging global and component overrides with defaults', () => {
    const palette = createMatechPalette({
      global: {
        brand: '#115E59',
        textMuted: '#6B7280',
      },
      components: {
        button: {
          primary: {
            foreground: '#F3FFFD',
          },
          secondary: {
            hoverBorder: '#134E4A',
          },
          tertiary: {
            disabledForeground: '#94A3B8',
          },
        },
      },
    });

    expect(palette.global.brand).toBe('#115E59');
    expect(palette.global.textMuted).toBe('#6B7280');
    expect(palette.components.button.primary.background).toBe('#115E59');
    expect(palette.components.button.primary.foreground).toBe('#F3FFFD');
    expect(palette.components.button.secondary.hoverBorder).toBe('#134E4A');
    expect(palette.components.button.tertiary.disabledForeground).toBe('#94A3B8');
    expect(palette.components.button.tertiary.hoverBackground).toBe(
      'rgba(17, 94, 89, 0.08)',
    );
  });

  it('creates a theme by merging typography overrides into the defaults', () => {
    const theme = createMatechTheme({
      typography: {
        fontFamily: '"Georgia", serif',
        button: {
          fontWeight: 700,
        },
        variants: {
          h2: {
            fontSize: '2rem',
          },
        },
      },
    });

    expect(theme.options?.typography?.fontFamily).toBe('"Georgia", serif');
    expect(theme.typography.fontFamily).toBe('"Georgia", serif');
    expect(theme.typography.button).toMatchObject({
      fontFamily: '"Georgia", serif',
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
    });
    expect(theme.typography.variants.h2).toMatchObject({
      fontFamily: '"Georgia", serif',
      fontSize: '2rem',
    });
    expect(theme.typography.variants.body1.fontFamily).toBe('"Georgia", serif');
  });

  it('returns the palette directly when a full theme is provided', () => {
    const theme = createMatechTheme({
      global: {
        brand: '#1D4ED8',
      },
    });

    expect(getMatechPalette(theme)).toBe(theme.palette);
  });

  it('creates a palette when only theme options are provided', () => {
    const palette = getMatechPalette({
      global: {
        brand: '#1D4ED8',
      },
    });

    expect(palette.global.brand).toBe('#1D4ED8');
    expect(palette.components.button.primary.background).toBe('#1D4ED8');
  });

  it('provides the default theme when no provider is used', () => {
    render(<ThemeProbe />);

    expect(screen.getByTestId('brand')).toHaveTextContent('#4538A6');
    expect(screen.getByTestId('font-family')).toHaveTextContent(
      '"Lato", "Segoe UI", sans-serif',
    );
  });

  it('creates a theme from options when the provider receives overrides', () => {
    render(
      <MatechThemeProvider
        theme={{
          global: {
            brand: '#115E59',
          },
          typography: {
            fontFamily: '"Georgia", serif',
          },
        }}
      >
        <ThemeProbe />
      </MatechThemeProvider>,
    );

    expect(screen.getByTestId('brand')).toHaveTextContent('#115E59');
    expect(screen.getByTestId('font-family')).toHaveTextContent('"Georgia", serif');
  });

  it('uses the provided theme directly when the provider receives a full theme', () => {
    const theme = createMatechTheme({
      global: {
        brand: '#1D4ED8',
      },
      typography: {
        fontFamily: '"Montserrat", sans-serif',
      },
    });

    render(
      <MatechThemeProvider theme={theme}>
        <ThemeProbe />
      </MatechThemeProvider>,
    );

    expect(screen.getByTestId('brand')).toHaveTextContent('#1D4ED8');
    expect(screen.getByTestId('font-family')).toHaveTextContent(
      '"Montserrat", sans-serif',
    );
  });

  it('exports the default global palette, palette and typography contracts', () => {
    expect(matechDefaultGlobalPalette).toMatchObject({
      brand: '#4538A6',
      border: '#D8DDF1',
      textMuted: '#A0A7C2',
    });
    expect(matechDefaultPalette.global).toBe(matechDefaultGlobalPalette);
    expect(matechDefaultPalette.components.button.primary.background).toBe('#4538A6');
    expect(matechDefaultTypography.button).toMatchObject({
      fontFamily: '"Lato", "Segoe UI", sans-serif',
      fontWeight: 900,
      textTransform: 'uppercase',
    });
    expect(matechDefaultTypography.variants.overline).toMatchObject({
      fontSize: '0.75rem',
      textTransform: 'uppercase',
    });
  });
});
