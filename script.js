document.addEventListener("DOMContentLoaded", function () {
    const gridSizeInput = document.getElementById("grid-size");
    const generateGridBtn = document.getElementById("generate-grid");
    const colorPicker = document.getElementById("color-picker");
    const clearGridBtn = document.getElementById("clear-grid");
    const downloadBtn = document.getElementById("download");
    const pixelBoard = document.getElementById("pixel-board");

    function createGrid(size) {
        pixelBoard.innerHTML = ""; // Clear previous grid
        pixelBoard.style.display = "grid";
        pixelBoard.style.gridTemplateColumns = `repeat(${size}, 20px)`;
        pixelBoard.style.gridTemplateRows = `repeat(${size}, 20px)`;

        for (let i = 0; i < size * size; i++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.width = "20px";
            pixel.style.height = "20px";
            pixel.style.border = "1px solid #ccc";
            pixel.style.backgroundColor = "white";

            // Click to change color
            pixel.addEventListener("click", () => {
                pixel.style.backgroundColor = colorPicker.value;
            });

            pixelBoard.appendChild(pixel);
        }
    }

    // Generate grid when button is clicked
    generateGridBtn.addEventListener("click", () => {
        let size = parseInt(gridSizeInput.value);
        if (isNaN(size) || size < 5 || size > 30) {
            alert("Grid size must be between 5 and 30.");
            return;
        }
        createGrid(size);
    });

    // Clear grid
    clearGridBtn.addEventListener("click", () => {
        document.querySelectorAll(".pixel").forEach(pixel => {
            pixel.style.backgroundColor = "white";
        });
    });

    // Generate default grid on load
    createGrid(10);
});
