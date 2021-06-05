

const game = (() => {

    var currentPlayer = playerX;

    //draw initial empty game board and send to displayController
    displayController.drawEmptyBoard();

    //add listeners to board cells (click events to claim cells)
    displayController.addListeners();
    //change active player after each move
    
    const changePlayer = () => {
        switch(currentPlayer) {
            case playerX :
                currentPlayer = playerO;
                break;
            case playerO :
                currentPlayer = playerX;
                break;
        }
        console.log(`next player to move: ${currentPlayer.marker}`);
        return currentPlayer;
    }


    //check player moves for validity against gameboard state
    //update gameboard state after each move and send to displayController

    //check gameboard state for winning set
    //trigger win-loss state and send to displayController

    return { currentPlayer, changePlayer }; 

})();