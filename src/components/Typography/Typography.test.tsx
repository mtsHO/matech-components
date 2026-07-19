import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { createMatechTheme, MatechThemeProvider } from '../../theme';
import { Typography } from './Typography';

describe('Typography', () => {
  it('renders the body1 variant by default', () => {
    render(<Typography>Texto base</Typography>);

    const element = screen.getByText('Texto base');

    expect(element.tagName).toBe('P');
    expect(element).toHaveAttribute('data-variant', 'body1');
  });

  it('allows overriding the semantic element with as', () => {
    render(
      <Typography as="span" variant="h4">
        Titulo inline
      </Typography>,
    );

    const element = screen.getByText('Titulo inline');

    expect(element.tagName).toBe('SPAN');
    expect(element).toHaveAttribute('data-variant', 'h4');
  });

  it('accepts native props from the chosen element with as', () => {
    render(
      <>
        <Typography as="a" href="/cursos">
          Ver cursos
        </Typography>
        <Typography as="label" htmlFor="email">
          E-mail
        </Typography>
        <input id="email" />
      </>,
    );

    expect(screen.getByRole('link', { name: 'Ver cursos' })).toHaveAttribute(
      'href',
      '/cursos',
    );
    expect(screen.getByText('E-mail')).toHaveAttribute('for', 'email');
  });

  it('uses palette colors from the theme', () => {
    const theme = createMatechTheme({
      global: {
        border: '#D7DCF0',
        borderStrong: '#C2CAE6',
        brand: '#31408B',
        brandForeground: '#FFFFFF',
        brandStrong: '#273471',
        surface: '#FFFFFF',
        surfaceMuted: '#F6F8FF',
        text: '#1F2A5A',
        textMuted: '#6C7699',
      },
    });

    render(
      <MatechThemeProvider theme={theme}>
        <Typography color="muted">Texto secundario</Typography>
      </MatechThemeProvider>,
    );

    const element = screen.getByText('Texto secundario');
    const computedStyles = window.getComputedStyle(element);

    expect(computedStyles.color).toBe('rgb(108, 118, 153)');
  });

  it('applies typography variant overrides from the theme', () => {
    const theme = createMatechTheme({
      typography: {
        variants: {
          h3: {
            fontSize: '2rem',
            fontWeight: 900,
            letterSpacing: '-0.03em',
          },
        },
      },
    });

    render(
      <MatechThemeProvider theme={theme}>
        <Typography variant="h3">Feed da comunidade</Typography>
      </MatechThemeProvider>,
    );

    const element = screen.getByText('Feed da comunidade');
    const computedStyles = window.getComputedStyle(element);

    expect(computedStyles.fontSize).toBe('2rem');
    expect(computedStyles.fontWeight).toBe('900');
    expect(computedStyles.letterSpacing).toBe('-0.03em');
  });

  it('supports noWrap', () => {
    render(<Typography noWrap>Texto que nao quebra</Typography>);

    const element = screen.getByText('Texto que nao quebra');
    const computedStyles = window.getComputedStyle(element);

    expect(computedStyles.whiteSpace).toBe('nowrap');
    expect(computedStyles.textOverflow).toBe('ellipsis');
  });
});
