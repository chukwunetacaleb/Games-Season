function checkIfGameIsWon(first, second, third) {
  if (display?.textContent?.includes("won the game")) {
    return;
  }
  if (
    buttons[first].textContent === "X" &&
    buttons[second].textContent === "X" &&
    buttons[third].textContent === "X"
  ) {
    disableButtonWhenGameIsWon("player 1");

    return;
  } else if (
    buttons[first].textContent === "O" &&
    buttons[second].textContent === "O" &&
    buttons[third].textContent === "O"
  ) {
    disableButtonWhenGameIsWon("player 2");
    return;
  } else {
  }
  checkDraw();
}


function checkStatus() {
  checkIfGameIsWon(0, 1, 2);
  checkIfGameIsWon(3, 4, 5);
  checkIfGameIsWon(6, 7, 8);

  // for vertically

  checkIfGameIsWon(0, 3, 6);
  checkIfGameIsWon(1, 4, 7);
  checkIfGameIsWon(2, 5, 8);

  //for slant

  checkIfGameIsWon(0, 4, 8);
  checkIfGameIsWon(2, 4, 6);
}

function disableButtonWhenGameIsWon(player) {
  for (let button of buttons) {
    if (button.textContent === "") {
      button.toggleAttribute("disabled");
    }
  }
  display.textContent = player + "won the game";
}

function checkDraw (){
    for (let button of buttons) {
        if (button.textContent === "") {
            return;
        }
    }
    display.textContent = "It is a Draw Game";
}
