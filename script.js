document.addEventListener("DOMContentLoaded", () => {
    generatePuzzle();
});

function generatePuzzle() {
    const grid = document.getElementById("puzzle-grid");
    grid.innerHTML = "";

    let puzzle = [
        ["", "-", "15", "=", ""],
        ["-", "", "+", "", "0"],
        ["", "-", "", "=", ""],
        ["=", "", "", "", ""],
        ["14", "-", "10", "=", ""]
    ];

    for (let i = 0; i < puzzle.length; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < puzzle[i].length; j++) {
            let cell = document.createElement("td");

            if (puzzle[i][j] === "") {
                let input = document.createElement("input");
                input.type = "text";
                input.dataset.row = i;
                input.dataset.col = j;
                cell.appendChild(input);
            } else {
                cell.textContent = puzzle[i][j];
            }

            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function checkAnswers() {
    let inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        let row = parseInt(input.dataset.row);
        let col = parseInt(input.dataset.col);
        let value = input.value.trim();

        let correctAnswers = {
            "0-2": "5",  // Example answers for positions (row-col)
            "1-1": "5",
            "2-2": "4",
            "3-1": "10",
            "3-2": "4",
            "4-4": "4"
        };

        let key = `${row}-${col}`;

        if (correctAnswers[key] && value === correctAnswers[key]) {
            input.classList.add("correct");
            input.classList.remove("wrong");
        } else {
            input.classList.add("wrong");
            input.classList.remove("correct");
        }
    });
}
