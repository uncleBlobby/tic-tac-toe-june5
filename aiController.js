//functionality for computer player (playerO)
const aiController = (() => {
    //write function to determine possible plays 
    //any state == "empty" is a possible play
    const findEmptyCells = (emptyCells, cells) => {
        for(let i = 0; i < cells.length; i++){
            if(cells[i] == "empty"){
                emptyCells.push(i);
            }
        }
        return emptyCells;
    }
    //write function for ai to choose cell to mark
    //chooses among emptyCells
    const chooseCell = (cells) => {
        let emptyCells = [];
        findEmptyCells(emptyCells, cells);
        console.log(`empty cells: ${emptyCells}`);
        computerChoice = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        console.log(`computer wants to choose: ${computerChoice}`);
        return computerChoice;
    }
//write minimax algorithm for computer AI
     return { findEmptyCells, chooseCell }
})();