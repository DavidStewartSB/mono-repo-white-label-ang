export type ButtonVariant = 'primary' | 'ghost' | 'soft';
export type ButtonType = 'button' | 'submit' | 'reset';

/** Cores disponíveis no sistema */
export type ColorsBtn =
  | 'primary'
  | 'orange'
  | 'red'
  | 'green'
  | 'blue'
  | 'purple'
  | 'slate';

/** Tons/paleta (você pode expandir) */
export type PaletteTone = 100 | 200 | 300 | 400 | 500 | 600 | 700;

/** Tokens de cor gerados para o botão */
export type ButtonColorTokens = {
  bg: string;     // background
  fg: string;     // foreground/text
  bd: string;     // border
  bgHover: string;
  fgHover: string;
  bdHover: string;
};