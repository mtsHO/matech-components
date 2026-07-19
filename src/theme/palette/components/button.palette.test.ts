import { describe, expect, it } from 'vitest';
import { createMatechDefaultButtonPalette, matechDefaultButtonPalette } from './button.palette';
import { matechDefaultGlobalPalette } from '../global.palette';

describe('createMatechDefaultButtonPalette', () => {
  it('builds the default primary, secondary and tertiary variants', () => {
    expect(matechDefaultButtonPalette.primary).toMatchObject({
      background: '#4538A6',
      border: '#4538A6',
      foreground: '#FFFDF5',
    });
    expect(matechDefaultButtonPalette.secondary).toMatchObject({
      background: '#FFFFFF',
      border: '#D8DDF1',
      foreground: '#4538A6',
    });
    expect(matechDefaultButtonPalette.tertiary).toMatchObject({
      background: 'transparent',
      border: 'transparent',
      foreground: '#4538A6',
      hoverBackground: 'rgba(69, 56, 166, 0.08)',
    });
  });

  it('converts 6 digit hex brand colors to rgba for tertiary hover', () => {
    const palette = createMatechDefaultButtonPalette({
      ...matechDefaultGlobalPalette,
      brand: '#112233',
    });

    expect(palette.tertiary.hoverBackground).toBe('rgba(17, 34, 51, 0.08)');
  });

  it('converts 3 digit hex brand colors to rgba for tertiary hover', () => {
    const palette = createMatechDefaultButtonPalette({
      ...matechDefaultGlobalPalette,
      brand: '#abc',
    });

    expect(palette.tertiary.hoverBackground).toBe('rgba(170, 187, 204, 0.08)');
  });

  it('reuses rgb or rgba brand colors when building tertiary hover', () => {
    const palette = createMatechDefaultButtonPalette({
      ...matechDefaultGlobalPalette,
      brand: 'rgba(17, 34, 51, 0.4)',
    });

    expect(palette.tertiary.hoverBackground).toBe('rgba(17, 34, 51, 0.08)');
  });

  it('keeps unsupported brand color formats untouched', () => {
    const palette = createMatechDefaultButtonPalette({
      ...matechDefaultGlobalPalette,
      brand: 'var(--brand-color)',
    });

    expect(palette.tertiary.hoverBackground).toBe('var(--brand-color)');
  });

  it('keeps malformed rgb values untouched', () => {
    const palette = createMatechDefaultButtonPalette({
      ...matechDefaultGlobalPalette,
      brand: 'rgb(foo)',
    });

    expect(palette.tertiary.hoverBackground).toBe('rgb(foo)');
  });
});
