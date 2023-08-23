let lastValue = "O";
let display = document.getElementById("caleb");

display.textContent = "player 1's turn to play";
let buttons = document.querySelectorAll(".box");
for (let button of buttons){
    button.addEventListener("click", () => {
        if(button.textContent !== ""){
            return;
        }
        if(lastValue === "O"){
            button.textContent = "X";
            lastValue = "X"
            display.textContent = "Player 2's turn to play"

            checkStatus();

        }else if(lastValue === "X"){
            button.textContent = "O";
            lastValue = "O";
            display.textContent = "Player 1's turn to play"

            checkStatus();
            
        }
    });
}

let restartButton = document.getElementById("controlBtn")
restartButton.addEventListener("click", () => {
    window.location.href = 'index.html'
})