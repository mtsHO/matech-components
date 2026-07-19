import type {
  ButtonHTMLAttributes,
  CSSProperties,
  MouseEvent,
  ReactNode,
} from 'react';
import type {
  MatechButtonPaletteVariant,
  MatechButtonTypography,
} from '../../theme';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'color'
> & {
  icon?: ReactNode;
  size?: ButtonSize;
  style?: CSSProperties;
  variant?: ButtonVariant;
};

export type ButtonSizeStyles = {
  fontSize: string;
  gap: number;
  iconSize: number;
  minHeight: number;
  paddingInline: number;
};

export type ButtonRootStyleParams = {
  disabled?: boolean;
  hasIcon: boolean;
  isHovered: boolean;
  palette: MatechButtonPaletteVariant;
  size: ButtonSize;
  typography: MatechButtonTypography;
  variant: ButtonVariant;
};

export type UseButtonViewModelParams = Pick<
  ButtonProps,
  | 'disabled'
  | 'icon'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'size'
  | 'type'
  | 'variant'
> & {
  nativeButtonProps: Omit<
    ButtonProps,
    | 'children'
    | 'disabled'
    | 'icon'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'size'
    | 'style'
    | 'type'
    | 'variant'
  >;
};

export type ButtonViewModelAttributes = {
  'data-size': ButtonSize;
  'data-variant': ButtonVariant;
  disabled: boolean;
  onMouseEnter: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave: (event: MouseEvent<HTMLButtonElement>) => void;
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export type UseButtonViewModelResult = {
  buttonAttributes: ButtonViewModelAttributes;
  icon?: ReactNode;
  iconStyle: CSSProperties;
  nativeButtonProps: UseButtonViewModelParams['nativeButtonProps'];
  rootStyle: CSSProperties;
};
