import {
  forwardRef,
  type ForwardedRef,
} from 'react';
import type {
  TypographyComponentType,
  TypographyDefaultElement,
  TypographyElement,
  TypographyProps,
} from './Typography.types';
import { useTypographyViewModel } from './viewModel/useTypographyViewModel';

function TypographyComponent<T extends TypographyElement = TypographyDefaultElement>(
  {
    align,
    as,
    children,
    color,
    gutterBottom,
    noWrap,
    style,
    variant,
    ...nativeTypographyProps
  }: TypographyProps<T>,
  ref: ForwardedRef<HTMLElement>,
) {
  const {
    Component,
    elementAttributes,
    nativeTypographyProps: resolvedNativeTypographyProps,
    rootStyle,
  } = useTypographyViewModel({
    align,
    as,
    color,
    gutterBottom,
    nativeTypographyProps,
    noWrap,
    variant,
  });

  return (
    <Component
      {...resolvedNativeTypographyProps}
      {...elementAttributes}
      ref={ref}
      style={{ ...rootStyle, ...style }}
    >
      {children}
    </Component>
  );
}

export const Typography = forwardRef(TypographyComponent) as TypographyComponentType;

(Typography as { displayName?: string }).displayName = 'Typography';
