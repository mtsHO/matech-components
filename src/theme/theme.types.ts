export type MatechButtonPaletteVariant = {
  background: string;
  border: string;
  foreground: string;
  hoverBackground: string;
  hoverBorder: string;
  disabledBackground: string;
  disabledBorder: string;
  disabledForeground: string;
};

export type MatechButtonTypography = {
  fontFamily: string;
  fontWeight: number;
  letterSpacing: string;
  textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
};

export type MatechTextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'lead';

export type MatechTypographyVariantStyle = {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  letterSpacing: string;
  lineHeight: number;
  textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
};

export type MatechGlobalPalette = {
  brand: string;
  brandStrong: string;
  brandForeground: string;
  surface: string;
  surfaceMuted: string;
  border: string;
  borderStrong: string;
  text: string;
  textMuted: string;
};

export type MatechButtonPalette = {
  primary: MatechButtonPaletteVariant;
  secondary: MatechButtonPaletteVariant;
  tertiary: MatechButtonPaletteVariant;
};

export type MatechPalette = {
  global: MatechGlobalPalette;
  components: {
    button: MatechButtonPalette;
  };
};

export type MatechPaletteOptions = {
  global?: Partial<MatechGlobalPalette>;
  components?: {
    button?: {
      primary?: Partial<MatechButtonPaletteVariant>;
      secondary?: Partial<MatechButtonPaletteVariant>;
      tertiary?: Partial<MatechButtonPaletteVariant>;
    };
  };
};

export type MatechTypography = {
  fontFamily: string;
  button: MatechButtonTypography;
  variants: Record<MatechTextVariant, MatechTypographyVariantStyle>;
};

export type MatechTypographyOptions = {
  button?: Partial<MatechButtonTypography>;
  fontFamily?: string;
  variants?: {
    [K in MatechTextVariant]?: Partial<MatechTypographyVariantStyle>;
  };
};

export type MatechThemeOptions = MatechPaletteOptions & {
  typography?: MatechTypographyOptions;
};

export type MatechTheme = {
  palette: MatechPalette;
  options?: MatechThemeOptions;
  typography: MatechTypography;
};
