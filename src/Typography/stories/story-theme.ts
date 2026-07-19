import { createMatechTheme } from '../../theme';

export function createTypographyStoryTheme() {
  return createMatechTheme({
    global: {
      border: '#DEE4F5',
      borderStrong: '#C7D1EC',
      brand: '#31408B',
      brandForeground: '#FFFFFF',
      brandStrong: '#283471',
      surface: '#FFFFFF',
      surfaceMuted: '#F7F9FF',
      text: '#2A356E',
      textMuted: '#66719A',
    },
    typography: {
      variants: {
        h3: {
          fontWeight: 800,
        },
        subtitle1: {
          fontWeight: 700,
        },
      },
    },
  });
}
