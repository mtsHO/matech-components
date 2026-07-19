import { matechDefaultGlobalPalette } from './global.palette';
import { createMatechDefaultButtonPalette } from './components/button.palette';
import type { MatechPalette } from '../theme.types';

export const matechDefaultPalette: MatechPalette = {
  global: matechDefaultGlobalPalette,
  components: {
    button: createMatechDefaultButtonPalette(matechDefaultGlobalPalette),
  },
};
