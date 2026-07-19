import {
  useMemo,
  useState,
  type MouseEvent,
} from 'react';
import { useMatechTheme } from '../../theme';
import { matechButtonStyles } from '../Button.styles';
import type {
  UseButtonViewModelParams,
  UseButtonViewModelResult,
} from '../Button.types';

export function useButtonViewModel({
  disabled = false,
  icon,
  nativeButtonProps,
  onMouseEnter,
  onMouseLeave,
  size = 'large',
  type = 'button',
  variant = 'primary',
}: UseButtonViewModelParams): UseButtonViewModelResult {
  const [isHovered, setIsHovered] = useState(false);
  const { palette, typography } = useMatechTheme();
  const buttonPalette = palette.components.button[variant];
  const hasIcon = Boolean(icon);

  const rootStyle = useMemo(
    () =>
      matechButtonStyles.root({
        disabled,
        hasIcon,
        isHovered,
        palette: buttonPalette,
        size,
        typography: typography.button,
        variant,
      }),
    [buttonPalette, disabled, hasIcon, isHovered, size, typography.button, variant],
  );

  const iconStyle = useMemo(
    () => matechButtonStyles.icon(variant, size),
    [size, variant],
  );

  function handleMouseEnter(event: MouseEvent<HTMLButtonElement>) {
    setIsHovered(true);
    onMouseEnter?.(event);
  }

  function handleMouseLeave(event: MouseEvent<HTMLButtonElement>) {
    setIsHovered(false);
    onMouseLeave?.(event);
  }

  return {
    buttonAttributes: {
      'data-size': size,
      'data-variant': variant,
      disabled,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      type,
    },
    icon,
    iconStyle,
    nativeButtonProps,
    rootStyle,
  };
}
