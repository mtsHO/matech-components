import { createMatechDefaultButtonPalette } from '../palette/components';
import { matechDefaultGlobalPalette } from '../palette';
import type {
  MatechButtonPaletteVariant,
  MatechPalette,
  MatechPaletteOptions,
} from '../theme.types';

function mergeButtonVariantState(
  defaults: MatechButtonPaletteVariant,
  overrides?: Partial<MatechButtonPaletteVariant>,
): MatechButtonPaletteVariant {
  return {
    ...defaults,
    ...overrides,
  };
}

export function createMatechPalette(
  overrides?: MatechPaletteOptions,
): MatechPalette {
  const global = {
    ...matechDefaultGlobalPalette,
    ...overrides?.global,
  };

  const buttonDefaults = createMatechDefaultButtonPalette(global);

  return {
    global,
    components: {
      button: {
        primary: mergeButtonVariantState(
          buttonDefaults.primary,
          overrides?.components?.button?.primary,
        ),
        secondary: mergeButtonVariantState(
          buttonDefaults.secondary,
          overrides?.components?.button?.secondary,
        ),
        tertiary: mergeButtonVariantState(
          buttonDefaults.tertiary,
          overrides?.components?.button?.tertiary,
        ),
      },
    },
  };
}
