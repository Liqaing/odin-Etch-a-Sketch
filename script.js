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

// Load default grid when page is loaded
window.addEventListener("load", () => {
    const grid = document.querySelector(".grid");
    generateDiv(grid, 16);
})

function hoverMode(e) {
    if (e.target.classList.contains("col")) {
        e.target.style.background = "black";
    }
}

