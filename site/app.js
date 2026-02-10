// Application initialization and event handling
document.addEventListener("DOMContentLoaded", () => {
    // Initial render of base layer
    renderLayer(0);

    // Layer button click handlers
    document.querySelectorAll(".layer-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            // Update active state
            document.querySelectorAll(".layer-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Render selected layer
            const layerNum = parseInt(btn.dataset.layer);
            renderLayer(layerNum);
        });
    });

    // Keyboard navigation support
    document.addEventListener("keydown", (e) => {
        const buttons = document.querySelectorAll(".layer-btn");
        const activeBtn = document.querySelector(".layer-btn.active");
        const currentIndex = Array.from(buttons).indexOf(activeBtn);
        
        // Arrow key navigation
        if (e.key === "ArrowLeft" && currentIndex > 0) {
            buttons[currentIndex - 1].click();
        } else if (e.key === "ArrowRight" && currentIndex < buttons.length - 1) {
            buttons[currentIndex + 1].click();
        }
        
        // Number key shortcuts (1-8)
        const keyNum = parseInt(e.key);
        if (keyNum >= 1 && keyNum <= 8) {
            const targetIndex = keyNum - 1;
            if (buttons[targetIndex]) {
                buttons[targetIndex].click();
            }
        }
    });
});