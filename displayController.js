//grab DOM handler for gameBoard element
let gameBoardDisplay = document.getElementById("gameBoard");

const displayController = (() => {
    //create empty array of cells
    let cells = [];
    //draw empty board for initial game state
    const drawEmptyBoard = () => {
        //number of cells on a board is 9, so loop through 0-8
        for(let i = 0; i < 9; i++){
            //create variable for cell element
            let cell = document.createElement('div');
            //add cell class to new element
            cell.classList.add("cell");
            //set id of cell equal to index 0 - 9 (gameboard position)
            cell.setAttribute("id", i);
            //set status of cell to the current gameboard state (empty on first draw)
            cell.setAttribute("status", gameBoard.state[i]);
            //attach cell (child) to gameBoard (parent)
            gameBoardDisplay.appendChild(cell);
        };
        //log to confirm initial board draw
        console.log('drew empty game board');
    };
    //add event listeners to board cells (clicks to claim squares)
    const addListeners = () => {
        //number of cells on board is 9, so loop through 0-8
        for(let i = 0; i < 9; i++){
            //each cell in the empty array refers to the id of the previously created cell
            cells[i] = document.getElementById(i);
            //each cell of unique id (index) is given a listener to call the claimCell function on the gameBoard object
            cells[i].addEventListener("click", gameBoard.claimCell);
        };
        //log to confirm listeners added
        console.log('added event listeners');
    };
    //redraw the gameboard after every turn to update claimed cells
    const drawBoardAfterTurn = () => {
        //grab currentGameState from gameBoard object (should be an array of strings)
        let currentGameState = gameBoard.state;
        //log currentGameState to confirm
        console.log(currentGameState);
        //loop through 0-8 for indexes in cell array to update display status according to currentGameState.
        for(let i = 0; i < 9; i++){
            //each cell in the array refers to the id of the previously created cell --- should be function'd out ---
            cells[i] = document.getElementById(i);
            //add to each cell a class based on the current gamestate
            cells[i].classList.add(`${currentGameState[i]}`)
        }
    };
    //draw modal popup to show game winner and options to play again
    const drawEndGamePopup = (winner) => {
        let endGamePopup = document.getElementById("endGamePopup");
        let closePopupBTN = document.getElementsByClassName("close")[0];
        let winnerAlert = document.getElementById("winnerAlert");
        let playAgainPrompt = document.getElementById("playAgainPrompt");
        winnerAlert.innerHTML = `Winner: ${winner}`;
        playAgainPrompt.innerHTML = `Play Again?`;
        endGamePopup.style.display = "block";
        closePopupBTN.onclick = function() {
            endGamePopup.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == endGamePopup) {
                endGamePopup.style.display = "none";
            }
        }
    }
    return { drawEmptyBoard, addListeners, drawBoardAfterTurn, drawEndGamePopup };
})();