// Selecting all the boxes (cells) of the tic-tac-toe board
let boxes = document.querySelectorAll(".box");

// Selecting the reset button
let rebtn = document.querySelector(".rest");

// Selecting the message container (used to show the winner message)
let msgcontaner = document.querySelector(".msg-contaner.hide");

// Selecting the message element (where winner name will be displayed)
let msg = document.querySelector("#msg");

// Boolean flag to track turns (true = "0", false = "X")
let turn0 = true;

// All possible winning combinations (indexes of boxes)
const winpatterns = [
    [0, 1, 2], // first row
    [0, 3, 6], // first column
    [0, 4, 8], // diagonal
    [1, 4, 7], // second column
    [2, 5, 8], // third column
    [2, 4, 6], // diagonal
    [3, 4, 5], // second row
    [6, 7, 8], // third row
];

// Add click event to each box (cell)
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Set text to "0" or "X" based on the turn
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }

        // Disable the clicked box to prevent multiple clicks
        box.disabled = true;

        // Check if there's a winner after the move
        checkwinner();
    });
});

// Disable all boxes (called after someone wins)
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// Reset button functionality — clear board and enable boxes again
rebtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    // Hide the winner message
    msgcontaner.classList.add("hide");

    // Reset the turn to "0"
    turn0 = true;
});

// Show winner message and disable further clicks
const showwinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgcontaner.classList.remove("hide"); // Show the winner message
    disableBoxes(); // Prevent further moves
};

// Check all win patterns to see if someone has won
const checkwinner = () => {
    for (let pattern of winpatterns) {
        // Get the value (text) of the 3 positions in the current win pattern
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        // Check if all 3 positions are filled and equal
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner is", pos1);
                showwinner(pos1); // Display the winner
            }
        }
    }
};
