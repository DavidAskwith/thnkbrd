// QMK Keymap Data with keycodes for real-time visualization
const keymapData = {
    0: {
        name: "Base Layer",
        description: "Default typing layer",
        left: [
            // Row 0
            [
                { display: "Tab", qmk: "KC_TAB" },
                { display: "Q", qmk: "KC_Q" },
                { display: "W", qmk: "KC_W" },
                { display: "E", qmk: "KC_E" },
                { display: "R", qmk: "KC_R" },
                { display: "T", qmk: "KC_T" }
            ],
            // Row 1
            [
                { display: "Esc\nGUI", qmk: "MT(MOD_LGUI, KC_ESCAPE)", tap: "KC_ESCAPE", hold: "MOD_LGUI" },
                { display: "A\nShft", qmk: "MT(MOD_LSFT, KC_A)", tap: "KC_A", hold: "MOD_LSFT" },
                { display: "S\nL6", qmk: "LT(6, KC_S)", tap: "KC_S", hold: "LAYER_6" },
                { display: "D\nL4", qmk: "LT(4, KC_D)", tap: "KC_D", hold: "LAYER_4" },
                { display: "F\nL2", qmk: "LT(2, KC_F)", tap: "KC_F", hold: "LAYER_2" },
                { display: "G\nCtl", qmk: "MT(MOD_LCTL, KC_G)", tap: "KC_G", hold: "MOD_LCTL" }
            ],
            // Row 2
            [
                { display: "TG(7)", qmk: "TG(7)" },
                { display: "Z", qmk: "KC_Z" },
                { display: "X", qmk: "KC_X" },
                { display: "C", qmk: "KC_C" },
                { display: "V", qmk: "KC_V" },
                { display: "B", qmk: "KC_B" }
            ]
        ],
        right: [
            // Row 0
            [
                { display: "Y", qmk: "KC_Y" },
                { display: "U", qmk: "KC_U" },
                { display: "I", qmk: "KC_I" },
                { display: "O", qmk: "KC_O" },
                { display: "P", qmk: "KC_P" },
                { display: "Delete", qmk: "KC_DELETE" }
            ],
            // Row 1
            [
                { display: "H\nCtl", qmk: "MT(MOD_RCTL, KC_H)", tap: "KC_H", hold: "MOD_RCTL" },
                { display: "J\nL1", qmk: "LT(1, KC_J)", tap: "KC_J", hold: "LAYER_1" },
                { display: "K\nL3", qmk: "LT(3, KC_K)", tap: "KC_K", hold: "LAYER_3" },
                { display: "L\nL5", qmk: "LT(5, KC_L)", tap: "KC_L", hold: "LAYER_5" },
                { display: ";\nShift", qmk: "MT(MOD_RSFT, KC_SCLN)", tap: "KC_SCLN", hold: "MOD_RSFT" },
                { display: "'", qmk: "KC_QUOTE" }
            ],
            // Row 2
            [
                { display: "N", qmk: "KC_N" },
                { display: "M", qmk: "KC_M" },
                { display: ",", qmk: "KC_COMMA" },
                { display: ".", qmk: "KC_DOT" },
                { display: "/", qmk: "KC_SLASH" },
                { display: "TG(7)", qmk: "TG(7)" }
            ]
        ],
        thumbLeft: [
            { display: "Enter\nGUI", qmk: "MT(MOD_LGUI, KC_ENTER)", tap: "KC_ENTER", hold: "MOD_LGUI" },
            { display: "Backspace", qmk: "KC_BSPC" },
            { display: "TD(0)", qmk: "TD(DANCE_0)" }
        ],
        thumbRight: [
            { display: "TD(1)", qmk: "TD(DANCE_1)" },
            { display: "GUI(-)", qmk: "LGUI(KC_MINUS)" },
            { display: "Space", qmk: "KC_SPACE" }
        ]
    },
    1: {
        name: "Symbols Left",
        description: "Left-hand symbols",
        left: [
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "=>", qmk: "ST_MACRO_0" },
                { display: "+", qmk: "KC_PLUS" },
                { display: "*", qmk: "KC_ASTR" },
                { display: "^", qmk: "KC_CIRC" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "-", qmk: "KC_MINUS" },
                { display: "<", qmk: "KC_LABK" },
                { display: "{", qmk: "KC_LCBR" },
                { display: "(", qmk: "KC_LPRN" },
                { display: "[", qmk: "KC_LBRC" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: ">", qmk: "KC_RABK" },
                { display: "}", qmk: "KC_RCBR" },
                { display: ")", qmk: "KC_RPRN" },
                { display: "]", qmk: "KC_RBRC" }
            ]
        ],
        right: [
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "C", qmk: "KC_C" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "RCtl", qmk: "KC_RCTL" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "D", qmk: "KC_D" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ]
        ],
        thumbLeft: [
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" }
        ],
        thumbRight: [
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" }
        ]
    },
    2: {
        name: "Symbols Right",
        description: "Right-hand symbols",
        left: [
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "LCtl", qmk: "KC_LCTL" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ]
        ],
        right: [
            [
                { display: "#", qmk: "KC_HASH" },
                { display: "~", qmk: "KC_TILD" },
                { display: "%", qmk: "KC_PERC" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "\\", qmk: "KC_BSLS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "!", qmk: "KC_EXLM" },
                { display: "=", qmk: "KC_EQUAL" },
                { display: "&", qmk: "KC_AMPR" },
                { display: "|", qmk: "KC_PIPE" },
                { display: "`", qmk: "KC_GRAVE" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "@", qmk: "KC_AT" },
                { display: "$", qmk: "KC_DLR" },
                { display: "_", qmk: "KC_UNDS" },
                { display: "->", qmk: "ST_MACRO_1" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ]
        ],
        thumbLeft: [
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" }
        ],
        thumbRight: [
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" }
        ]
    },
    3: {
        name: "Numbers Left",
        description: "Left-hand numbers 1-5",
        left: [
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "1", qmk: "KC_1" },
                { display: "2", qmk: "KC_2" },
                { display: "3", qmk: "KC_3" },
                { display: "4", qmk: "KC_4" },
                { display: "5", qmk: "KC_5" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ]
        ],
        right: [
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "RGUI", qmk: "KC_RGUI" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "RCtl", qmk: "KC_RCTL" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ]
        ],
        thumbLeft: [
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" }
        ],
        thumbRight: [
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" },
            { display: "RShift", qmk: "KC_RSFT" }
        ]
    },
    4: {
        name: "Numbers Right",
        description: "Right-hand numbers 6-0",
        left: [
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "LCtl", qmk: "KC_LCTL" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "LGUI", qmk: "KC_LGUI" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ]
        ],
        right: [
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "6", qmk: "KC_6" },
                { display: "7", qmk: "KC_7" },
                { display: "8", qmk: "KC_8" },
                { display: "9", qmk: "KC_9" },
                { display: "0", qmk: "KC_0" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ]
        ],
        thumbLeft: [
            { display: "LShift", qmk: "KC_LSFT" },
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" }
        ],
        thumbRight: [
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" }
        ]
    },
    5: {
        name: "Utils Left",
        description: "Left-hand utilities",
        left: [
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "Ctl+⇧+R", qmk: "LCTL(LSFT(KC_R))" },
                { display: "Tab", qmk: "KC_TAB" },
                { display: "Shift+F6", qmk: "LSFT(KC_F6)" },
                { display: "F4", qmk: "KC_F4" },
                { display: "Ctl+⇧+I", qmk: "LCTL(LSFT(KC_I))" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ]
        ],
        right: [
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "LCtl", qmk: "KC_LCTL" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ]
        ],
        thumbLeft: [
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" }
        ],
        thumbRight: [
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" }
        ]
    },
    6: {
        name: "Utils Right",
        description: "Right-hand navigation & vim macros",
        left: [
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "LCtl", qmk: "KC_LCTL" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "TO(0)", qmk: "TO(0)" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ]
        ],
        right: [
            [
                { display: "\"+y", qmk: "ST_MACRO_2" },
                { display: "Home", qmk: "KC_HOME" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "\"+p", qmk: "ST_MACRO_3" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "Left", qmk: "KC_LEFT" },
                { display: "Down", qmk: "KC_DOWN" },
                { display: "Up", qmk: "KC_UP" },
                { display: "Right", qmk: "KC_RIGHT" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "End", qmk: "KC_END" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "TO(0)", qmk: "TO(0)" }
            ]
        ],
        thumbLeft: [
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" },
            { display: "TO(0)", qmk: "TO(0)" }
        ],
        thumbRight: [
            { display: "TO(0)", qmk: "TO(0)" },
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" }
        ]
    },
    8: {
        name: "Numpad",
        description: "Numeric keypad layer",
        left: [
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "+", qmk: "KC_PLUS" },
                { display: "*", qmk: "KC_ASTR" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "1", qmk: "KC_1" },
                { display: "2", qmk: "KC_2" },
                { display: "3", qmk: "KC_3" },
                { display: "4", qmk: "KC_4" },
                { display: "5", qmk: "KC_5" }
            ],
            [
                { display: "TO(0)", qmk: "TO(0)" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ]
        ],
        right: [
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "/", qmk: "KC_SLASH" },
                { display: "-", qmk: "KC_MINUS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "6", qmk: "KC_6" },
                { display: "7", qmk: "KC_7" },
                { display: "8", qmk: "KC_8" },
                { display: "9", qmk: "KC_9" },
                { display: "0", qmk: "KC_0" },
                { display: "---", qmk: "KC_TRNS" }
            ],
            [
                { display: "---", qmk: "KC_TRNS" },
                { display: "=", qmk: "KC_EQUAL" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "---", qmk: "KC_TRNS" },
                { display: "TO(0)", qmk: "TO(0)" }
            ]
        ],
        thumbLeft: [
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" },
            { display: "TO(0)", qmk: "TO(0)" }
        ],
        thumbRight: [
            { display: "TO(0)", qmk: "TO(0)" },
            { display: "---", qmk: "KC_TRNS" },
            { display: "---", qmk: "KC_TRNS" }
        ]
    }
};

// Key type detection based on QMK keycode
function getKeyType(qmkKeycode) {
    if (qmkKeycode === "KC_TRNS") return "trans";
    if (qmkKeycode.startsWith("LT(") || qmkKeycode.startsWith("TO(") || 
        qmkKeycode.startsWith("TG(") || qmkKeycode.startsWith("TD(")) return "layer";
    if (qmkKeycode.includes("MOD_") || qmkKeycode.startsWith("MT(")) return "mod";
    if (qmkKeycode.startsWith("ST_MACRO_") || qmkKeycode.includes("SEND_STRING")) return "macro";
    return "base";
}

// Extract tap keycode from mod-tap or layer-tap key
function getTapKeycode(qmkKeycode) {
    // Parse MT(mod, key)
    const mtMatch = qmkKeycode.match(/MT\([^,]+,\s*(KC_\w+)\)/);
    if (mtMatch) return mtMatch[1];
    
    // Parse LT(layer, key)
    const ltMatch = qmkKeycode.match(/LT\(\d+,\s*(KC_\w+)\)/);
    if (ltMatch) return ltMatch[1];
    
    return qmkKeycode;
}

// Render a single key
function createKey(keyData) {
    const keyDiv = document.createElement("div");
    
    // Handle both old string format and new object format
    let display, qmk, tap;
    if (typeof keyData === 'string') {
        display = keyData;
        qmk = "KC_TRNS"; // Default for backward compatibility
    } else {
        display = keyData.display;
        qmk = keyData.qmk;
        tap = keyData.tap;
    }
    
    keyDiv.className = `key ${getKeyType(qmk)}`;
    keyDiv.setAttribute('data-qmk', qmk);
    
    // Store tap keycode for matching mod-tap keys
    if (tap) {
        keyDiv.setAttribute('data-tap', tap);
    } else {
        // Try to extract tap keycode from the QMK keycode
        const extractedTap = getTapKeycode(qmk);
        if (extractedTap !== qmk) {
            keyDiv.setAttribute('data-tap', extractedTap);
        }
    }
    
    // Render display text
    const lines = display.split("\n");
    const primary = document.createElement("span");
    primary.className = "primary";
    primary.textContent = lines[0];
    keyDiv.appendChild(primary);
    
    if (lines.length > 1) {
        const secondary = document.createElement("span");
        secondary.className = "secondary";
        secondary.textContent = lines[1];
        keyDiv.appendChild(secondary);
    }
    
    return keyDiv;
}

// Render layer
function renderLayer(layerNum) {
    const layer = keymapData[layerNum];
    if (!layer) return;

    // Update title
    let titleDiv = document.querySelector(".layer-indicator");
    if (!titleDiv) {
        titleDiv = document.createElement("div");
        titleDiv.className = "layer-indicator";
        const container = document.getElementById("keyboard-container");
        container.insertBefore(titleDiv, container.firstChild);
    }
    titleDiv.innerHTML = `<p>${layer.description}</p>`;

    // Clear existing keys
    for (let i = 0; i < 3; i++) {
        document.getElementById(`left-row-${i}`).innerHTML = "";
        document.getElementById(`right-row-${i}`).innerHTML = "";
    }
    document.getElementById("left-thumb").innerHTML = "";
    document.getElementById("right-thumb").innerHTML = "";

    // Render left half
    layer.left.forEach((row, idx) => {
        const rowEl = document.getElementById(`left-row-${idx}`);
        row.forEach(key => {
            rowEl.appendChild(createKey(key));
        });
    });

    // Render right half
    layer.right.forEach((row, idx) => {
        const rowEl = document.getElementById(`right-row-${idx}`);
        row.forEach(key => {
            rowEl.appendChild(createKey(key));
        });
    });

    // Render thumb keys
    const leftThumb = document.getElementById("left-thumb");
    layer.thumbLeft.forEach(key => {
        const keyEl = createKey(key);
        keyEl.classList.add("thumb");
        leftThumb.appendChild(keyEl);
    });

    const rightThumb = document.getElementById("right-thumb");
    layer.thumbRight.forEach(key => {
        const keyEl = createKey(key);
        keyEl.classList.add("thumb");
        rightThumb.appendChild(keyEl);
    });
}

// Note: Event listeners are handled in app.js
