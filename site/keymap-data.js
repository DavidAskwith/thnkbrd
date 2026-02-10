// QMK Keymap Data
const keymapData = {
    0: {
        name: "Base Layer",
        description: "Default typing layer",
        left: [
            ["Tab", "Q", "W", "E", "R", "T"],
            ["Esc\nGUI", "A\nShft", "S\nL6", "D\nL4", "F\nL2", "G\nCtl"],
            ["TG(7)", "Z", "X", "C", "V", "B"]
        ],
        right: [
            ["Y", "U", "I", "O", "P", "Delete"],
            ["H\nCtl", "J\nL1", "K\nL3", "L\nL5", ";\nShift", "'"],
            ["N", "M", ",", ".", "/", "TG(7)"]
        ],
        thumbLeft: ["Enter\nGUI", "Backspace", "TD(0)"],
        thumbRight: ["TD(1)", "GUI(-)", "Space"]
    },
    1: {
        name: "Symbols Left",
        description: "Left-hand symbols",
        left: [
            ["---", "---", "=>", "+", "*", "^"],
            ["---", "-", "<", "{", "(", "["],
            ["---", "---", ">", "}", ")", "]"]
        ],
        right: [
            ["---", "---", "C", "---", "---", "---"],
            ["---", "---", "RCtl", "---", "---", "---"],
            ["---", "---", "D", "---", "---", "---"]
        ],
        thumbLeft: ["---", "---", "---"],
        thumbRight: ["---", "---", "---"]
    },
    2: {
        name: "Symbols Right",
        description: "Right-hand symbols",
        left: [
            ["---", "---", "---", "---", "---", "---"],
            ["---", "---", "---", "LCtl", "---", "---"],
            ["---", "---", "---", "---", "---", "---"]
        ],
        right: [
            ["#", "~", "%", "---", "\\", "---"],
            ["!", "=", "&", "|", "`", "---"],
            ["@", "$", "_", "->", "---", "---"]
        ],
        thumbLeft: ["---", "---", "---"],
        thumbRight: ["---", "---", "---"]
    },
    3: {
        name: "Numbers Left",
        description: "Left-hand numbers 1-5",
        left: [
            ["---", "---", "---", "---", "---", "---"],
            ["---", "1", "2", "3", "4", "5"],
            ["---", "---", "---", "---", "---", "---"]
        ],
        right: [
            ["---", "---", "---", "---", "---", "---"],
            ["---", "RGUI", "---", "RCtl", "---", "---"],
            ["---", "---", "---", "---", "---", "---"]
        ],
        thumbLeft: ["---", "---", "---"],
        thumbRight: ["---", "---", "RShift"]
    },
    4: {
        name: "Numbers Right",
        description: "Right-hand numbers 6-0",
        left: [
            ["---", "---", "---", "---", "---", "---"],
            ["---", "---", "LCtl", "---", "LGUI", "---"],
            ["---", "---", "---", "---", "---", "---"]
        ],
        right: [
            ["---", "---", "---", "---", "---", "---"],
            ["6", "7", "8", "9", "0", "---"],
            ["---", "---", "---", "---", "---", "---"]
        ],
        thumbLeft: ["LShift", "---", "---"],
        thumbRight: ["---", "---", "---"]
    },
    5: {
        name: "Utils Left",
        description: "Left-hand utilities",
        left: [
            ["---", "---", "---", "---", "---", "---"],
            ["---", "Ctl+⇧+R", "Tab", "Shift+F6", "F4", "Ctl+⇧+I"],
            ["---", "---", "---", "---", "---", "---"]
        ],
        right: [
            ["---", "---", "---", "---", "---", "---"],
            ["---", "---", "---", "LCtl", "---", "---"],
            ["---", "---", "---", "---", "---", "---"]
        ],
        thumbLeft: ["---", "---", "---"],
        thumbRight: ["---", "---", "---"]
    },
    6: {
        name: "Utils Right",
        description: "Right-hand navigation & vim macros",
        left: [
            ["---", "---", "---", "---", "---", "---"],
            ["---", "---", "---", "LCtl", "---", "---"],
            ["TO(0)", "---", "---", "---", "---", "---"]
        ],
        right: [
            ["\"+y", "Home", "---", "---", "\"+p", "---"],
            ["Left", "Down", "Up", "Right", "---", "---"],
            ["---", "End", "---", "---", "---", "TO(0)"]
        ],
        thumbLeft: ["---", "---", "TO(0)"],
        thumbRight: ["TO(0)", "---", "---"]
    },
    8: {
        name: "Numpad",
        description: "Numeric keypad layer",
        left: [
            ["---", "---", "---", "+", "*", "---"],
            ["---", "1", "2", "3", "4", "5"],
            ["TO(0)", "---", "---", "---", "---", "---"]
        ],
        right: [
            ["---", "/", "-", "---", "---", "---"],
            ["6", "7", "8", "9", "0", "---"],
            ["---", "=", "---", "---", "---", "TO(0)"]
        ],
        thumbLeft: ["---", "---", "TO(0)"],
        thumbRight: ["TO(0)", "---", "---"]
    }
};

// Key type detection
function getKeyType(key) {
    if (key === "---") return "trans";
    if (key.includes("L") || key.includes("TO(") || key.includes("TG(") || key.includes("TD(")) return "layer";
    if (key.includes("Ctl") || key.includes("Shift") || key.includes("GUI") || key.includes("Alt")) return "mod";
    if (key.includes("Macro") || key.includes("\"+") || key.includes("[") || key.includes("]c")) return "macro";
    return "base";
}

// Render a single key
function createKey(keyText) {
    const keyDiv = document.createElement("div");
    keyDiv.className = `key ${getKeyType(keyText)}`;

    const lines = keyText.split("\n");
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
