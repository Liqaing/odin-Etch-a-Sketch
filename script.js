function generateDiv(amount) {

    try {
        amount = Number(amount);
        if (isNaN(amount)) {
            throw new Error("Invalid input")
        }
    }
    catch (error) {
        console.error(error.message)
    }

    const grid = document.querySelector(".grid");
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
    generateDiv(16);
})