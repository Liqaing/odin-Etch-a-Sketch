function generateDiv(grid, amount) {
    // Try to convert amount user input to number
    try {
        amount = Number(amount);
        if (isNaN(amount)) {
            throw new Error("Invalid input")
        }
    }
    catch (error) {
        console.error(error.message)
    }

    // Generate div row by row, in each row generate column div
    // Each row is a flex box
    for (let row = 0; row < amount; row++) {
        
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (let col = 0; col < amount; col++) {
        
            const colDiv = document.createElement("div");
            colDiv.classList.add("col");
            rowDiv.appendChild(colDiv);
        
        }

        grid.appendChild(rowDiv);
    }
}

function hoverMode(grid, color) {
    grid.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("col")) {
            e.target.style.background = "black";
        }
    });
}

// Here
function clickMode(grid, color) {
    grid.addEventListener("click", (e) => {
        if (e.target.classList.contains("col")) {
            e.target.style.background = "black";
        }
    });
}

window.addEventListener("load", () => {
    // Load default grid when page is loaded
    const grid = document.querySelector(".grid");
    generateDiv(grid, 16);

    // Add event listener to button
    // Check which mode to enable
    const rightButtons = document.querySelector(".right");
    rightButtons.addEventListener("click", (e) => {
        const button = e.target;
        switch (button.textContent) {
            case "Change Grid":
                 break;
            case "Hover Mode":
                button.style.background = "#00ff00";
                hoverMode(grid);
                break;
            case "Click Mode":
                break;
            case "Eraser":
                break;
            default:
                break;
        };
    });

    const leftButtons = document.querySelector(".left");
    leftButtons.addEventListener("click", (e) => {
        const button = e.target;
        switch (button.textContent) {
            case "Color Picker":
                break;
            case "Rainbow":
                break;
            case "clean":
                break;
            default:
                break;
        };
    });

});
