import type {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  JSX,
} from 'react';
import type {
  MatechGlobalPalette,
  MatechTextVariant,
  MatechTypographyVariantStyle,
} from '../theme';

export type TypographyVariant = MatechTextVariant;
export type TypographyAlign = 'left' | 'center' | 'right' | 'justify' | 'inherit';
export type TypographyColor = 'default' | 'muted' | 'brand' | 'inherit' | string;
export type TypographyElement = keyof JSX.IntrinsicElements | ElementType;

export type TypographyProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color'
> & {
  align?: TypographyAlign;
  as?: TypographyElement;
  color?: TypographyColor;
  gutterBottom?: boolean;
  noWrap?: boolean;
  style?: CSSProperties;
  variant?: TypographyVariant;
};

export type TypographyRootStyleParams = {
  align?: TypographyAlign;
  color?: TypographyColor;
  gutterBottom?: boolean;
  noWrap?: boolean;
  palette: MatechGlobalPalette;
  variantStyle: MatechTypographyVariantStyle;
};

export type UseTypographyViewModelParams = Pick<
  TypographyProps,
  'align' | 'as' | 'color' | 'gutterBottom' | 'noWrap' | 'variant'
> & {
  nativeTypographyProps: Omit<
    TypographyProps,
    | 'align'
    | 'as'
    | 'children'
    | 'color'
    | 'gutterBottom'
    | 'noWrap'
    | 'style'
    | 'variant'
  >;
};

export type TypographyViewModelAttributes = {
  'data-variant': TypographyVariant;
};

export type UseTypographyViewModelResult = {
  Component: TypographyElement;
  elementAttributes: TypographyViewModelAttributes;
  nativeTypographyProps: UseTypographyViewModelParams['nativeTypographyProps'];
  rootStyle: CSSProperties;
};
