import { KeyCombo } from "../keyboardLayouts"

export const name = "Polski (Programista)";

const keyDiaresis = { key: "Plus", shift: true } // Diaresis (not umlaut!), two dots placed above a vowel to indicate each vowel should be pronounce
const keyTylda = { key: "Backquote", altRight: true  } // Tilde mark ~ placed above the letter
const keyOgonek = { key: ""} // Ogonek mark ˛ placed below the letter on the right side
const keyCedilla = { key: "OEM_2", altRight: true } // Cedilla mark ¸ placed below the letter in the center
const keyDoubleAcute = { key: "˝" } // Double acute mark ˝, placed above the letter in the center
const keyGrave = { key: "BracketRight" } // accent grave mark ` placed above the letter
const keyHacek = { key: "", }
const keyDotAbove = { key: "", }  // Dot above, single 

const keyAcute = { key: "Quote" } // accent aigu (acute accent), mark ´ placed above the letter
const keyHat = { key: "BracketRight", shift: true } // accent circonflexe (accent hat), mark ^ placed above the letter


export const chars = {
  A: { key: "KeyA", shift: true },
  "Ą": { key: "KeyA", shift: true, ctrl: true, alt: true },
   a: { key: "KeyA" },
  "ą": { key: "KeyA", ctrl: true, alt: true },

  B: { key: "KeyB", shift: true },
  C: { key: "KeyC", shift: true },
  "Č": { key: "KeyC", shift: true, accentKey: keyHacek },
  "Ç": { key: "KeyC", shift: true, accentKey: keyCedilla },

  D: { key: "KeyD", shift: true },
  "Ď": { key: "KeyD", shift: true, accentKey: keyHacek },

  E: { key: "KeyE", shift: true },
  "Ë": { key: "KeyE", shift: true, accentKey: keyDiaresis },
  "Ę": { key: "KeyE", shift: true, ctrl: true, alt: true, accentKey: keyOgonek },
  e: { key: "KeyE" },
  "ę": { key: "KeyE", ctrl: true, meta: true, accentKey: keyOgonek },

  O: { key: "KeyO", shift: true },
  "Ó": { key: "KeyO", shift: true, ctrl: true, alt: true },
  o: { key: "KeyO" },
  "ó": { key: "KeyO", ctrl: true, alt: true },

  S: { key: "KeyS", shift: true },
  s: { key: "KeyS" },
  "Š": { key: "KeyS", shift: true, accentKey: keyHacek },
  "Ş": { key: "KeyS", shift: true, accentKey: keyCedilla },

  "Ä": { key: "KeyA", shift: true, accentKey: keyDiaresis },
  "Ě": { key: "KeyE", shift: true, accentKey: keyHacek },
  "É": { key: "KeyE", shift: true, accentKey: keyAcute },
  "Ê": { key: "KeyE", shift: true, accentKey: keyHat },
  "È": { key: "KeyE", shift: true, accentKey: keyGrave },
  "Ẽ": { key: "KeyE", shift: true, accentKey: keyTylda },
  "ë": { key: "KeyE", accentKey: keyDiaresis },
  "ě": { key: "KeyE", accentKey: keyHacek },

  F: { key: "KeyF", shift: true },
  G: { key: "KeyG", shift: true },
  H: { key: "KeyH", shift: true },
  I: { key: "KeyI", shift: true },
  "Ï": { key: "KeyI", shift: true, accentKey: keyDiaresis },
  "Í": { key: "KeyI", shift: true, accentKey: keyAcute },
  "Î": { key: "KeyI", shift: true, accentKey: keyHat },
  "Ì": { key: "KeyI", shift: true, accentKey: keyGrave },
  "Ĩ": { key: "KeyI", shift: true, accentKey: keyTylda },
  J: { key: "KeyJ", shift: true },
  K: { key: "KeyK", shift: true },
  L: { key: "KeyL", shift: true },
  M: { key: "KeyM", shift: true },
  N: { key: "KeyN", shift: true },
  "Ň": { key: "KeyN", shift: true, accentKey: keyHacek },

  "Á": { key: "KeyA", shift: true, accentKey: keyAcute },
  "Â": { key: "KeyA", shift: true, accentKey: keyHat },
  "À": { key: "KeyA", shift: true, accentKey: keyGrave },
  "Ã": { key: "KeyA", shift: true, accentKey: keyTylda },
  "Ö": { key: "KeyO", shift: true, accentKey: keyDiaresis },
  "Ő": { key: "KeyO", shift: true, accentKey: keyDoubleAcute },
  "Ó": { key: "KeyO", shift: true, accentKey: keyAcute },
  "Ô": { key: "KeyO", shift: true, accentKey: keyHat },
  "Ò": { key: "KeyO", shift: true, accentKey: keyGrave },
  "Õ": { key: "KeyO", shift: true, accentKey: keyTylda },
  P: { key: "KeyP", shift: true },
  Q: { key: "KeyQ", shift: true },
  R: { key: "KeyR", shift: true },
  "Ř": { key: "KeyR", shift: true, accentKey: keyHacek },


  T: { key: "KeyT", shift: true },
  "Ť": { key: "KeyT", shift: true, accentKey: keyHacek },
  "Ţ": { key: "KeyT", shift: true, accentKey: keyCedilla },

  U: { key: "KeyU", shift: true },
  "Ü": { key: "KeyU", shift: true, accentKey: keyDiaresis },
  "Ű": { key: "KeyU", shift: true, accentKey: keyDoubleAcute },
  "€": { key: "KeyU", ctrl: true, alt: true },


  "Ú": { key: "KeyU", shift: true, accentKey: keyAcute },
  "Û": { key: "KeyU", shift: true, accentKey: keyHat },
  "Ù": { key: "KeyU", shift: true, accentKey: keyGrave },
  "Ũ": { key: "KeyU", shift: true, accentKey: keyTylda },
  V: { key: "KeyV", shift: true },
  W: { key: "KeyW", shift: true },
  X: { key: "KeyX", shift: true },
  Y: { key: "KeyY", shift: true },
  Z: { key: "KeyZ", shift: true },
  "Ž": { key: "KeyZ", shift: true, accentKey: keyHacek },
  "Ź": { key: "KeyZ", shift: true, ctrl: true, meta: true, accentKey: keyAcute },


  "ä": { key: "KeyA", accentKey: keyDiaresis },
  "ą": { key: "KeyA", accentKey: keyOgonek },

  "á": { key: "KeyA", accentKey: keyAcute },
  "â": { key: "KeyA", accentKey: keyHat },
  "à": { key: "KeyA", accentKey: keyGrave },
  "ã": { key: "KeyA", accentKey: keyTylda },
  b: { key: "KeyB" },
  c: { key: "KeyC" },
  "č": { key: "KeyC", accentKey: keyHacek },
  "ç": { key: "KeyC", accentKey: keyCedilla },

  d: { key: "KeyD" },
  "ď": { key: "KeyD", accentKey: keyHacek },



  "é": { key: "KeyE", accentKey: keyAcute },
  "ê": { key: "KeyE", accentKey: keyHat },
  "è": { key: "KeyE", accentKey: keyGrave },
  "ẽ": { key: "KeyE", accentKey: keyTylda },
  
  f: { key: "KeyF" },
  g: { key: "KeyG" },
  h: { key: "KeyH" },
  i: { key: "KeyI" },
  "ï": { key: "KeyI", accentKey: keyDiaresis },
  "í": { key: "KeyI", accentKey: keyAcute },
  "î": { key: "KeyI", accentKey: keyHat },
  "ì": { key: "KeyI", accentKey: keyGrave },
  "ĩ": { key: "KeyI", accentKey: keyTylda },
  j: { key: "KeyJ" },
  k: { key: "KeyK" },
  l: { key: "KeyL" },
  m: { key: "KeyM" },
  n: { key: "KeyN" },
  "ň": { key: "KeyR", accentKey: keyHacek },
  o: { key: "KeyO" },
  "ö": { key: "KeyO", accentKey: keyDiaresis },
  "ő": { key: "KeyO", accentKey: keyDoubleAcute },


  "ó": { key: "KeyO", accentKey: keyAcute },
  "ô": { key: "KeyO", accentKey: keyHat },
  "ò": { key: "KeyO", accentKey: keyGrave },
  "õ": { key: "KeyO", accentKey: keyTylda },
  p: { key: "KeyP" },
  q: { key: "KeyQ" },
  r: { key: "KeyR" },
  "ř": { key: "KeyR", accentKey: keyHacek },

  s: { key: "KeyS" },
  "š": { key: "KeyS", accentKey: keyHacek },
  "ş": { key: "KeyS", accentKey: keyCedilla },

  t: { key: "KeyT" },
  "ť": { key: "KeyT", accentKey: keyHacek },
  "ţ": { key: "KeyS", accentKey: keyCedilla },

  u: { key: "KeyU" },
  "ü": { key: "KeyU", accentKey: keyDiaresis },
  "ű": { key: "KeyU", accentKey: keyDoubleAcute },

  "ú": { key: "KeyU", accentKey: keyAcute },
  "û": { key: "KeyU", accentKey: keyHat },
  "ù": { key: "KeyU", accentKey: keyGrave },
  "ũ": { key: "KeyU", accentKey: keyTylda },
  v: { key: "KeyV" },
  w: { key: "KeyW" },
  x: { key: "KeyX" },
  y: { key: "KeyY" },
  z: { key: "KeyZ" },
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
  "ç": { key: "Backslash" },
  "Ç": { key: "Backslash", shift: true },
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
