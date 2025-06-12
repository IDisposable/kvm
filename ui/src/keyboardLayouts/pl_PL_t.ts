import { KeyboardLayout, KeyCombo } from "../keyboardLayouts"

const name = "Polski (Programista)";

const keyAcute = { key: "Quote" } // accent aigu (acute accent), mark ´ placed above the letter
const keyCedilla = { key: "OEM_2", altRight: true } // Cedilla mark ¸ placed below the letter in the center
const keyDiaresis = { key: "Plus", shift: true } // Diaresis (not umlaut!), two dots placed above a vowel to indicate each vowel should be pronounce
const keyDotAbove = { key: "", }  // Dot above, single  TODO!
const keyDoubleAcute = { key: "˝" } // Double acute mark ˝, placed above the letter in the center
const keyGrave = { key: "BracketRight" } // accent grave mark ` placed above the letter
const keyHacek = { key: "", } // TODO!
const keyHat = { key: "BracketRight", shift: true } // accent circonflexe (accent hat), mark ^ placed above the letter
const keyOgonek = { key: ""} // Ogonek mark ˛ placed below the letter on the right side
const keyTylda = { key: "Backquote", altRight: true  } // Tilde mark ~ placed above the letter

const chars = {
  A: { key: "KeyA", shift: true },
  "Ä": { key: "KeyA", shift: true, accentKey: keyDiaresis },
  "Ą": { key: "KeyA", shift: true, ctrl: true, alt: true },
  "Á": { key: "KeyA", shift: true, accentKey: keyAcute },
  "Â": { key: "KeyA", shift: true, accentKey: keyHat },
  "À": { key: "KeyA", shift: true, accentKey: keyGrave },
  "Ã": { key: "KeyA", shift: true, accentKey: keyTylda },
   a: { key: "KeyA" },
  "ä": { key: "KeyA", accentKey: keyDiaresis },
  "ą": { key: "KeyA", accentKey: keyOgonek }, // "ą": { key: "KeyA", ctrl: true, alt: true },
  "á": { key: "KeyA", accentKey: keyAcute },
  "â": { key: "KeyA", accentKey: keyHat },
  "à": { key: "KeyA", accentKey: keyGrave },
  "ã": { key: "KeyA", accentKey: keyTylda },

  B: { key: "KeyB", shift: true },
  b: { key: "KeyB" },

  C: { key: "KeyC", shift: true },
  "Č": { key: "KeyC", shift: true, accentKey: keyHacek },
  "Ç": { key: "KeyC", shift: true, accentKey: keyCedilla }, //  "Ç": { key: "Backslash", shift: true },
  c: { key: "KeyC" },
  "č": { key: "KeyC", accentKey: keyHacek },
  "ç": { key: "KeyC", accentKey: keyCedilla }, //  "ç": { key: "Backslash" },

  D: { key: "KeyD", shift: true },
  "Ď": { key: "KeyD", shift: true, accentKey: keyHacek },
  d: { key: "KeyD" },
  "ď": { key: "KeyD", accentKey: keyHacek },

  E: { key: "KeyE", shift: true },
  "Ë": { key: "KeyE", shift: true, accentKey: keyDiaresis },
  "Ę": { key: "KeyE", shift: true, ctrl: true, alt: true, accentKey: keyOgonek },
  "Ě": { key: "KeyE", shift: true, accentKey: keyHacek },
  "É": { key: "KeyE", shift: true, accentKey: keyAcute },
  "Ê": { key: "KeyE", shift: true, accentKey: keyHat },
  "È": { key: "KeyE", shift: true, accentKey: keyGrave },
  "Ẽ": { key: "KeyE", shift: true, accentKey: keyTylda },
  e: { key: "KeyE" },
  "ę": { key: "KeyE", ctrl: true, meta: true, accentKey: keyOgonek },
  "ë": { key: "KeyE", accentKey: keyDiaresis },
  "ě": { key: "KeyE", accentKey: keyHacek },
  "é": { key: "KeyE", accentKey: keyAcute },
  "ê": { key: "KeyE", accentKey: keyHat },
  "è": { key: "KeyE", accentKey: keyGrave },
  "ẽ": { key: "KeyE", accentKey: keyTylda },

  F: { key: "KeyF", shift: true },
  f: { key: "KeyF" },

  G: { key: "KeyG", shift: true },
  g: { key: "KeyG" },

  H: { key: "KeyH", shift: true },
  h: { key: "KeyH" },

  I: { key: "KeyI", shift: true },
  "Ï": { key: "KeyI", shift: true, accentKey: keyDiaresis },
  "Í": { key: "KeyI", shift: true, accentKey: keyAcute },
  "Î": { key: "KeyI", shift: true, accentKey: keyHat },
  "Ì": { key: "KeyI", shift: true, accentKey: keyGrave },
  "Ĩ": { key: "KeyI", shift: true, accentKey: keyTylda },
  i: { key: "KeyI" },
  "ï": { key: "KeyI", accentKey: keyDiaresis },
  "í": { key: "KeyI", accentKey: keyAcute },
  "î": { key: "KeyI", accentKey: keyHat },
  "ì": { key: "KeyI", accentKey: keyGrave },
  "ĩ": { key: "KeyI", accentKey: keyTylda },


  J: { key: "KeyJ", shift: true },
  j: { key: "KeyJ" },

  K: { key: "KeyK", shift: true },
  k: { key: "KeyK" },

  L: { key: "KeyL", shift: true },
  l: { key: "KeyL" },

  M: { key: "KeyM", shift: true },
  m: { key: "KeyM" },

  N: { key: "KeyN", shift: true },
  "Ň": { key: "KeyN", shift: true, accentKey: keyHacek },
  n: { key: "KeyN" },
  "ň": { key: "KeyR", accentKey: keyHacek },

  O: { key: "KeyO", shift: true },
  "Ö": { key: "KeyO", shift: true, accentKey: keyDiaresis },
  "Ő": { key: "KeyO", shift: true, accentKey: keyDoubleAcute },
  "Ó": { key: "KeyO", shift: true, accentKey: keyAcute }, //   "Ó": { key: "KeyO", shift: true, ctrl: true, alt: true },
  "Ô": { key: "KeyO", shift: true, accentKey: keyHat },
  "Ò": { key: "KeyO", shift: true, accentKey: keyGrave },
  "Õ": { key: "KeyO", shift: true, accentKey: keyTylda },
  o: { key: "KeyO" },
  "ó": { key: "KeyO", ctrl: true, alt: true, accentKey: keyAcute  },
  "ö": { key: "KeyO", accentKey: keyDiaresis },
  "ő": { key: "KeyO", accentKey: keyDoubleAcute },
  "ô": { key: "KeyO", accentKey: keyHat },
  "ò": { key: "KeyO", accentKey: keyGrave },
  "õ": { key: "KeyO", accentKey: keyTylda },

  P: { key: "KeyP", shift: true },
  p: { key: "KeyP" },

  Q: { key: "KeyQ", shift: true },
  q: { key: "KeyQ" },

  R: { key: "KeyR", shift: true },
  "Ř": { key: "KeyR", shift: true, accentKey: keyHacek },
  r: { key: "KeyR" },
  "ř": { key: "KeyR", accentKey: keyHacek },

  S: { key: "KeyS", shift: true },
  "Š": { key: "KeyS", shift: true, accentKey: keyHacek },
  "Ş": { key: "KeyS", shift: true, accentKey: keyCedilla },
  s: { key: "KeyS" },
  "š": { key: "KeyS", accentKey: keyHacek },
  "ş": { key: "KeyS", accentKey: keyCedilla },

  T: { key: "KeyT", shift: true },
  "Ť": { key: "KeyT", shift: true, accentKey: keyHacek },
  "Ţ": { key: "KeyT", shift: true, accentKey: keyCedilla },
  t: { key: "KeyT" },
  "ť": { key: "KeyT", accentKey: keyHacek },
  "ţ": { key: "KeyS", accentKey: keyCedilla },

  U: { key: "KeyU", shift: true },
  "Ü": { key: "KeyU", shift: true, accentKey: keyDiaresis },
  "Ű": { key: "KeyU", shift: true, accentKey: keyDoubleAcute },
  "Ú": { key: "KeyU", shift: true, accentKey: keyAcute },
  "Û": { key: "KeyU", shift: true, accentKey: keyHat },
  "Ù": { key: "KeyU", shift: true, accentKey: keyGrave },
  "Ũ": { key: "KeyU", shift: true, accentKey: keyTylda },
  u: { key: "KeyU" },
  "€": { key: "KeyU", ctrl: true, alt: true },
  "ü": { key: "KeyU", accentKey: keyDiaresis },
  "ű": { key: "KeyU", accentKey: keyDoubleAcute },
  "ú": { key: "KeyU", accentKey: keyAcute },
  "û": { key: "KeyU", accentKey: keyHat },
  "ù": { key: "KeyU", accentKey: keyGrave },
  "ũ": { key: "KeyU", accentKey: keyTylda },

  V: { key: "KeyV", shift: true },
  v: { key: "KeyV" },

  W: { key: "KeyW", shift: true },
  w: { key: "KeyW" },

  X: { key: "KeyX", shift: true },
  x: { key: "KeyX" },

  Y: { key: "KeyY", shift: true },
  y: { key: "KeyY" },

  Z: { key: "KeyZ", shift: true },
  "Ž": { key: "KeyZ", shift: true, accentKey: keyHacek },
  "Ź": { key: "KeyZ", shift: true, ctrl: true, meta: true, accentKey: keyAcute },
  z: { key: "KeyZ" },  W: { key: "KeyW", shift: true },
  "ž": { key: "KeyZ", accentKey: keyHacek },
  "ź": { key: "KeyX",ctrl: true, meta: true, accentKey: keyAcute }, // not a typo, it's on the X key
  "ż": { key: "KeyZ", ctrl: true, meta: true, accentKey: keyDotAbove },

  "º": { key: "Backquote" },
  "ª": { key: "Backquote", shift: true }, 
  "\\": { key: "Backquote", altRight: true }, 
  1: { key: "Digit1" },
  "!": { key: "Digit1", shift: true },
  "|": { key: "Digit1", altRight: true },
  2: { key: "Digit2" },
  "\"": { key: "Digit2", shift: true },
  "@": { key: "Digit2", altRight: true },
  3: { key: "Digit3" },
  "·": { key: "Digit3", shift: true },
  "#": { key: "Digit3", altRight: true },
  4: { key: "Digit4" },
  "$": { key: "Digit4", shift: true },
  5: { key: "Digit5" },
  "%": { key: "Digit5", shift: true },
  6: { key: "Digit6" },
  "&": { key: "Digit6", shift: true },
  "¬": { key: "Digit6", altRight: true },
  7: { key: "Digit7" },
  "/": { key: "Digit7", shift: true },
  8: { key: "Digit8" },
  "(": { key: "Digit8", shift: true },
  9: { key: "Digit9" },
  ")": { key: "Digit9", shift: true },
  0: { key: "Digit0" },
  "=": { key: "Digit0", shift: true },
  "'": { key: "Minus" },
  "?": { key: "Minus", shift: true },
  "¡": { key: "Equal", deadKey: true },
  "¿": { key: "Equal", shift: true },
  "[": { key: "BracketLeft", altRight: true },
  "+": { key: "BracketRight" },
  "*": { key: "BracketRight", shift: true },
  "]": { key: "BracketRight", altRight: true },
  "ñ": { key: "Semicolon" },
  "Ñ": { key: "Semicolon", shift: true },
  "{": { key: "Quote", altRight: true },
  "}": { key: "Backslash", altRight: true },
  ",": { key: "Comma" },
  ";": { key: "Comma", shift: true },
  ".": { key: "Period" },
  ":": { key: "Period", shift: true },
  "-": { key: "Slash" },
  "_": { key: "Slash", shift: true },
  "<": { key: "IntlBackslash" },
  ">": { key: "IntlBackslash", shift: true },
  " ": { key: "Space" },
  "ˇ": { key: "Space", accentKey: keyHacek },
  "\n": { key: "Enter" },
  Enter: { key: "Enter" },
  Tab: { key: "Tab" },
} as Record<string, KeyCombo>;

export const pl_PL_T: KeyboardLayout = {
  isoCode: "pl-PL-t",
  name: name,
  chars: chars
};