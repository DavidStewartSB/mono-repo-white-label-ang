import type { ColorsBtn, PaletteTone, ButtonColorTokens, ButtonVariant } from './button.types';

/**
 * Paletas (exemplo “apple-like”: mais sóbrio)
 * Você pode ajustar valores depois conforme sua identidade visual.
 */
const PALETTES: Record<Exclude<ColorsBtn, 'primary'>, Record<PaletteTone, string>> = {
  orange: {
    100: '#FFF3E6',
    200: '#FFE2C6',
    300: '#FFC48B',
    400: '#FFA24D',
    500: '#FF7A1A',
    600: '#E85F00',
    700: '#B84700',
  },
  red: {
    100: '#FFE9EA',
    200: '#FFCDCF',
    300: '#FF9CA1',
    400: '#FF6670',
    500: '#FF3B30',
    600: '#E02A20',
    700: '#B01F18',
  },
  green: {
    100: '#E9FBF2',
    200: '#CFF6E2',
    300: '#97EDC6',
    400: '#4DE2A3',
    500: '#19C37D',
    600: '#0EA565',
    700: '#0B7D4E',
  },
  blue: {
    100: '#E9F2FF',
    200: '#CFE2FF',
    300: '#9BC4FF',
    400: '#5AA2FF',
    500: '#2F80FF',
    600: '#1F63D6',
    700: '#174AA3',
  },
  purple: {
    100: '#F1ECFF',
    200: '#DED3FF',
    300: '#C0ABFF',
    400: '#9B86FF',
    500: '#7A5CFF',
    600: '#5B3FE0',
    700: '#432FB0',
  },
  slate: {
    100: '#F3F5F8',
    200: '#E7EBF1',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
  },
};

function getFromPalette(color: Exclude<ColorsBtn, 'primary'>, tone: PaletteTone) {
  return PALETTES[color][tone];
}

/**
 * Gera os tokens CSS do botão baseado em:
 * - variant (primary/ghost/soft)
 * - color ("primary" usa brandPrimary via CSS var)
 * - tone (100/200/...)
 *
 * Observação: "primary" aqui significa "cor do brand", não o variant.
 */
export function resolveButtonTokens(args: {
  variant: ButtonVariant;
  color: ColorsBtn;
  tone: PaletteTone;
}): ButtonColorTokens {
  const { variant, color, tone } = args;

  // base (cor principal do botão)
  const base = color === 'primary'
    ? `var(--btn-brand, var(--accent, #2F80FF))`
    : getFromPalette(color, tone);

  // Para hover, escolhe um tom “um passo” mais escuro
  const hoverTone = ((): PaletteTone => {
    const order: PaletteTone[] = [100, 200, 300, 400, 500, 600, 700];
    const idx = Math.max(0, order.indexOf(tone));
    return order[Math.min(order.length - 1, idx + 2)];
  })();

  const hoverBase = color === 'primary'
    ? `color-mix(in srgb, var(--btn-brand, var(--accent, #2F80FF)) 85%, black)`
    : getFromPalette(color as Exclude<ColorsBtn, 'primary'>, hoverTone);

  // tokens por variant
  if (variant === 'ghost') {
    return {
      bg: 'transparent',
      fg: base,
      bd: `color-mix(in srgb, ${base} 34%, transparent)`,
      bgHover: `color-mix(in srgb, ${base} 10%, transparent)`,
      fgHover: hoverBase,
      bdHover: `color-mix(in srgb, ${base} 48%, transparent)`,
    };
  }

  if (variant === 'soft') {
    return {
      bg: `color-mix(in srgb, ${base} 14%, transparent)`,
      fg: `color-mix(in srgb, ${base} 90%, black)`,
      bd: `color-mix(in srgb, ${base} 22%, transparent)`,
      bgHover: `color-mix(in srgb, ${base} 18%, transparent)`,
      fgHover: `color-mix(in srgb, ${hoverBase} 90%, black)`,
      bdHover: `color-mix(in srgb, ${base} 32%, transparent)`,
    };
  }

  // primary (default)
  return {
    bg: base,
    fg: 'white',
    bd: `color-mix(in srgb, ${base} 55%, transparent)`,
    bgHover: hoverBase,
    fgHover: 'white',
    bdHover: `color-mix(in srgb, ${hoverBase} 55%, transparent)`,
  };
}