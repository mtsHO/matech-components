import {
  forwardRef,
  type ForwardedRef,
} from 'react';
import type { TypographyProps } from './Typography.types';
import { useTypographyViewModel } from './viewModel/useTypographyViewModel';

function TypographyComponent(
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
  }: TypographyProps,
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

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  TypographyComponent,
);

Typography.displayName = 'Typography';
