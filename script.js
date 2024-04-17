document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");
    const resultDiv = document.getElementById("result");
    let player1Choice = "";
    let player2Choice = "";
  
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const currentPlayer = this.closest(".player").id;
  
        if (currentPlayer === "player1") {
          player1Choice = this.getAttribute("data-choice");
        } else {
          player2Choice = this.getAttribute("data-choice");
        }
  
        this.classList.add("selected");
  
        if (player1Choice && player2Choice) {
          const result = playRound(player1Choice, player2Choice);
          resultDiv.textContent = result;
          resetSelection();
        }
      });
    });
  
    function resetSelection() {
      buttons.forEach(button => {
        button.classList.remove("selected");
      });
      player1Choice = "";
      player2Choice = "";
    }
  
    function playRound(player1Selection, player2Selection) {
      if (player1Selection === player2Selection) {
        return "It's a tie!";
      } else if (
        (player1Selection === "rock" && player2Selection === "scissors") ||
        (player1Selection === "paper" && player2Selection === "rock") ||
        (player1Selection === "scissors" && player2Selection === "paper")
      ) {
        return `Player 1 wins! ${player1Selection} beats ${player2Selection}.`;
      } else {
        return `Player 2 wins! ${player2Selection} beats ${player1Selection}.`;
      }
    }
  });
  