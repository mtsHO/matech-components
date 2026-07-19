import { createMatechPalette } from './createMatechPalette';
import { matechDefaultTypography } from '../typography';
import type {
  MatechTextVariant,
  MatechTheme,
  MatechThemeOptions,
  MatechTypographyVariantStyle,
} from '../theme.types';

const textVariants: MatechTextVariant[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'overline',
  'lead',
];

function mergeTypographyVariant(
  defaults: MatechTypographyVariantStyle,
  fontFamily: string,
  overrides?: Partial<MatechTypographyVariantStyle>,
): MatechTypographyVariantStyle {
  return {
    ...defaults,
    fontFamily,
    ...overrides,
  };
}

export function createMatechTheme(
  options?: MatechThemeOptions,
): MatechTheme {
  const fontFamily =
    options?.typography?.fontFamily ?? matechDefaultTypography.fontFamily;

  return {
    palette: createMatechPalette(options),
    options,
    typography: {
      fontFamily,
      button: {
        ...matechDefaultTypography.button,
        fontFamily,
        ...options?.typography?.button,
      },
      variants: textVariants.reduce(
        (accumulator, variant) => {
          accumulator[variant] = mergeTypographyVariant(
            matechDefaultTypography.variants[variant],
            fontFamily,
            options?.typography?.variants?.[variant],
          );

          return accumulator;
        },
        {} as Record<MatechTextVariant, MatechTypographyVariantStyle>,
      ),
    },
  };
}
