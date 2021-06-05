//grab DOM handler for gameBoard element
let gameBoardDisplay = document.getElementById("gameBoard");

const displayController = (() => {
    //draw empty board for initial game state
    const drawEmptyBoard = () => {
        for(let i = 0; i < 9; i++){
            let cell = document.createElement('div');
            cell.classList.add("cell");
            cell.setAttribute("id", i);
            cell.setAttribute("status", gameBoard.state[i]);
            //cell.addEventListener("click", game.claimCell());
            gameBoardDisplay.appendChild(cell);
        };
        console.log('drew empty game board');
    };
    //add event listeners to board cells (clicks to claim squares)
    const addListeners = () => {
        console.log('adding listeners');
        for(let i = 0; i < 9; i++){
            let cells = [];
            cells[i] = document.getElementById(i);
            cells[i].addEventListener("click", gameBoard.claimCell);
        };
        console.log('added event listeners');
    };

    const drawBoardAfterTurn = () => {
        let currentGameState = gameBoard.state;
        console.log(currentGameState);
        let cells = [];
        for(let i = 0; i < 9; i++){
            cells[i] = document.getElementById(i);
            cells[i].classList.add(`${gameBoard.state[i]}`)
        }
    }

    return { drawEmptyBoard, addListeners, drawBoardAfterTurn };
})();