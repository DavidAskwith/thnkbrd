// Browser KeyboardEvent.code -> QMK Keycode mapping
// This maps browser keyboard events to QMK keycodes for real-time visualization

const browserToQMK = {
    // Letters A-Z
    "KeyA": "KC_A",
    "KeyB": "KC_B",
    "KeyC": "KC_C",
    "KeyD": "KC_D",
    "KeyE": "KC_E",
    "KeyF": "KC_F",
    "KeyG": "KC_G",
    "KeyH": "KC_H",
    "KeyI": "KC_I",
    "KeyJ": "KC_J",
    "KeyK": "KC_K",
    "KeyL": "KC_L",
    "KeyM": "KC_M",
    "KeyN": "KC_N",
    "KeyO": "KC_O",
    "KeyP": "KC_P",
    "KeyQ": "KC_Q",
    "KeyR": "KC_R",
    "KeyS": "KC_S",
    "KeyT": "KC_T",
    "KeyU": "KC_U",
    "KeyV": "KC_V",
    "KeyW": "KC_W",
    "KeyX": "KC_X",
    "KeyY": "KC_Y",
    "KeyZ": "KC_Z",

    // Numbers 0-9
    "Digit0": "KC_0",
    "Digit1": "KC_1",
    "Digit2": "KC_2",
    "Digit3": "KC_3",
    "Digit4": "KC_4",
    "Digit5": "KC_5",
    "Digit6": "KC_6",
    "Digit7": "KC_7",
    "Digit8": "KC_8",
    "Digit9": "KC_9",

    // Special keys
    "Tab": "KC_TAB",
    "Enter": "KC_ENTER",
    "Space": "KC_SPACE",
    "Backspace": "KC_BSPC",
    "Delete": "KC_DELETE",
    "Escape": "KC_ESCAPE",
    "CapsLock": "KC_CAPS",

    // Modifiers
    "ShiftLeft": "KC_LSFT",
    "ShiftRight": "KC_RSFT",
    "ControlLeft": "KC_LCTL",
    "ControlRight": "KC_RCTL",
    "AltLeft": "KC_LALT",
    "AltRight": "KC_RALT",
    "MetaLeft": "KC_LGUI",
    "MetaRight": "KC_RGUI",

    // Punctuation
    "Semicolon": "KC_SCLN",
    "Quote": "KC_QUOTE",
    "Comma": "KC_COMMA",
    "Period": "KC_DOT",
    "Slash": "KC_SLASH",
    "Backslash": "KC_BSLS",
    "Minus": "KC_MINUS",
    "Equal": "KC_EQUAL",
    "BracketLeft": "KC_LBRC",
    "BracketRight": "KC_RBRC",
    "Backquote": "KC_GRAVE",

    // Navigation
    "ArrowLeft": "KC_LEFT",
    "ArrowRight": "KC_RIGHT",
    "ArrowUp": "KC_UP",
    "ArrowDown": "KC_DOWN",
    "Home": "KC_HOME",
    "End": "KC_END",
    "PageUp": "KC_PGUP",
    "PageDown": "KC_PGDN",
    "Insert": "KC_INSERT",

    // Function keys
    "F1": "KC_F1",
    "F2": "KC_F2",
    "F3": "KC_F3",
    "F4": "KC_F4",
    "F5": "KC_F5",
    "F6": "KC_F6",
    "F7": "KC_F7",
    "F8": "KC_F8",
    "F9": "KC_F9",
    "F10": "KC_F10",
    "F11": "KC_F11",
    "F12": "KC_F12",
    "F13": "KC_F13",
    "F14": "KC_F14",
    "F15": "KC_F15",
    "F16": "KC_F16",
    "F17": "KC_F17",
    "F18": "KC_F18",
    "F19": "KC_F19",
    "F20": "KC_F20",
    "F21": "KC_F21",
    "F22": "KC_F22",
    "F23": "KC_F23",
    "F24": "KC_F24",

    // Numpad
    "Numpad0": "KC_P0",
    "Numpad1": "KC_P1",
    "Numpad2": "KC_P2",
    "Numpad3": "KC_P3",
    "Numpad4": "KC_P4",
    "Numpad5": "KC_P5",
    "Numpad6": "KC_P6",
    "Numpad7": "KC_P7",
    "Numpad8": "KC_P8",
    "Numpad9": "KC_P9",
    "NumpadDecimal": "KC_PDOT",
    "NumpadEnter": "KC_PENT",
    "NumpadAdd": "KC_PPLS",
    "NumpadSubtract": "KC_PMNS",
    "NumpadMultiply": "KC_PAST",
    "NumpadDivide": "KC_PSLS",
    "NumpadEqual": "KC_PEQL",
    "NumLock": "KC_NUM",

    // Media keys
    "MediaPlayPause": "KC_MPLY",
    "MediaStop": "KC_MSTP",
    "MediaTrackNext": "KC_MNXT",
    "MediaTrackPrevious": "KC_MPRV",
    "AudioVolumeUp": "KC_VOLU",
    "AudioVolumeDown": "KC_VOLD",
    "AudioVolumeMute": "KC_MUTE",

    // Additional keys
    "IntlBackslash": "KC_NUBS",
    "IntlRo": "KC_RO",
    "IntlYen": "KC_JYEN",
    "IntlHash": "KC_HASH",
    "Lang1": "KC_LANG1",
    "Lang2": "KC_LANG2",
};

// Convert browser event code to QMK keycode
function getQMKKeycode(browserCode) {
    return browserToQMK[browserCode] || null;
}

// Find key element by QMK keycode in the current layer
function findKeyElement(qmkKeycode) {
    return document.querySelector(`[data-qmk="${qmkKeycode}"]`);
}

// Find key element by tap keycode (for mod-tap and layer-tap keys)
function findKeyElementByTap(tapKeycode) {
    return document.querySelector(`[data-tap="${tapKeycode}"]`);
}

// Get tap keycode from mod-tap or layer-tap key
function getTapKeycode(qmkKeycode) {
    // Parse MT(mod, key)
    const mtMatch = qmkKeycode.match(/MT\([^,]+,\s*(KC_\w+)\)/);
    if (mtMatch) return mtMatch[1];
    
    // Parse LT(layer, key)
    const ltMatch = qmkKeycode.match(/LT\(\d+,\s*(KC_\w+)\)/);
    if (ltMatch) return ltMatch[1];
    
    // Parse simple wrapper functions
    const lguiMatch = qmkKeycode.match(/LGUI\((KC_\w+)\)/);
    if (lguiMatch) return lguiMatch[1];
    
    const lsftMatch = qmkKeycode.match(/LSFT\((KC_\w+)\)/);
    if (lsftMatch) return lsftMatch[1];
    
    const lctlMatch = qmkKeycode.match(/LCTL\((KC_\w+)\)/);
    if (lctlMatch) return lctlMatch[1];
    
    const laltMatch = qmkKeycode.match(/LALT\((KC_\w+)\)/);
    if (laltMatch) return laltMatch[1];
    
    // Handle combo modifiers
    const comboMatch = qmkKeycode.match(/LCTL\(LSFT\((KC_\w+)\)\)/);
    if (comboMatch) return comboMatch[1];
    
    return qmkKeycode;
}

// Get all key elements currently displayed
function getAllKeyElements() {
    return document.querySelectorAll('.key');
}

// Clear all pressed states
function clearAllPressedStates() {
    document.querySelectorAll('.key.pressed').forEach(key => {
        key.classList.remove('pressed');
    });
}

// Highlight a key by browser code
function highlightKeyByBrowserCode(browserCode) {
    const qmkCode = getQMKKeycode(browserCode);
    if (!qmkCode) return false;
    
    // Try exact match first
    let keyElement = findKeyElement(qmkCode);
    
    // If no exact match, try to match against tap keycodes
    if (!keyElement) {
        keyElement = findKeyElementByTap(qmkCode);
    }
    
    if (keyElement) {
        keyElement.classList.add('pressed');
        return true;
    }
    
    return false;
}

// Unhighlight a key by browser code
function unhighlightKeyByBrowserCode(browserCode) {
    const qmkCode = getQMKKeycode(browserCode);
    if (!qmkCode) return false;
    
    // Try exact match first
    let keyElement = findKeyElement(qmkCode);
    
    // If no exact match, try to match against tap keycodes
    if (!keyElement) {
        keyElement = findKeyElementByTap(qmkCode);
    }
    
    if (keyElement) {
        keyElement.classList.remove('pressed');
        return true;
    }
    
    return false;
}
