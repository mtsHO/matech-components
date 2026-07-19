import { useMemo } from 'react';
import { useMatechTheme } from '../../../theme';
import { matechTypographyStyles } from '../Typography.styles';
import type {
  TypographyElement,
  TypographyVariant,
  UseTypographyViewModelParams,
  UseTypographyViewModelResult,
} from '../Typography.types';

const defaultElementByVariant: Record<
  TypographyVariant,
  keyof JSX.IntrinsicElements
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'p',
  subtitle2: 'p',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
  lead: 'p',
};

export function useTypographyViewModel<T extends TypographyElement>({
  align,
  as,
  color,
  gutterBottom,
  nativeTypographyProps,
  noWrap,
  variant = 'body1',
}: UseTypographyViewModelParams<T>): UseTypographyViewModelResult<T> {
  const { palette, typography } = useMatechTheme();

  const Component: TypographyElement = as ?? defaultElementByVariant[variant];

  const rootStyle = useMemo(
    () =>
      matechTypographyStyles.root({
        align,
        color,
        gutterBottom,
        noWrap,
        palette: palette.global,
        variantStyle: typography.variants[variant],
      }),
    [align, color, gutterBottom, noWrap, palette.global, typography.variants, variant],
  );

  return {
    Component,
    elementAttributes: {
      'data-variant': variant,
    },
    nativeTypographyProps,
    rootStyle,
  };
}
