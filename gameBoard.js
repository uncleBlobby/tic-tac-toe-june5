//write IIFE module for gameBoard object
//store gameBoard state as array inside of the gameBoard object

const gameBoard = (() => {
    //state holds the status of each gameboard cell from cell[0] - cell[8]
    //initialized to "empty" (later will be claimed "x" or "o")
    const state =   [
                    "empty", "empty", "empty",
                    "empty", "empty", "empty",
                    "empty", "empty", "empty"
                    ]

    return { state };
})();