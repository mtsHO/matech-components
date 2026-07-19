import { renderHook } from '@testing-library/react';
import { createElement, type ReactNode } from 'react';
import { describe, expect, it } from 'vitest';
import { createMatechTheme, MatechThemeProvider } from '../../../theme';
import { useTypographyViewModel } from './useTypographyViewModel';

function createWrapper(theme = createMatechTheme()) {
  return function Wrapper({ children }: { children: ReactNode }) {
    return createElement(MatechThemeProvider, { children, theme });
  };
}

describe('useTypographyViewModel', () => {
  it('returns the default body1 contract', () => {
    const { result } = renderHook(
      () =>
        useTypographyViewModel({
          nativeTypographyProps: {
            id: 'community-feed',
          },
        }),
      {
        wrapper: createWrapper(),
      },
    );

    expect(result.current.Component).toBe('p');
    expect(result.current.elementAttributes).toEqual({
      'data-variant': 'body1',
    });
    expect(result.current.nativeTypographyProps).toEqual({
      id: 'community-feed',
    });
    expect(result.current.rootStyle).toMatchObject({
      color: '#4538A6',
      fontSize: '1rem',
      fontWeight: 400,
      margin: 0,
      textTransform: 'none',
    });
  });

  it('maps semantic elements by variant and allows overriding with as', () => {
    const { result: headingResult } = renderHook(
      () =>
        useTypographyViewModel({
          nativeTypographyProps: {},
          variant: 'h2',
        }),
      {
        wrapper: createWrapper(),
      },
    );

    const { result: captionResult } = renderHook(
      () =>
        useTypographyViewModel({
          nativeTypographyProps: {},
          variant: 'caption',
        }),
      {
        wrapper: createWrapper(),
      },
    );

    const { result: overrideResult } = renderHook(
      () =>
        useTypographyViewModel({
          as: 'label',
          nativeTypographyProps: {},
          variant: 'h4',
        }),
      {
        wrapper: createWrapper(),
      },
    );

    expect(headingResult.current.Component).toBe('h2');
    expect(captionResult.current.Component).toBe('span');
    expect(overrideResult.current.Component).toBe('label');
    expect(overrideResult.current.elementAttributes).toEqual({
      'data-variant': 'h4',
    });
  });

  it('resolves palette color and typography variant styles from the theme', () => {
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
      typography: {
        variants: {
          h3: {
            fontFamily: '"Georgia", serif',
            fontSize: '2rem',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.3,
            textTransform: 'uppercase',
          },
        },
      },
    });

    const { result } = renderHook(
      () =>
        useTypographyViewModel({
          color: 'brand',
          nativeTypographyProps: {},
          variant: 'h3',
        }),
      {
        wrapper: createWrapper(theme),
      },
    );

    expect(result.current.rootStyle).toMatchObject({
      color: '#31408B',
      fontFamily: '"Georgia", serif',
      fontSize: '2rem',
      fontWeight: 900,
      letterSpacing: '-0.03em',
      lineHeight: 1.3,
      textTransform: 'uppercase',
    });
  });

  it('supports layout-related style flags', () => {
    const { result } = renderHook(
      () =>
        useTypographyViewModel({
          align: 'center',
          color: '#FF4D3D',
          gutterBottom: true,
          nativeTypographyProps: {},
          noWrap: true,
        }),
      {
        wrapper: createWrapper(),
      },
    );

    expect(result.current.rootStyle).toMatchObject({
      color: '#FF4D3D',
      marginBottom: '0.35em',
      overflow: 'hidden',
      textAlign: 'center',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    });
  });
});
