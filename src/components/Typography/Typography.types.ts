import type {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  JSX,
  ReactElement,
} from 'react';
import type {
  MatechGlobalPalette,
  MatechTextVariant,
  MatechTypographyVariantStyle,
} from '../../theme';

export type TypographyVariant = MatechTextVariant;
export type TypographyAlign = 'left' | 'center' | 'right' | 'justify' | 'inherit';
export type TypographyColor = 'default' | 'muted' | 'brand' | 'inherit' | string;
export type TypographyElement = keyof JSX.IntrinsicElements | ElementType;
export type TypographyDefaultElement = 'p';

export type TypographyOwnProps<T extends TypographyElement = TypographyDefaultElement> = {
  align?: TypographyAlign;
  as?: T;
  color?: TypographyColor;
  gutterBottom?: boolean;
  noWrap?: boolean;
  style?: CSSProperties;
  variant?: TypographyVariant;
};

export type TypographyProps<T extends TypographyElement = TypographyDefaultElement> =
  TypographyOwnProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof TypographyOwnProps<T> | 'color'>;

export type TypographyRef<T extends TypographyElement> = ComponentPropsWithRef<T>['ref'];

export type TypographyComponentType = <
  T extends TypographyElement = TypographyDefaultElement,
>(
  props: TypographyProps<T> & {
    ref?: TypographyRef<T>;
  },
) => ReactElement | null;

export type TypographyRootStyleParams = {
  align?: TypographyAlign;
  color?: TypographyColor;
  gutterBottom?: boolean;
  noWrap?: boolean;
  palette: MatechGlobalPalette;
  variantStyle: MatechTypographyVariantStyle;
};

export type UseTypographyViewModelParams<
  T extends TypographyElement = TypographyDefaultElement,
> = Pick<
  TypographyOwnProps<T>,
  'align' | 'as' | 'color' | 'gutterBottom' | 'noWrap' | 'variant'
> & {
  nativeTypographyProps: Omit<
    TypographyProps<T>,
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

export type UseTypographyViewModelResult<
  T extends TypographyElement = TypographyDefaultElement,
> = {
  Component: TypographyElement;
  elementAttributes: TypographyViewModelAttributes;
  nativeTypographyProps: UseTypographyViewModelParams<T>['nativeTypographyProps'];
  rootStyle: CSSProperties;
};
