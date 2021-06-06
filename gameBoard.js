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
        //THIS CONSOLE LOG ALWAYS SHOWS PLAYER X, EVEN THOUGH THE CURRENTPLAYER HAS CHANGED IMMEDIATELY BEFORE CALLING CLAIMCELL  <--- PROBLEM
        //console.log(`next player to move: ${game.currentPlayer.marker}`);
        //set state of target cell to owned by current player
        if(playerX.isActive == true){
            state[e.originalTarget.id] = playerX.marker;
        }
        if(playerO.isActive == true){
            state[e.originalTarget.id] = playerO.marker;
        }
        //state[e.originalTarget.id] = game.currentPlayer.marker;
        //update displayController with new board draw
        displayController.drawBoardAfterTurn();
        //change to next player
        game.changePlayer();
    }
    return { state, claimCell };
})();