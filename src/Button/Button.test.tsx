import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { createMatechTheme, MatechThemeProvider } from '../theme';
import { Button } from './Button';

function TestIcon() {
  return (
    <svg aria-hidden="true" data-testid="button-icon" viewBox="0 0 24 24">
      <path d="M11 5h2v14h-2z" />
      <path d="M5 11h14v2H5z" />
    </svg>
  );
}

describe('Button', () => {
  it('renders the label using the primary variant by default', () => {
    render(<Button>Novo curso</Button>);

    const button = screen.getByRole('button', { name: 'Novo curso' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('data-variant', 'primary');
  });

  it('renders an optional icon', () => {
    render(
      <Button icon={<TestIcon />}>
        Novo evento
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Novo evento' });

    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('button-icon')).toBeInTheDocument();
  });

  it('renders the secondary and tertiary variants', () => {
    const { rerender } = render(<Button variant="secondary">Retomar curso</Button>);

    let button = screen.getByRole('button', { name: 'Retomar curso' });
    expect(button).toHaveAttribute('data-variant', 'secondary');

    rerender(<Button variant="tertiary">Responder</Button>);

    button = screen.getByRole('button', { name: 'Responder' });
    expect(button).toHaveAttribute('data-variant', 'tertiary');
  });

  it('forwards refs to the underlying button element', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Novo curso</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current).toHaveTextContent('Novo curso');
  });

  it('defaults the native type to button', () => {
    render(<Button>Novo curso</Button>);

    expect(screen.getByRole('button', { name: 'Novo curso' })).toHaveAttribute(
      'type',
      'button',
    );
  });

  it('uses the global palette as the base for component defaults', () => {
    const theme = createMatechTheme({
      global: {
        border: '#99F6E4',
        borderStrong: '#5EEAD4',
        brand: '#115E59',
        brandForeground: '#F3FFFD',
        brandStrong: '#134E4A',
        surface: '#FFFFFF',
        surfaceMuted: '#F0FDFA',
        text: '#115E59',
        textMuted: '#6B7280',
      },
    });

    render(
      <MatechThemeProvider theme={theme}>
        <Button>Novo curso</Button>
      </MatechThemeProvider>,
    );

    const button = screen.getByRole('button', { name: 'Novo curso' });
    const computedStyles = window.getComputedStyle(button);

    expect(computedStyles.backgroundColor).toBe('rgb(17, 94, 89)');
    expect(computedStyles.color).toBe('rgb(243, 255, 253)');
  });

  it('applies palette overrides from the consumer theme', () => {
    const theme = createMatechTheme({
      components: {
        button: {
          primary: {
            background: '#115E59',
            border: '#115E59',
            disabledBackground: '#A7F3D0',
            disabledBorder: '#A7F3D0',
            disabledForeground: '#134E4A',
            foreground: '#F3FFFD',
            hoverBackground: '#134E4A',
            hoverBorder: '#134E4A',
          },
        },
      },
    });

    render(
      <MatechThemeProvider theme={theme}>
        <Button>Novo curso</Button>
      </MatechThemeProvider>,
    );

    const button = screen.getByRole('button', { name: 'Novo curso' });
    const computedStyles = window.getComputedStyle(button);

    expect(computedStyles.backgroundColor).toBe('rgb(17, 94, 89)');
    expect(computedStyles.color).toBe('rgb(243, 255, 253)');
  });

  it('applies typography overrides from the consumer theme', () => {
    const theme = createMatechTheme({
      typography: {
        button: {
          fontFamily: '"Georgia", serif',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        },
      },
    });

    render(
      <MatechThemeProvider theme={theme}>
        <Button>Novo curso</Button>
      </MatechThemeProvider>,
    );

    const button = screen.getByRole('button', { name: 'Novo curso' });
    const computedStyles = window.getComputedStyle(button);

    expect(computedStyles.fontFamily).toContain('Georgia');
    expect(computedStyles.fontWeight).toBe('700');
    expect(computedStyles.letterSpacing).toBe('0.08em');
    expect(computedStyles.textTransform).toBe('uppercase');
  });
});
