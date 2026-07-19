import {
  forwardRef,
  type ForwardedRef,
} from 'react';
import type { ButtonProps } from './Button.types';
import { useButtonViewModel } from './viewModel/useButtonViewModel';

function ButtonComponent(
  {
    children,
    disabled,
    icon,
    onMouseEnter,
    onMouseLeave,
    size,
    style,
    type,
    variant,
    ...nativeButtonProps
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const {
    buttonAttributes,
    icon: resolvedIcon,
    iconStyle,
    nativeButtonProps: resolvedNativeButtonProps,
    rootStyle,
  } = useButtonViewModel({
    disabled,
    icon,
    nativeButtonProps,
    onMouseEnter,
    onMouseLeave,
    size,
    type,
    variant,
  });

  return (
    <button
      {...resolvedNativeButtonProps}
      {...buttonAttributes}
      ref={ref}
      style={{ ...rootStyle, ...style }}
    >
      {resolvedIcon ? (
        <span aria-hidden="true" style={iconStyle}>
          {resolvedIcon}
        </span>
      ) : null}
      <span>{children}</span>
    </button>
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonComponent);

Button.displayName = 'Button';
