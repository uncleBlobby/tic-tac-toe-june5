//game Object controls flow of game
//called once at start of game

const game = (() => {

    //draw initial empty game board and send to displayController
    displayController.drawEmptyBoard();

    //add listeners to board cells (click events to claim cells)
    displayController.addListeners();
    //change active player after each move
    
    const changePlayer = () => {
        if(playerX.isActive == true){
            playerX.isActive = false;
            playerO.isActive = true;
            console.log(`swapped players`);
        } else if(playerO.isActive == true){
            playerO.isActive = false;
            playerX.isActive = true;
            console.log(`swapped players back`);
        }
        console.log(`current playerX isActive: ${playerX.isActive}`);
        console.log(`current playerO isActive: ${playerO.isActive}`);

    }


    //check player moves for validity against gameboard state
    //update gameboard state after each move and send to displayController

    //check gameboard state for winning set
    //trigger win-loss state and send to displayController

    return { changePlayer }; 

})();