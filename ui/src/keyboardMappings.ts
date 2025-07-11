// Key codes and modifiers correspond to definitions in the
// [Linux USB HID gadget driver](https://www.kernel.org/doc/Documentation/usb/gadget_hid.txt)
// [Section 10. Keyboard/Keypad Page 0x07](https://usb.org/sites/default/files/hut1_21.pdf)
export const keys = {
  ArrowDown: 0x51,
  ArrowLeft: 0x50,
  ArrowRight: 0x4f,
  ArrowUp: 0x52,
  Backquote: 0x35,    // aka Grave
  Backslash: 0x31,
  Backspace: 0x2a,
  BracketLeft: 0x2f,  // aka LeftBrace
  BracketRight: 0x30, // aka RightBrace
  CapsLock: 0x39,
  Comma: 0x36,
  Compose: 0x65,
  ContextMenu: 0,
  Delete: 0x4c,
  Digit0: 0x27,
  Digit1: 0x1e,
  Digit2: 0x1f,
  Digit3: 0x20,
  Digit4: 0x21,
  Digit5: 0x22,
  Digit6: 0x23,
  Digit7: 0x24,
  Digit8: 0x25,
  Digit9: 0x26,
  End: 0x4d,
  Enter: 0x28,
  Equal: 0x2e,
  Escape: 0x29,
  F1: 0x3a,
  F2: 0x3b,
  F3: 0x3c,
  F4: 0x3d,
  F5: 0x3e,
  F6: 0x3f,
  F7: 0x40,
  F8: 0x41,
  F9: 0x42,
  F10: 0x43,
  F11: 0x44,
  F12: 0x45,
  F14: 0x69,
  F15: 0x6a,
  F16: 0x6b,
  F17: 0x6c,
  F18: 0x6d,
  F19: 0x6e,
  F20: 0x6f,
  F21: 0x70,
  F22: 0x71,
  F23: 0x72,
  F24: 0x73,
  Home: 0x4a,
  HashTilde: 0x32,  // non-US # and ~
  Insert: 0x49,
  IntlBackslash: 0x64, // non-US \ and |
  KeyA: 0x04,
  KeyB: 0x05,
  KeyC: 0x06,
  KeyD: 0x07,
  KeyE: 0x08,
  KeyF: 0x09,
  KeyG: 0x0a,
  KeyH: 0x0b,
  KeyI: 0x0c,
  KeyJ: 0x0d,
  KeyK: 0x0e,
  KeyL: 0x0f,
  KeyM: 0x10,
  KeyN: 0x11,
  KeyO: 0x12,
  KeyP: 0x13,
  KeyQ: 0x14,
  KeyR: 0x15,
  KeyS: 0x16,
  KeyT: 0x17,
  KeyU: 0x18,
  KeyV: 0x19,
  KeyW: 0x1a,
  KeyX: 0x1b,
  KeyY: 0x1c,
  KeyZ: 0x1d,
  KeypadExclamation: 0xcf,
  Minus: 0x2d,
  None: 0x00,
  NumLock: 0x53,  // and Clear
  Numpad0: 0x62,  // and Insert
  Numpad1: 0x59,  // and End
  Numpad2: 0x5a,  // and Down Arrow
  Numpad3: 0x5b,  // and Page Down
  Numpad4: 0x5c,  // and Left Arrow
  Numpad5: 0x5d,
  Numpad6: 0x5e,  // and Right Arrow
  Numpad7: 0x5f,  // and Home
  Numpad8: 0x60,  // and Up Arrow
  Numpad9: 0x61,  // and Page Up
  NumpadAdd: 0x57,
  NumpadComma: 0x85,
  NumpadDecimal: 0x63,
  NumpadDivide: 0x54,
  NumpadEnter: 0x58,
  NumpadEqual: 0x67,
  NumpadLeftParen: 0xb6,
  NumpadMultiply: 0x55,
  NumpadRightParen: 0xb7,
  NumpadSubtract: 0x56,
  PageDown: 0x4e,
  PageUp: 0x4b,
  Period: 0x37,
  PrintScreen: 0x46,
  Pause: 0x48,
  Power: 0x66,
  Quote: 0x34, // aka Single Quote or Apostrophe
  ScrollLock: 0x47,
  Semicolon: 0x33,
  Slash: 0x38,
  Space: 0x2c,
  SystemRequest: 0x9a,
  Tab: 0x2b,
} as Record<string, number>;

export const modifiers = {
  ControlLeft: 0x01,
  ControlRight: 0x10,
  ShiftLeft: 0x02,
  ShiftRight: 0x20,
  AltLeft: 0x04,
  AltRight: 0x40,
  MetaLeft: 0x08,
  MetaRight: 0x80,
} as Record<string, number>;

export const modifierDisplayMap: Record<string, string> = {
  ControlLeft: "Left Ctrl",
  ControlRight: "Right Ctrl",
  ShiftLeft: "Left Shift",
  ShiftRight: "Right Shift",
  AltLeft: "Left Alt",
  AltRight: "Right Alt",
  MetaLeft: "Left Meta",
  MetaRight: "Right Meta",
} as Record<string, string>;

export const keyDisplayMap: Record<string, string> = {
  CtrlAltDelete: "Ctrl + Alt + Delete",
  AltMetaEscape: "Alt + Meta + Escape",
  CtrlAltBackspace: "Ctrl + Alt + Backspace",
  Escape: "esc",
  Tab: "tab",
  Backspace: "backspace",
  "(Backspace)": "backspace",
  Enter: "enter",
  CapsLock: "caps lock",
  ShiftLeft: "shift",
  ShiftRight: "shift",
  ControlLeft: "ctrl",
  AltLeft: "alt",
  AltRight: "alt",
  MetaLeft: "meta",
  MetaRight: "meta",
  Space: " ",
  Insert: "insert",
  Home: "home",
  PageUp: "page up",
  Delete: "delete",
  End: "end",
  PageDown: "page down",
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
  NumpadEqual: "Num =", NumpadEnter: "Num Enter",
  NumLock: "Num Lock",

  // Modals
  PrintScreen: "prt sc", ScrollLock: "scr lk", Pause: "pause",
  "(PrintScreen)": "sys rq", "(Pause)": "break",
  SystemRequest: "sys rq", Break: "break"
};
