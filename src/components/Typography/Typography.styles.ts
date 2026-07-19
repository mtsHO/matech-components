import type { CSSProperties } from 'react';
import type { TypographyRootStyleParams } from './Typography.types';

function resolveColor(
  color: TypographyRootStyleParams['color'],
  textColor: string,
  mutedColor: string,
  brandColor: string,
) {
  if (!color || color === 'default') {
    return textColor;
  }

  if (color === 'muted') {
    return mutedColor;
  }

  if (color === 'brand') {
    return brandColor;
  }

  if (color === 'inherit') {
    return 'inherit';
  }

  return color;
}

export const matechTypographyStyles = {
  root: ({
    align = 'inherit',
    color = 'default',
    gutterBottom = false,
    noWrap = false,
    palette,
    variantStyle,
  }: TypographyRootStyleParams): CSSProperties => ({
    color: resolveColor(
      color,
      palette.text,
      palette.textMuted,
      palette.brand,
    ),
    fontFamily: variantStyle.fontFamily,
    fontSize: variantStyle.fontSize,
    fontWeight: variantStyle.fontWeight,
    letterSpacing: variantStyle.letterSpacing,
    lineHeight: variantStyle.lineHeight,
    margin: 0,
    marginBottom: gutterBottom ? '0.35em' : 0,
    overflow: noWrap ? 'hidden' : undefined,
    textAlign: align === 'inherit' ? undefined : align,
    textOverflow: noWrap ? 'ellipsis' : undefined,
    textTransform: variantStyle.textTransform,
    whiteSpace: noWrap ? 'nowrap' : undefined,
  }),
};
