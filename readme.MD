-[x] set up the project with HTML, CSS and Javascript files (init git repo)

-[x] store gameboard as an array inside of a gameboard object.  
    -[x] players stored in objects
    -[x] 2.c. {game.js} object to control the flow of the game itself

-[] 3. main goal is to have as LITTLE GLOBAL CODE AS POSSIBLE.  put everything inside of a module or a factory!
    -[] 3.b. rule of thumb: if you only need one of something (ie gameBoard, displayController) use a MODULE
    -[] 3.c. if you need multiples of something (ie players) create them with factories

-[x] set up the HTML and write a javascript function that will render the contents of the gameboard array to the webpage

-[x] build the functions that allow players to add marks to a specific spot on the board, AND THEN tie it to the DOM
    -[] don't forget the logic that keeps players from playing in spots that are already taken!
    -[] ***problem*** currentPlayer switch in game.js changes currentPlayer but does not change currentPlayer in gameBoard.js

-[] think carefully about where each bit of logic ought to reside.. each little bit of functionality should be able to fit in the game, player, or gameboard objects.

-[] optional -- create an AI so that a player can play against the computer
    -[] start by getting the computer to make a random legal move
    -[] try make the computer smart (unbeatable AI uses the minimax algorithm)