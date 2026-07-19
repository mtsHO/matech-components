import { act, renderHook } from '@testing-library/react';
import { createElement, type ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { createMatechTheme, MatechThemeProvider } from '../../theme';
import { useButtonViewModel } from './useButtonViewModel';

function createWrapper(theme = createMatechTheme()) {
  return function Wrapper({ children }: { children: ReactNode }) {
    return createElement(MatechThemeProvider, { children, theme });
  };
}

describe('useButtonViewModel', () => {
  it('returns the default button contract', () => {
    const { result } = renderHook(
      () =>
        useButtonViewModel({
          nativeButtonProps: {
            'aria-label': 'Novo curso',
          },
        }),
      {
        wrapper: createWrapper(),
      },
    );

    expect(result.current.buttonAttributes).toMatchObject({
      'data-size': 'large',
      'data-variant': 'primary',
      disabled: false,
      type: 'button',
    });
    expect(result.current.nativeButtonProps).toEqual({
      'aria-label': 'Novo curso',
    });
    expect(result.current.rootStyle.backgroundColor).toBe('#4538A6');
    expect(result.current.rootStyle.color).toBe('#FFFDF5');
    expect(result.current.rootStyle.gap).toBe(0);
  });

  it('updates hover state and forwards mouse handlers', () => {
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const theme = createMatechTheme({
      components: {
        button: {
          primary: {
            background: '#111111',
            border: '#111111',
            foreground: '#FFFFFF',
            hoverBackground: '#222222',
            hoverBorder: '#333333',
            disabledBackground: '#CCCCCC',
            disabledBorder: '#CCCCCC',
            disabledForeground: '#666666',
          },
        },
      },
    });

    const { result } = renderHook(
      () =>
        useButtonViewModel({
          nativeButtonProps: {},
          onMouseEnter,
          onMouseLeave,
        }),
      {
        wrapper: createWrapper(theme),
      },
    );

    expect(result.current.rootStyle.backgroundColor).toBe('#111111');
    expect(result.current.rootStyle.border).toBe('1px solid #111111');

    act(() => {
      result.current.buttonAttributes.onMouseEnter({} as never);
    });

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(result.current.rootStyle.backgroundColor).toBe('#222222');
    expect(result.current.rootStyle.border).toBe('1px solid #333333');

    act(() => {
      result.current.buttonAttributes.onMouseLeave({} as never);
    });

    expect(onMouseLeave).toHaveBeenCalledTimes(1);
    expect(result.current.rootStyle.backgroundColor).toBe('#111111');
    expect(result.current.rootStyle.border).toBe('1px solid #111111');
  });

  it('resolves tertiary icon sizing and disabled styles', () => {
    const theme = createMatechTheme({
      components: {
        button: {
          tertiary: {
            background: 'transparent',
            border: 'transparent',
            foreground: '#31408B',
            hoverBackground: 'rgba(49, 64, 139, 0.08)',
            hoverBorder: 'transparent',
            disabledBackground: 'transparent',
            disabledBorder: 'transparent',
            disabledForeground: '#A0A7C4',
          },
        },
      },
    });

    const { result } = renderHook(
      () =>
        useButtonViewModel({
          disabled: true,
          icon: createElement('span', null, '+'),
          nativeButtonProps: {},
          size: 'small',
          variant: 'tertiary',
        }),
      {
        wrapper: createWrapper(theme),
      },
    );

    expect(result.current.buttonAttributes).toMatchObject({
      'data-size': 'small',
      'data-variant': 'tertiary',
      disabled: true,
    });
    expect(result.current.rootStyle.backgroundColor).toBe('transparent');
    expect(result.current.rootStyle.border).toBe('0px solid transparent');
    expect(result.current.rootStyle.color).toBe('#A0A7C4');
    expect(result.current.rootStyle.cursor).toBe('not-allowed');
    expect(result.current.rootStyle.gap).toBe(6);
    expect(result.current.iconStyle).toMatchObject({
      fontSize: 15,
      height: 15,
      width: 15,
    });
  });
});
