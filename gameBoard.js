//write IIFE module for gameBoard object
//store gameBoard state as array inside of the gameBoard object

const gameBoard = (() => {
    //state holds the status of each gameboard cell from cell[0] - cell[8]
    //initialized to "empty" (later will be claimed "x" or "o")
    const state =   [
                    "empty", "empty", "empty",
                    "empty", "empty", "empty",
                    "empty", "empty", "empty"
                    ];
    //function to control claiming of cells, depending on active player
    const claimCell = (e) => {
        //condition to prevent claiming of any non-empty cells

        if(state[e.originalTarget.id] == "empty"){
            if((playerX.isActive == true) && (playerX.isAI == false)){
                state[e.originalTarget.id] = playerX.marker;
            }
            if((playerO.isActive == true) && (playerO.isAI == false)){
                state[e.originalTarget.id] = playerO.marker;
            }
            //update displayController with new board draw
            displayController.drawBoardAfterTurn();
            //check for winning moves
            if(playerX.isActive == true){
                game.checkWinners(state, playerX.id, playerX.marker);
            }
            if(playerO.isActive == true){
                game.checkWinners(state, playerO.id, playerO.marker);
            }
            //change to next player
            game.changePlayer();
            //if playerO is AI, make AI move
            if(playerO.isAI == true){
                aiController.chooseCell(state);
                console.log(computerChoice);
                console.log(state[computerChoice]);
                state[computerChoice] = playerO.marker;
                displayController.drawBoardAfterTurn();
                game.changePlayer();
            }
        }
    }

    //function to reset gameState after win or draw

    const resetGameState = () => {
        displayController.eraseGame();
        for (let i =0; i < 9; i++){
            state[i] = "empty"
        }
        displayController.drawEmptyBoard();
        displayController.addListeners();
    }

    return { state, claimCell, resetGameState };
})();