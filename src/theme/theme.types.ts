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
};

export type MatechTypographyOptions = {
  button?: Partial<MatechButtonTypography>;
  fontFamily?: string;
};

export type MatechThemeOptions = MatechPaletteOptions & {
  typography?: MatechTypographyOptions;
};

export type MatechTheme = {
  palette: MatechPalette;
  options?: MatechThemeOptions;
  typography: MatechTypography;
};
