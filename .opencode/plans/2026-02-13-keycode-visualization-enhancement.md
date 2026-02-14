# Keycode Visualization Site Enhancement Plan

**Date:** 2026-02-13
**Status:** Draft
**Updated:** Revised to use QMK keycode-based mapping

## Overview

Enhance the existing QMK keymap visualization site to display keys as they are pressed in real-time and clearly indicate the currently active layer. The visualization will be based on the keymap defined in `/qmk/thnkbrd/keymaps/default/keymap.c`.

## Goals

1. **Real-time Key Press Visualization**: Detect keyboard input and highlight the corresponding key on the virtual keyboard display
2. **Active Layer Indicator**: Show which layer is currently active with visual emphasis
3. **Keycode Mapping**: Map browser KeyboardEvent codes to QMK keycodes, then match to displayed keys

## Technical Architecture

### Current State
- Site exists at `/site/` with HTML, CSS, JS, and keymap data
- Layer switching works via buttons and keyboard shortcuts (1-8)
- Keyboard layout matches QMK LAYOUT macro (6x3 + 3 thumb keys per half)
- Keymap data already parsed from keymap.c into keymap-data.js

### QMK Keycode-Based Mapping

we will use QMK keycodes for mapping:

1. **Store QMK keycodes in keymap-data.js** - Each key will have both its display text and its QMK keycode
2. **Map browser codes to QMK keycodes** - Create a simple lookup from `KeyboardEvent.code` to QMK keycodes (e.g., "KeyQ" → "KC_Q")
3. **Match and highlight** - When a key is pressed, convert to QMK keycode, find the DOM element with matching `data-qmk` attribute, and apply highlight styles


## Implementation Tasks

### Phase 1: Update keymap-data.js with QMK Keycodes

Restructure keymap data to store both display text and QMK keycode:

```javascript
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
            // Row 1 - includes mod-tap keys
            [
                { display: "Esc\nGUI", qmk: "MT(MOD_LGUI, KC_ESCAPE)", tap: "KC_ESCAPE", hold: "MOD_LGUI" },
                { display: "A\nShft", qmk: "MT(MOD_LSFT, KC_A)", tap: "KC_A", hold: "MOD_LSFT" },
                { display: "S\nL6", qmk: "LT(6, KC_S)", tap: "KC_S", hold: "LAYER_6" },
                { display: "D\nL4", qmk: "LT(4, KC_D)", tap: "KC_D", hold: "LAYER_4" },
                { display: "F\nL2", qmk: "LT(2, KC_F)", tap: "KC_F", hold: "LAYER_2" },
                { display: "G\nCtl", qmk: "MT(MOD_LCTL, KC_G)", tap: "KC_G", hold: "MOD_LCTL" }
            ],
            // ... etc
        ],
        // ... right half and thumbs
    }
};
```

For simple keys, just `display` and `qmk`. For mod-tap and layer-tap keys, include `tap` and `hold` for better visualization.

### Phase 2: Create keycode-mapper.js

Create a new file that maps browser `KeyboardEvent.code` to QMK keycodes:

```javascript
// Browser KeyboardEvent.code -> QMK Keycode
const browserToQMK = {
    // Letters
    "KeyQ": "KC_Q",
    "KeyW": "KC_W",
    "KeyE": "KC_E",
    // ... etc for all keys

    // Numbers
    "Digit1": "KC_1",
    "Digit2": "KC_2",
    // ... etc

    // Special keys
    "Tab": "KC_TAB",
    "Enter": "KC_ENTER",
    "Space": "KC_SPACE",
    "Backspace": "KC_BSPC",
    "Delete": "KC_DELETE",
    "Escape": "KC_ESCAPE",

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

    // Function keys
    "F1": "KC_F1",
    "F2": "KC_F2",
    // ... etc through F24
};

// Convert browser event code to QMK keycode
function getQMKKeycode(browserCode) {
    return browserToQMK[browserCode] || null;
}

// Find key element by QMK keycode in the current layer
function findKeyElement(qmkKeycode) {
    return document.querySelector(`[data-qmk="${qmkKeycode}"]`);
}

// Get tap keycode from mod-tap or layer-tap key
function getTapKeycode(qmkKeycode) {
    // Parse MT(mod, key) or LT(layer, key)
    const mtMatch = qmkKeycode.match(/MT\([^,]+,\s*(KC_\w+)\)/);
    if (mtMatch) return mtMatch[1];

    const ltMatch = qmkKeycode.match(/LT\(\d+,\s*(KC_\w+)\)/);
    if (ltMatch) return ltMatch[1];

    return qmkKeycode;
}
```

### Phase 3: Update DOM Generation

Modify `createKey()` in keymap-data.js to add `data-qmk` attributes:

```javascript
function createKey(keyData) {
    const keyDiv = document.createElement("div");

    // Handle both old string format and new object format during transition
    let display, qmk;
    if (typeof keyData === 'string') {
        display = keyData;
        qmk = inferQMKKeycode(keyData); // Helper to convert old format
    } else {
        display = keyData.display;
        qmk = keyData.qmk;
    }

    keyDiv.className = `key ${getKeyType(display)}`;
    keyDiv.setAttribute('data-qmk', qmk);

    // For mod-tap/layer-tap, also store tap keycode for matching
    const tapKeycode = getTapKeycode(qmk);
    if (tapKeycode !== qmk) {
        keyDiv.setAttribute('data-tap', tapKeycode);
    }

    // Render display text...
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
```

### Phase 4: Event Handling in app.js

Add keyboard event listeners that use QMK keycode mapping:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Existing initialization...

    // Track pressed keys
    const pressedKeys = new Set();

    // Key down handler
    document.addEventListener('keydown', (e) => {
        // Don't capture if user is in an input field
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        e.preventDefault();

        const qmkCode = getQMKKeycode(e.code);
        if (!qmkCode) return;

        // Try to find exact match first
        let keyElement = findKeyElement(qmkCode);

        // If no exact match, try to match against tap keycodes (for mod-tap keys)
        if (!keyElement) {
            keyElement = document.querySelector(`[data-tap="${qmkCode}"]`);
        }

        if (keyElement) {
            keyElement.classList.add('pressed');
            pressedKeys.add(e.code);
        }

        // Update status display
        updateKeyStatus(e.code, qmkCode, keyElement);
    });

    // Key up handler
    document.addEventListener('keyup', (e) => {
        const qmkCode = getQMKKeycode(e.code);
        if (!qmkCode) return;

        // Find and unhighlight
        let keyElement = findKeyElement(qmkCode);
        if (!keyElement) {
            keyElement = document.querySelector(`[data-tap="${qmkCode}"]`);
        }

        if (keyElement) {
            keyElement.classList.remove('pressed');
        }

        pressedKeys.delete(e.code);
    });
});

function updateKeyStatus(browserCode, qmkCode, keyElement) {
    const statusDiv = document.getElementById('key-status');
    if (!statusDiv) return;

    const displayText = keyElement ? keyElement.querySelector('.primary').textContent : 'Unknown';
    statusDiv.innerHTML = `
        <div class="key-info">
            <span class="key-display">${displayText}</span>
            <span class="key-code">${qmkCode}</span>
            <span class="browser-code">${browserCode}</span>
        </div>
    `;
}
```

### Phase 5: CSS Enhancements

Add styles for pressed state:

```css
/* Pressed key state */
.key.pressed {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(102, 126, 234, 0.8),
                inset 0 0 10px rgba(255, 255, 255, 0.3);
    border-color: #fff;
    filter: brightness(1.2);
}

/* Different glow colors for different key types */
.key.pressed.base {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(102, 126, 234, 0.8);
}

.key.pressed.layer {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(102, 234, 126, 0.8);
}

.key.pressed.mod {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(234, 102, 126, 0.8);
}

.key.pressed.macro {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(102, 204, 234, 0.8);
}

/* Key status display */
#key-status {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    padding: 15px 25px;
    border-radius: 8px;
    border: 1px solid #667eea;
    color: #fff;
    font-family: monospace;
    z-index: 1000;
}

.key-info {
    display: flex;
    gap: 20px;
    align-items: center;
}

.key-display {
    font-size: 1.2rem;
    font-weight: bold;
    color: #667eea;
}

.key-code {
    color: #aaa;
}

.browser-code {
    color: #666;
    font-size: 0.9rem;
}
```

### Phase 6: Layer State Management

Add clear visual distinction between active and viewed layers:

```javascript
// Layer state
let activeLayer = 0;    // Layer currently being typed on
let viewedLayer = 0;    // Layer currently being viewed

function setActiveLayer(layerNum) {
    activeLayer = layerNum;
    updateLayerUI();
}

function setViewedLayer(layerNum) {
    viewedLayer = layerNum;
    renderLayer(layerNum);
    updateLayerUI();
}

function updateLayerUI() {
    // Update layer buttons
    document.querySelectorAll('.layer-btn').forEach(btn => {
        const layer = parseInt(btn.dataset.layer);
        btn.classList.remove('active', 'preview');

        if (layer === activeLayer && layer === viewedLayer) {
            btn.classList.add('active');
        } else if (layer === viewedLayer) {
            btn.classList.add('preview');
        }
    });

    // Update keyboard container
    const keyboard = document.querySelector('.keyboard');
    keyboard.classList.remove('active-layer', 'preview-layer');

    if (activeLayer === viewedLayer) {
        keyboard.classList.add('active-layer');
    } else {
        keyboard.classList.add('preview-layer');
    }

    // Update layer indicator
    const indicator = document.querySelector('.layer-indicator');
    if (activeLayer === viewedLayer) {
        indicator.innerHTML = `<p>${keymapData[viewedLayer].description} <span class="active-badge">Active</span></p>`;
    } else {
        indicator.innerHTML = `<p>${keymapData[viewedLayer].description} <span class="preview-badge">Preview</span></p>`;
    }
}
```

## Keycode Mapping Reference

### Browser to QMK Mapping (browserToQMK object)

**Letters:**
| Browser Code | QMK Keycode |
|--------------|-------------|
| KeyA | KC_A |
| KeyB | KC_B |
| ... | ... |
| KeyZ | KC_Z |

**Numbers:**
| Browser Code | QMK Keycode |
|--------------|-------------|
| Digit0 | KC_0 |
| Digit1 | KC_1 |
| ... | ... |
| Digit9 | KC_9 |

**Special Keys:**
| Browser Code | QMK Keycode |
|--------------|-------------|
| Tab | KC_TAB |
| Enter | KC_ENTER |
| Space | KC_SPACE |
| Backspace | KC_BSPC |
| Delete | KC_DELETE |
| Escape | KC_ESCAPE |
| CapsLock | KC_CAPS |

**Modifiers:**
| Browser Code | QMK Keycode |
|--------------|-------------|
| ShiftLeft | KC_LSFT |
| ShiftRight | KC_RSFT |
| ControlLeft | KC_LCTL |
| ControlRight | KC_RCTL |
| AltLeft | KC_LALT |
| AltRight | KC_RALT |
| MetaLeft | KC_LGUI |
| MetaRight | KC_RGUI |

**Punctuation:**
| Browser Code | QMK Keycode |
|--------------|-------------|
| Semicolon | KC_SCLN |
| Quote | KC_QUOTE |
| Comma | KC_COMMA |
| Period | KC_DOT |
| Slash | KC_SLASH |
| Backslash | KC_BSLS |
| Minus | KC_MINUS |
| Equal | KC_EQUAL |
| BracketLeft | KC_LBRC |
| BracketRight | KC_RBRC |
| Backquote | KC_GRAVE |

**Navigation:**
| Browser Code | QMK Keycode |
|--------------|-------------|
| ArrowLeft | KC_LEFT |
| ArrowRight | KC_RIGHT |
| ArrowUp | KC_UP |
| ArrowDown | KC_DOWN |
| Home | KC_HOME |
| End | KC_END |
| PageUp | KC_PGUP |
| PageDown | KC_PGDN |
| Insert | KC_INSERT |

## Files to Modify

### 1. `/site/keymap-data.js`
**Changes:**
- Convert string-based key definitions to object-based with `display` and `qmk` properties
- Update `createKey()` to handle new format and add `data-qmk` attributes
- Add helper function to extract tap keycode from mod-tap/layer-tap keys
- Ensure backward compatibility during transition

### 2. `/site/keycode-mapper.js` (NEW)
**New file containing:**
- `browserToQMK` mapping object
- `getQMKKeycode(browserCode)` function
- `findKeyElement(qmkKeycode)` function
- `getTapKeycode(qmkKeycode)` helper for mod-tap keys

### 3. `/site/app.js`
**Changes:**
- Add keyboard event listeners for `keydown` and `keyup`
- Implement key highlighting using QMK keycode matching
- Add layer state management (active vs viewed)
- Add key status display updates
- Prevent default for captured keys

### 4. `/site/styles.css`
**Changes:**
- Add `.pressed` class with glow animations
- Add type-specific glow colors (base, layer, mod, macro)
- Add `#key-status` display styles
- Add `.active-badge` and `.preview-badge` styles
- Add `.active-layer` and `.preview-layer` container styles

### 5. `/site/index.html`
**Changes:**
- Include new `keycode-mapper.js` script before `app.js`
- Add `#key-status` div for displaying pressed key info
- Update layer button classes to support active/preview states

## Data Structure Example

Here's how the updated keymap-data.js structure should look:

```javascript
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
        thumbLeft: [
            { display: "Enter\nGUI", qmk: "MT(MOD_LGUI, KC_ENTER)", tap: "KC_ENTER", hold: "MOD_LGUI" },
            { display: "Backspace", qmk: "KC_BSPC" },
            { display: "TD(0)", qmk: "TD(DANCE_0)" }
        ],
        // ... right half
    },
    // ... other layers
};
```

## Testing Plan

1. **Basic Key Detection**
   - Press each alphanumeric key, verify correct key highlights
   - Verify `data-qmk` attribute matches expected QMK keycode
   - Check status display shows correct info

2. **Mod-Tap Keys**
   - Press 'A' key - should highlight "A\nShft" key
   - Verify tap keycode matching works correctly
   - Test with both left and right mod-tap keys

3. **Layer-Tap Keys**
   - Test layer-tap keys (S/L6, D/L4, F/L2, J/L1, K/L3, L/L5)
   - Verify tap functionality highlights correctly

4. **Modifier Keys**
   - Test Shift, Ctrl, Alt, Win keys
   - Verify both left and right variants work
   - Check held state styling

5. **Layer States**
   - Verify active layer shows "Active" badge
   - Switch to different layer, verify "Preview" badge
   - Test layer switching via buttons and keyboard shortcuts

6. **Edge Cases**
   - Keys not in mapping should not cause errors
   - Rapid key presses should track correctly
   - Multiple simultaneous keys should all highlight

## Success Criteria

- [ ] All keys on base layer highlight when pressed using QMK keycode matching
- [ ] Mod-tap keys highlight when their tap key is pressed
- [ ] Modifier keys (Shift, Ctrl, Alt, Win) highlight correctly
- [ ] Active layer is clearly distinguished from preview layer
- [ ] Key status display shows browser code, QMK keycode, and display text
- [ ] Key press animation is smooth with glow effect
- [ ] No JavaScript errors during normal use
- [ ] Works in Chrome, Firefox, Safari, Edge

## Future Enhancements (Out of Scope)

- HID connection to actual QMK keyboard for real-time sync
- Layer state synchronized with physical keyboard
- Hold detection for mod-tap keys (show hold vs tap state)
- Configurable key mappings
- Export key press logs
- Touch/mobile support
- Sound effects on key press

## References

- QMK Keycodes: https://docs.qmk.fm/#/keycodes
- KeyboardEvent.code: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
- Current keymap: `/qmk/thnkbrd/keymaps/default/keymap.c`
- Keyboard layout: `/qmk/thnkbrd/keyboard.json`
