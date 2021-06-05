-[] 1. set up the project with HTML, CSS and Javascript files (init git repo)

-[] 2. store gameboard as an array inside of a gameboard object.  
    -[] 2.b. players stored in objects
    -[] 2.c. object to control the flow of the game itself

-[] 3. main goal is to have as LITTLE GLOBAL CODE AS POSSIBLE.  put everything inside of a module or a factory!
    -[] 3.b. rule of thumb: if you only need one of something (ie gameBoard, displayController) use a MODULE
    -[] 3.c. if you need multiples of something (ie players) create them with factories

-[] 4. set up the HTML and write a javascript functio nthat will render the contents of the gameboard array to the webpage

-[] 5. build the functions that allow players to add marks to a specific spot on the board, AND THEN tie it to the DOM
    -[] 5.b. don't forget the logic that keeps players from playing in spots that are already taken!

-[] 6. think carefully about where each bit of logic ought to reside.. each little bit of functionality should be able to fit in the game, player, or gameboard objects.

-[] 7. optional -- create an AI so that a player can play against the computer
    -[] 7.b. start by getting the computer to make a random legal move
    -[] 7.c. try make the computer smart (unbeatable AI uses the minimax algorithm)