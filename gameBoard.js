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
        console.log(`next player to move: ${game.currentPlayer.marker}`);
        //set state of target cell to owned by current player
        state[e.originalTarget.id] = game.currentPlayer.marker;
        displayController.drawBoardAfterTurn();
        game.changePlayer();
    }

    return { state, claimCell };
})();