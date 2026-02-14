// Application initialization and event handling

// Layer state management
let activeLayer = 0;    // Layer currently being typed on (always base layer for visualization)
let viewedLayer = 0;    // Layer currently being viewed

// Track pressed keys
const pressedKeys = new Set();

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
    // Initial render of base layer
    renderLayer(0);
    updateLayerUI();

    // Layer button click handlers
    document.querySelectorAll(".layer-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const layerNum = parseInt(btn.dataset.layer);
            setViewedLayer(layerNum);
        });
    });

    // Keyboard navigation support
    document.addEventListener("keydown", (e) => {
        // Don't capture if user is in an input field
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        const buttons = document.querySelectorAll(".layer-btn");
        const activeBtn = document.querySelector(".layer-btn.active");
        const currentIndex = Array.from(buttons).indexOf(activeBtn);
        
        // Arrow key navigation
        if (e.key === "ArrowLeft" && currentIndex > 0) {
            e.preventDefault();
            buttons[currentIndex - 1].click();
        } else if (e.key === "ArrowRight" && currentIndex < buttons.length - 1) {
            e.preventDefault();
            buttons[currentIndex + 1].click();
        }
        
        // Number key shortcuts (1-8)
        const keyNum = parseInt(e.key);
        if (keyNum >= 1 && keyNum <= 8) {
            e.preventDefault();
            const targetIndex = keyNum - 1;
            if (buttons[targetIndex]) {
                buttons[targetIndex].click();
            }
        }
    });

    // Real-time key press detection
    setupKeyListeners();
});

// Set the active layer (for when we sync with physical keyboard)
function setActiveLayer(layerNum) {
    activeLayer = layerNum;
    updateLayerUI();
}

// Set the viewed layer (when user clicks layer buttons)
function setViewedLayer(layerNum) {
    viewedLayer = layerNum;
    renderLayer(layerNum);
    updateLayerUI();
}

// Update UI to reflect active vs viewed layer states
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
    if (keyboard) {
        keyboard.classList.remove('active-layer', 'preview-layer');
        
        if (activeLayer === viewedLayer) {
            keyboard.classList.add('active-layer');
        } else {
            keyboard.classList.add('preview-layer');
        }
    }

    // Update layer indicator
    const indicator = document.querySelector('.layer-indicator');
    const layer = keymapData[viewedLayer];
    if (indicator && layer) {
        if (activeLayer === viewedLayer) {
            indicator.innerHTML = `
                <p>
                    ${layer.description}
                    <span class="active-badge">Active</span>
                </p>
            `;
        } else {
            indicator.innerHTML = `
                <p>
                    ${layer.description}
                    <span class="preview-badge">Preview</span>
                </p>
            `;
        }
    }
}

// Setup keyboard event listeners for real-time key visualization
function setupKeyListeners() {
    // Key down handler
    document.addEventListener('keydown', (e) => {
        // Don't capture if user is in an input field
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        // Prevent default for captured keys to enable full keyboard testing
        // Allow modifier keys to pass through for OS shortcuts
        const isModifier = ['ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 
                           'AltLeft', 'AltRight', 'MetaLeft', 'MetaRight'].includes(e.code);
        
        if (!isModifier) {
            e.preventDefault();
        }
        
        // Ignore repeat events (key held down)
        if (e.repeat) return;
        
        const qmkCode = getQMKKeycode(e.code);
        if (!qmkCode) return;
        
        // Track this key as pressed
        pressedKeys.add(e.code);
        
        // Try to find and highlight the key
        let keyElement = findKeyElement(qmkCode);
        
        // If no exact match, try to match against tap keycodes (for mod-tap keys)
        if (!keyElement) {
            keyElement = findKeyElementByTap(qmkCode);
        }
        
        if (keyElement) {
            keyElement.classList.add('pressed');
        }
        
        // Update status display
        updateKeyStatus(e.code, qmkCode, keyElement);
    });

    // Key up handler
    document.addEventListener('keyup', (e) => {
        // Don't capture if user is in an input field
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        const qmkCode = getQMKKeycode(e.code);
        if (!qmkCode) return;
        
        // Remove from pressed keys tracking
        pressedKeys.delete(e.code);
        
        // Find and unhighlight the key
        let keyElement = findKeyElement(qmkCode);
        if (!keyElement) {
            keyElement = findKeyElementByTap(qmkCode);
        }
        
        if (keyElement) {
            keyElement.classList.remove('pressed');
        }
    });

    // Handle window losing focus - clear all pressed states
    window.addEventListener('blur', () => {
        clearAllPressedStates();
        pressedKeys.clear();
    });

    // Handle visibility change - clear pressed states when tab is hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearAllPressedStates();
            pressedKeys.clear();
        }
    });
}

// Update the key status display
function updateKeyStatus(browserCode, qmkCode, keyElement) {
    const statusDiv = document.getElementById('key-status');
    if (!statusDiv) return;
    
    let displayText = 'Unknown';
    let keyType = 'base';
    
    if (keyElement) {
        const primary = keyElement.querySelector('.primary');
        if (primary) {
            displayText = primary.textContent;
        }
        
        // Determine key type from class
        if (keyElement.classList.contains('layer')) keyType = 'layer';
        else if (keyElement.classList.contains('mod')) keyType = 'mod';
        else if (keyElement.classList.contains('macro')) keyType = 'macro';
        else if (keyElement.classList.contains('trans')) keyType = 'trans';
    }
    
    statusDiv.innerHTML = `
        <div class="key-info">
            <span class="key-display ${keyType}">${displayText}</span>
            <span class="key-code">${qmkCode}</span>
            <span class="browser-code">${browserCode}</span>
        </div>
    `;
    
    // Auto-hide after 3 seconds if no new keypress
    statusDiv.dataset.lastUpdate = Date.now();
    setTimeout(() => {
        if (Date.now() - parseInt(statusDiv.dataset.lastUpdate) >= 2900) {
            statusDiv.innerHTML = `
                <div class="key-info idle">
                    <span class="key-display">Press any key...</span>
                </div>
            `;
        }
    }, 3000);
}
