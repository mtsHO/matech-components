import { createMatechTheme } from '../../../theme';

export function createButtonStoryTheme() {
  return createMatechTheme({
    global: {
      border: '#99F6E4',
      borderStrong: '#5EEAD4',
      brand: '#0F766E',
      brandForeground: '#F3FFFD',
      brandStrong: '#115E59',
      surface: '#FFFFFF',
      surfaceMuted: '#F0FDFA',
      text: '#115E59',
      textMuted: '#6B7280',
    },
    components: {
      button: {
        tertiary: {
          disabledForeground: '#94A3B8',
        },
      },
    },
  });
}
