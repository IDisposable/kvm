import { KeyboardLayout, KeyCombo } from "../keyboardLayouts"

const name = "Deutsch";

const keyAcute = { key: "Equal" } // accent aigu (acute accent), mark ´ placed above the letter
const keyHat = { key: "Backquote" } // accent circonflexe (accent hat), mark ^ placed above the letter
const keyGrave = { key: "Equal", shift: true } // accent grave, mark ` placed above the letter

const chars = {
  A: { key: "KeyA", shift: true },
  "Á": { key: "KeyA", shift: true, accentKey: keyAcute },
  "Â": { key: "KeyA", shift: true, accentKey: keyHat },
  "À": { key: "KeyA", shift: true, accentKey: keyGrave },
  B: { key: "KeyB", shift: true },
  C: { key: "KeyC", shift: true },
  D: { key: "KeyD", shift: true },
  E: { key: "KeyE", shift: true },
  "É": { key: "KeyE", shift: true, accentKey: keyAcute },
  "Ê": { key: "KeyE", shift: true, accentKey: keyHat },
  "È": { key: "KeyE", shift: true, accentKey: keyGrave },
  F: { key: "KeyF", shift: true },
  G: { key: "KeyG", shift: true },
  H: { key: "KeyH", shift: true },
  I: { key: "KeyI", shift: true },
  "Í": { key: "KeyI", shift: true, accentKey: keyAcute },
  "Î": { key: "KeyI", shift: true, accentKey: keyHat },
  "Ì": { key: "KeyI", shift: true, accentKey: keyGrave },
  J: { key: "KeyJ", shift: true },
  K: { key: "KeyK", shift: true },
  L: { key: "KeyL", shift: true },
  M: { key: "KeyM", shift: true },
  N: { key: "KeyN", shift: true },
  O: { key: "KeyO", shift: true },
  "Ó": { key: "KeyO", shift: true, accentKey: keyAcute },
  "Ô": { key: "KeyO", shift: true, accentKey: keyHat },
  "Ò": { key: "KeyO", shift: true, accentKey: keyGrave },
  P: { key: "KeyP", shift: true },
  Q: { key: "KeyQ", shift: true },
  R: { key: "KeyR", shift: true },
  S: { key: "KeyS", shift: true },
  T: { key: "KeyT", shift: true },
  U: { key: "KeyU", shift: true },
  "Ú": { key: "KeyU", shift: true, accentKey: keyAcute },
  "Û": { key: "KeyU", shift: true, accentKey: keyHat },
  "Ù": { key: "KeyU", shift: true, accentKey: keyGrave },
  V: { key: "KeyV", shift: true },
  W: { key: "KeyW", shift: true },
  X: { key: "KeyX", shift: true },
  Y: { key: "KeyZ", shift: true },
  Z: { key: "KeyY", shift: true },
  a: { key: "KeyA" },
  "á": { key: "KeyA", accentKey: keyAcute },
  "â": { key: "KeyA", accentKey: keyHat },
  "à": { key: "KeyA", accentKey: keyGrave},
  b: { key: "KeyB" },
  c: { key: "KeyC" },
  d: { key: "KeyD" },
  e: { key: "KeyE" },
  "é": { key: "KeyE", accentKey: keyAcute},
  "ê": { key: "KeyE", accentKey: keyHat },
  "è": { key: "KeyE", accentKey: keyGrave },
  "€": { key: "KeyE", altRight: true },
  f: { key: "KeyF" },
  g: { key: "KeyG" },
  h: { key: "KeyH" },
  i: { key: "KeyI" },
  "í": { key: "KeyI", accentKey: keyAcute },
  "î": { key: "KeyI", accentKey: keyHat },
  "ì": { key: "KeyI", accentKey: keyGrave },
  j: { key: "KeyJ" },
  k: { key: "KeyK" },
  l: { key: "KeyL" },
  m: { key: "KeyM" },
  "µ": { key: "KeyM", altRight: true },
  n: { key: "KeyN" },
  o: { key: "KeyO" },
  "ó": { key: "KeyO", accentKey: keyAcute },
  "ô": { key: "KeyO", accentKey: keyHat },
  "ò": { key: "KeyO", accentKey: keyGrave },
  p: { key: "KeyP" },
  q: { key: "KeyQ" },
  "@": { key: "KeyQ", altRight: true },
  r: { key: "KeyR" },
  s: { key: "KeyS" },
  t: { key: "KeyT" },
  u: { key: "KeyU" },
  "ú": { key: "KeyU", accentKey: keyAcute },
  "û": { key: "KeyU", accentKey: keyHat },
  "ù": { key: "KeyU", accentKey: keyGrave },
  v: { key: "KeyV" },
  w: { key: "KeyW" },
  x: { key: "KeyX" },
  y: { key: "KeyZ" },
  z: { key: "KeyY" },
  "°": { key: "Backquote", shift: true },
  "^": { key: "Backquote", deadKey: true },
  1: { key: "Digit1" },
  "!": { key: "Digit1", shift: true },
  2: { key: "Digit2" },
  "\"": { key: "Digit2", shift: true },
  "²": { key: "Digit2", altRight: true },
  3: { key: "Digit3" },
  "§": { key: "Digit3", shift: true },
  "³": { key: "Digit3", altRight: true },
  4: { key: "Digit4" },
  "$": { key: "Digit4", shift: true },
  5: { key: "Digit5" },
  "%": { key: "Digit5", shift: true },
  6: { key: "Digit6" },
  "&": { key: "Digit6", shift: true },
  7: { key: "Digit7" },
  "/": { key: "Digit7", shift: true },
  "{": { key: "Digit7", altRight: true },
  8: { key: "Digit8" },
  "(": { key: "Digit8", shift: true },
  "[": { key: "Digit8", altRight: true },
  9: { key: "Digit9" },
  ")": { key: "Digit9", shift: true },
  "]": { key: "Digit9", altRight: true },
  0: { key: "Digit0" },
  "=": { key: "Digit0", shift: true },
  "}": { key: "Digit0", altRight: true },
  "ß": { key: "Minus" },
  "?": { key: "Minus", shift: true },
  "\\": { key: "Minus", altRight: true },
  "´": { key: "Equal", deadKey: true },
  "`": { key: "Equal", shift: true, deadKey: true },
  "ü": { key: "BracketLeft" },
  "Ü": { key: "BracketLeft", shift: true },
  "+": { key: "BracketRight" },
  "*": { key: "BracketRight", shift: true },
  "~": { key: "BracketRight", altRight: true },
  "ö": { key: "Semicolon" },
  "Ö": { key: "Semicolon", shift: true },
  "ä": { key: "Quote" },
  "Ä": { key: "Quote", shift: true },
  "#": { key: "Backslash" },
  "'": { key: "Backslash", shift: true },
  ",": { key: "Comma" },
  ";": { key: "Comma", shift: true },
  ".": { key: "Period" },
  ":": { key: "Period", shift: true },
  "-": { key: "Slash" },
  "_": { key: "Slash", shift: true },
  "<": { key: "IntlBackslash" },
  ">": { key: "IntlBackslash", shift: true },
  "|": { key: "IntlBackslash", altRight: true },
  " ": { key: "Space" },
  "\n": { key: "Enter" },
  Enter: { key: "Enter" },
  Tab: { key: "Tab" },
} as Record<string, KeyCombo>;

export const de_DE: KeyboardLayout = {
  isoCode: "de-DE",
  name: name,
  chars: chars
};