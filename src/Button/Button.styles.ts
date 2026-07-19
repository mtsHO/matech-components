import type { CSSProperties } from 'react';
import type {
  ButtonRootStyleParams,
  ButtonSize,
  ButtonSizeStyles,
  ButtonVariant,
} from './Button.types';

const sizeMap: Record<ButtonSize, ButtonSizeStyles> = {
  small: {
    minHeight: 40,
    paddingInline: 18,
    fontSize: '0.76rem',
    iconSize: 16,
    gap: 8,
  },
  medium: {
    minHeight: 46,
    paddingInline: 22,
    fontSize: '0.8rem',
    iconSize: 17,
    gap: 10,
  },
  large: {
    minHeight: 52,
    paddingInline: 28,
    fontSize: '0.84rem',
    iconSize: 18,
    gap: 12,
  },
};

const tertiarySizeMap: Record<ButtonSize, ButtonSizeStyles> = {
  small: {
    minHeight: 30,
    paddingInline: 8,
    fontSize: '0.74rem',
    iconSize: 15,
    gap: 6,
  },
  medium: {
    minHeight: 34,
    paddingInline: 10,
    fontSize: '0.78rem',
    iconSize: 16,
    gap: 8,
  },
  large: {
    minHeight: 38,
    paddingInline: 12,
    fontSize: '0.8rem',
    iconSize: 17,
    gap: 10,
  },
};

export const matechButtonStyles = {
  icon: (
    variant: ButtonVariant,
    size: ButtonSize,
  ): CSSProperties => {
    const currentSize =
      variant === 'tertiary' ? tertiarySizeMap[size] : sizeMap[size];

    return {
      alignItems: 'center',
      display: 'inline-flex',
      flexShrink: 0,
      fontSize: currentSize.iconSize,
      height: currentSize.iconSize,
      justifyContent: 'center',
      width: currentSize.iconSize,
    };
  },
  root: ({
    disabled = false,
    hasIcon,
    isHovered,
    palette,
    size,
    typography,
    variant,
  }: ButtonRootStyleParams): CSSProperties => {
    const isTertiary = variant === 'tertiary';
    const currentSize = isTertiary ? tertiarySizeMap[size] : sizeMap[size];
    const backgroundColor = disabled
      ? palette.disabledBackground
      : isHovered
        ? palette.hoverBackground
        : palette.background;
    const borderColor = disabled
      ? palette.disabledBorder
      : isHovered
        ? palette.hoverBorder
        : palette.border;
    const color = disabled
      ? palette.disabledForeground
      : palette.foreground;

    return {
      alignItems: 'center',
      appearance: 'none',
      backgroundColor,
      border: `${isTertiary ? 0 : 1}px solid ${borderColor}`,
      borderRadius: isTertiary ? 10 : 16,
      boxShadow: 'none',
      color,
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      fontFamily: typography.fontFamily,
      fontSize: currentSize.fontSize,
      fontWeight: typography.fontWeight,
      gap: hasIcon ? currentSize.gap : 0,
      justifyContent: 'center',
      letterSpacing: typography.letterSpacing,
      lineHeight: 1,
      minHeight: currentSize.minHeight,
      padding: `0 ${currentSize.paddingInline}px`,
      textTransform: typography.textTransform,
      transition:
        'background-color 160ms ease, border-color 160ms ease, color 160ms ease, opacity 160ms ease',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      width: 'fit-content',
    };
  },
};
