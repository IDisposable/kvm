import { KeyCombo } from "../keyboardLayouts"

export const name = "English (US)";

// dead keys
const keyAcute = { key: "Quote", control: true, menu: true, mark: "´" } // acute accent
const keyCedilla = { key: ".", shift: true, alt: true, mark: "¸" } // cedilla accent
const keyComma = { key: "BracketRight", shift: true, altRight: true, mark: "," } // comma accent
const keyDiaeresis = { key: "Quote", shift: true, control: true, menu: true, mark: "¨" } // diaeresis accent
const keyDegree = { key: "Semicolon", shift: true, control: true, menu: true, mark: "°" } // degree accent

export const chars = {
  A: { key: "KeyA", shift: true },
  B: { key: "KeyB", shift: true },
  C: { key: "KeyC", shift: true },
  D: { key: "KeyD", shift: true },
  E: { key: "KeyE", shift: true },
  F: { key: "KeyF", shift: true },
  G: { key: "KeyG", shift: true },
  H: { key: "KeyH", shift: true },
  I: { key: "KeyI", shift: true },
  J: { key: "KeyJ", shift: true },
  K: { key: "KeyK", shift: true },
  L: { key: "KeyL", shift: true },
  M: { key: "KeyM", shift: true },
  N: { key: "KeyN", shift: true },
  O: { key: "KeyO", shift: true },
  P: { key: "KeyP", shift: true },
  Q: { key: "KeyQ", shift: true },
  R: { key: "KeyR", shift: true },
  S: { key: "KeyS", shift: true },
  T: { key: "KeyT", shift: true },
  U: { key: "KeyU", shift: true },
  V: { key: "KeyV", shift: true },
  W: { key: "KeyW", shift: true },
  X: { key: "KeyX", shift: true },
  Y: { key: "KeyY", shift: true },
  Z: { key: "KeyZ", shift: true },
  a: { key: "KeyA" },
  b: { key: "KeyB" },
  c: { key: "KeyC" },
  d: { key: "KeyD" },
  e: { key: "KeyE" },
  f: { key: "KeyF" },
  g: { key: "KeyG" },
  h: { key: "KeyH" },
  i: { key: "KeyI" },
  j: { key: "KeyJ" },
  k: { key: "KeyK" },
  l: { key: "KeyL" },
  m: { key: "KeyM" },
  n: { key: "KeyN" },
  o: { key: "KeyO" },
  p: { key: "KeyP" },
  q: { key: "KeyQ" },
  r: { key: "KeyR" },
  s: { key: "KeyS" },
  t: { key: "KeyT" },
  u: { key: "KeyU" },
  v: { key: "KeyV" },
  w: { key: "KeyW" },
  x: { key: "KeyX" },
  y: { key: "KeyY" },
  z: { key: "KeyZ" },
  1: { key: "Digit1" },
  "!": { key: "Digit1", shift: true },
  2: { key: "Digit2" },
  "@": { key: "Digit2", shift: true },
  3: { key: "Digit3" },
  "#": { key: "Digit3", shift: true },
  4: { key: "Digit4" },
  $: { key: "Digit4", shift: true },
  "%": { key: "Digit5", shift: true },
  5: { key: "Digit5" },
  "^": { key: "Digit6", shift: true },
  6: { key: "Digit6" },
  "&": { key: "Digit7", shift: true },
  7: { key: "Digit7" },
  "*": { key: "Digit8", shift: true },
  8: { key: "Digit8" },
  "(": { key: "Digit9", shift: true },
  9: { key: "Digit9" },
  ")": { key: "Digit0", shift: true },
  0: { key: "Digit0" },
  "-": { key: "Minus" },
  _: { key: "Minus", shift: true },
  "=": { key: "Equal" },
  "+": { key: "Equal", shift: true },
  "'": { key: "Quote" },
  '"': { key: "Quote", shift: true },
  ",": { key: "Comma" },
  "<": { key: "Comma", shift: true },
  "/": { key: "Slash" },
  "?": { key: "Slash", shift: true },
  ".": { key: "Period" },
  ">": { key: "Period", shift: true },
  ";": { key: "Semicolon" },
  ":": { key: "Semicolon", shift: true },
  "¶": { key: "Semicolon", altRight: true }, // pilcrow sign 
  "[": { key: "BracketLeft" },
  "{": { key: "BracketLeft", shift: true },
  "«": { key: "BracketLeft", altRight: true }, // double left quote sign 
  "]": { key: "BracketRight" },
  "}": { key: "BracketRight", shift: true },
  "»": { key: "BracketRight", altRight: true }, // double right quote sign 
  "\\": { key: "Backslash" },
  "|": { key: "Backslash", shift: true },
  "¬": { key: "Backslash", altRight: true }, // not sign
  "`": { key: "Backquote" },
  "~": { key: "Backquote", shift: true },
  "§": { key: "IntlBackslash" },
  "±": { key: "IntlBackslash", shift: true },
  " ": { key: "Space", shift: false },
  "\n": { key: "Enter", shift: false },

  Enter: { key: "Enter", shift: false },
  Escape: { key: "Escape" },
  Tab: { key: "Tab", shift: false },
  PrintScreen: { key: "Prt Sc", shift: false },
  SystemRequest: { key: "Prt Sc", shift: true },
  ScrollLock: { key: "ScrollLock", shift: false },
  Pause: { key: "Pause", shift: false },
  Break: { key: "Pause", shift: true },
  Insert: { key: "Insert", shift: false },
  Delete: { key: "Delete", shift: false },
} as Record<string, KeyCombo>

export const modifierDisplayMap: Record<string, string> = {
  AltLeft: "Left Alt",
  AltRight: "Right Alt",
  ControlLeft: "Left Ctrl",
  ControlRight: "Right Ctrl",
  MetaLeft: "Left Meta",
  MetaRight: "Right Meta",
  ShiftLeft: "Left Shift",
  ShiftRight: "Right Shift",
} as Record<string, string>;

export const keyDisplayMap: Record<string, string> = {
  CtrlAltDelete: "Ctrl + Alt + Delete",
  AltMetaEscape: "Alt + Meta + Escape",
  CtrlAltBackspace: "Ctrl + Alt + Backspace",
  Escape: "Esc",
  Tab: "Tab",
  Backspace: "Backspace",
  "(Backspace)": "Backspace",
  Enter: "Enter",
  CapsLock: "Caps Lock",
  ShiftLeft: "Shift",
  ShiftRight: "Shift",
  ControlLeft: "Ctrl",
  AltLeft: "Alt",
  AltRight: "Alt",
  AltGraph: "AltGr",
  MetaLeft: "Meta",
  MetaRight: "Meta",
  Space: " ",
  Insert: "Insert",
  Home: "Home",
  PageUp: "PgUp",
  Delete: "Delete",
  End: "End",
  PageDown: "PgDn",
  Clear: "Clear",
  ArrowLeft: "←",
  ArrowRight: "→",
  ArrowUp: "↑",
  ArrowDown: "↓",

  // Letters
  KeyA: "a", KeyB: "b", KeyC: "c", KeyD: "d", KeyE: "e",
  KeyF: "f", KeyG: "g", KeyH: "h", KeyI: "i", KeyJ: "j",
  KeyK: "k", KeyL: "l", KeyM: "m", KeyN: "n", KeyO: "o",
  KeyP: "p", KeyQ: "q", KeyR: "r", KeyS: "s", KeyT: "t",
  KeyU: "u", KeyV: "v", KeyW: "w", KeyX: "x", KeyY: "y",
  KeyZ: "z",

  // Capital letters
  "(KeyA)": "A", "(KeyB)": "B", "(KeyC)": "C", "(KeyD)": "D", "(KeyE)": "E",
  "(KeyF)": "F", "(KeyG)": "G", "(KeyH)": "H", "(KeyI)": "I", "(KeyJ)": "J",
  "(KeyK)": "K", "(KeyL)": "L", "(KeyM)": "M", "(KeyN)": "N", "(KeyO)": "O",
  "(KeyP)": "P", "(KeyQ)": "Q", "(KeyR)": "R", "(KeyS)": "S", "(KeyT)": "T",
  "(KeyU)": "U", "(KeyV)": "V", "(KeyW)": "W", "(KeyX)": "X", "(KeyY)": "Y",
  "(KeyZ)": "Z",

  // Numbers
  Digit1: "1", Digit2: "2", Digit3: "3", Digit4: "4", Digit5: "5",
  Digit6: "6", Digit7: "7", Digit8: "8", Digit9: "9", Digit0: "0",

  // Shifted Numbers
  "(Digit1)": "!", "(Digit2)": "@", "(Digit3)": "#", "(Digit4)": "$", "(Digit5)": "%",
  "(Digit6)": "^", "(Digit7)": "&", "(Digit8)": "*", "(Digit9)": "(", "(Digit0)": ")",

  // Symbols
  Minus: "-",
  "(Minus)": "_",
  Equal: "=",
  "(Equal)": "+",
  BracketLeft: "[",
  "(BracketLeft)": "{",
  BracketRight: "]",
  "(BracketRight)": "}",
  Backslash: "\\",
  "(Backslash)": "|",
  Semicolon: ";",
  "(Semicolon)": ":",
  Quote: "'",
  "(Quote)": "\"",
  Comma: ",",
  "(Comma)": "<",
  Period: ".",
  "(Period)": ">",
  Slash: "/",
  "(Slash)": "?",
  Backquote: "`",
  "(Backquote)": "~",
  IntlBackslash: "\\",

  // Function keys
  F1: "F1", F2: "F2", F3: "F3", F4: "F4",
  F5: "F5", F6: "F6", F7: "F7", F8: "F8",
  F9: "F9", F10: "F10", F11: "F11", F12: "F12",

  // Numpad
  Numpad0: "Num 0", Numpad1: "Num 1", Numpad2: "Num 2",
  Numpad3: "Num 3", Numpad4: "Num 4", Numpad5: "Num 5",
  Numpad6: "Num 6", Numpad7: "Num 7", Numpad8: "Num 8",
  Numpad9: "Num 9", NumpadAdd: "Num +", NumpadSubtract: "Num -",
  NumpadMultiply: "Num *", NumpadDivide: "Num /", NumpadDecimal: "Num .",
  NumpadEqual: "Num =", NumpadEnter: "Num Enter", NumpadInsert: "Ins",
  NumpadDelete: "Del", NumLock: "Num Lock",

  // Modals
  PrintScreen: "PrtSc", ScrollLock: "Scroll Lock", Pause: "Pause",
  "(PrintScreen)": "SysRq", "(Pause)": "Break",
  SystemRequest: "SysRq", Break: "Break"
};

export const virtualKeyboard = {
  main: {
    default: [
      "CtrlAltDelete AltMetaEscape CtrlAltBackspace",
      "Escape F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12",
      "Backquote Digit1 Digit2 Digit3 Digit4 Digit5 Digit6 Digit7 Digit8 Digit9 Digit0 Minus Equal Backspace",
      "Tab KeyQ KeyW KeyE KeyR KeyT KeyY KeyU KeyI KeyO KeyP BracketLeft BracketRight Backslash",
      "CapsLock KeyA KeyS KeyD KeyF KeyG KeyH KeyJ KeyK KeyL Semicolon Quote Enter",
      "ShiftLeft KeyZ KeyX KeyC KeyV KeyB KeyN KeyM Comma Period Slash ShiftRight",
      "ControlLeft MetaLeft AltLeft Space AltGr MetaRight Menu ControlRight",
    ],
    shift: [
      "CtrlAltDelete AltMetaEscape CtrlAltBackspace",
      "Escape F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12",
      "(Backquote) (Digit1) (Digit2) (Digit3) (Digit4) (Digit5) (Digit6) (Digit7) (Digit8) (Digit9) (Digit0) (Minus) (Equal) (Backspace)",
      "Tab (KeyQ) (KeyW) (KeyE) (KeyR) (KeyT) (KeyY) (KeyU) (KeyI) (KeyO) (KeyP) (BracketLeft) (BracketRight) (Backslash)",
      "CapsLock (KeyA) (KeyS) (KeyD) (KeyF) (KeyG) (KeyH) (KeyJ) (KeyK) (KeyL) (Semicolon) (Quote) Enter",
      "ShiftLeft (KeyZ) (KeyX) (KeyC) (KeyV) (KeyB) (KeyN) (KeyM) (Comma) (Period) (Slash) ShiftRight",
      "ControlLeft MetaLeft AltLeft Space AltGr MetaRight Menu ControlRight",
    ]
  },
  controlArrows: {
    default: [
      "PrintScreen ScrollLock Pause", 
      "Insert Home PageUp", "Delete End PageDown"
    ],
    shift: [
      "(PrintScreen) ScrollLock (Pause)", "Insert Home PageUp", 
      "Delete End PageDown"
    ],
  },

  simpleArrows: {
    default: ["ArrowUp", "ArrowLeft ArrowDown ArrowRight"],
  },
  numpad: {
    numlocked: [
      "NumLock NumpadDivide NumpadMultiply NumpadSubtract",
      "Numpad7 Numpad8 Numpad9 NumpadAdd",
      "Numpad4 Numpad5 Numpad6",
      "Numpad1 Numpad2 Numpad3 NumpadEnter",
      "Numpad0 NumpadDecimal",
    ],
    default: [
      "NumLock NumpadDivide NumpadMultiply NumpadSubtract",
      "Home ArrowUp PageUp NumpadAdd",
      "ArrowLeft Clear ArrowRight",
      "End ArrowDown PageDown NumpadEnter",
      "NumpadInsert NumpadDelete",
    ],
  }
}

export default { name, chars, keyDisplayMap, modifierDisplayMap, virtualKeyboard }