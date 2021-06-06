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

    //check for draw
    const checkDraw = (state) => {
        //condition: if any state is "empty"
        const isAnyEmpty = (element) => element == "empty";
        return !state.some(isAnyEmpty);
    }
    
    //check gameboard state for winning set
    
    const checkWinners = (state, player, marker) => {
        let gameOver = false;
        if  ( 
               ((state[0] != "empty") && (state[0] == marker) && (state[1] == marker) && (state[2] == marker))
            || ((state[3] != "empty") && (state[3] == marker) && (state[4] == marker) && (state[5] == marker))
            || ((state[6] != "empty") && (state[6] == marker) && (state[7] == marker) && (state[8] == marker))
            || ((state[0] != "empty") && (state[0] == marker) && (state[3] == marker) && (state[6] == marker))
            || ((state[1] != "empty") && (state[1] == marker) && (state[4] == marker) && (state[7] == marker))
            || ((state[2] != "empty") && (state[2] == marker) && (state[5] == marker) && (state[8] == marker))
            || ((state[0] != "empty") && (state[0] == marker) && (state[4] == marker) && (state[8] == marker))
            || ((state[2] != "empty") && (state[2] == marker) && (state[4] == marker) && (state[6] == marker))
            )
                {
                    let gameWinner = player;
                    gameOver = true;
                    console.log(`and the winner is: ${gameWinner}`);
                    displayController.drawEndGamePopup(gameWinner);
                }
        
        if((checkDraw(state) == true) && (gameOver == false)){
            let gameWinner = "nobody";
            console.log(`and the winner is: ${gameWinner}`);
            displayController.drawEndGamePopup(gameWinner);
        }
    }
    
    //trigger win-loss state and send to displayController

    return { changePlayer, checkWinners, checkDraw }; 

})();