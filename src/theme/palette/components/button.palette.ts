import { matechDefaultGlobalPalette } from '../global.palette';
import type {
  MatechButtonPalette,
  MatechGlobalPalette,
} from '../../theme.types';

function hexToRgba(hex: string, alpha: number) {
  if (/^rgba?\(/i.test(hex)) {
    const values = hex.match(/\d+(\.\d+)?/g);

    if (!values || values.length < 3) {
      return hex;
    }

    const [red, green, blue] = values;

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  const normalized = hex.replace('#', '');

  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(normalized)) {
    return hex;
  }

  const value =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => `${char}${char}`)
          .join('')
      : normalized;

  const red = Number.parseInt(value.slice(0, 2), 16);
  const green = Number.parseInt(value.slice(2, 4), 16);
  const blue = Number.parseInt(value.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

export function createMatechDefaultButtonPalette(
  global: MatechGlobalPalette,
): MatechButtonPalette {
  return {
    primary: {
      background: global.brand,
      border: global.brand,
      foreground: global.brandForeground,
      hoverBackground: global.brandStrong,
      hoverBorder: global.brandStrong,
      disabledBackground: global.borderStrong,
      disabledBorder: global.borderStrong,
      disabledForeground: global.brandForeground,
    },
    secondary: {
      background: global.surface,
      border: global.border,
      foreground: global.brand,
      hoverBackground: global.surfaceMuted,
      hoverBorder: global.borderStrong,
      disabledBackground: global.surfaceMuted,
      disabledBorder: global.border,
      disabledForeground: global.textMuted,
    },
    tertiary: {
      background: 'transparent',
      border: 'transparent',
      foreground: global.brand,
      hoverBackground: hexToRgba(global.brand, 0.08),
      hoverBorder: 'transparent',
      disabledBackground: 'transparent',
      disabledBorder: 'transparent',
      disabledForeground: global.textMuted,
    },
  };
}

export const matechDefaultButtonPalette =
  createMatechDefaultButtonPalette(matechDefaultGlobalPalette);
