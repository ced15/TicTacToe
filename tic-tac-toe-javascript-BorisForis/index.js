let gameTurn = 0;
let currentPlayer;
let board;
let lastPlayer;
let bool = true;
let startBool = true
// this function will be called whenever the user changes
// the `select` input labeled `please select game mode`
function setGameMode(selectedValue) {
    switch (selectedValue) {
        case 'human-human':
            isPlayerXHuman = true;
            isPlayerYHuman = true;
            setHTMLvisibilityForInputHumanCoordinates(true);
            setHTMLvisibilityForInputAiCoordinatesInput(false);
            break;
        case 'human-ai':
            isPlayerXHuman = true;
            isPlayerYHuman = false;
            setHTMLvisibilityForInputHumanCoordinates(true);

            setHTMLvisibilityForInputAiCoordinatesInput(false);
            break
        case 'ai-ai':
            isPlayerXHuman = false;
            isPlayerYHuman = false;
            setHTMLvisibilityForInputHumanCoordinates(false);

            setHTMLvisibilityForInputAiCoordinatesInput(true);
            displayMessage("Player X's turn");
            break
    }
    resetBoard();

    setHTMLvisibilityForInputGameMode(false);
    setHTMLvisibilityForButtonLabeledReset(true);
    displayMessage("Player X's turn");



}

// this function is called whenever the user presses the `enter`
// key in the input box labeled `enter coordinates`
// paramerter: input - the content of the input box
function processHumanCoordinate(input) {
    console.log(`'processHumanCoordinate('${input}')`);
    if (gameTurn % 2 === 0) {
        displayMessage("It's O's turn.")
        currentPlayer = 'X';
    } else {
        displayMessage("It's X's turn.")
        currentPlayer = 'O';
    }

    let coordinates = extractCoordinates(input);
    console.log(coordinates)
    board[coordinates.x][coordinates.y] = currentPlayer;

    const winningPlayer = getWinningPlayer(board);
    if (winningPlayer) {
        displayMessage(`Player ${currentPlayer} has won !`);
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        setHTMLvisibilityForInputHumanCoordinates(false)
    }


    gameTurn += 1;
    if (gameTurn == 9) {
        displayMessage(`It's a tie!`);
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        setHTMLvisibilityForInputHumanCoordinates(false)
    }
    console.log(gameTurn)
    displayBoard(board);
    if (isPlayerYHuman == false) {
        setHTMLvisibilityForInputAiCoordinatesInput(true)
        setHTMLvisibilityForInputHumanCoordinates(false)
    }

    // TODO: add a message stating either
    // Player X's turn
    // Player O's turn
    // It's a tie
    // Player X won 
    // Player O won 

    // TODO: add conditions to hide the coordinates screen for 
    // the human player & show for the button to generate AI 
    // coordinates
}

// this function is called whenever the user presses
// the button labeled `Generate AI coordinates`
function processAICoordinate() {
    if (gameTurn % 2 === 0) {
        currentPlayer = 'X';
        displayMessage("Player 0's turn");
        if (isPlayerXHuman === false) {
            AI();
        }

    }
    else {
        currentPlayer = '0';
        AI();
    }
    
    displayMessage("Player X's turn");
    if (isPlayerXHuman === true) {
        setHTMLvisibilityForInputAiCoordinatesInput(false);
        setHTMLvisibilityForInputHumanCoordinates(true);
    }
    
 
    // let coordsRdm;
    // do {
    //     coordsRdm = {
    //         x: Math.floor(Math.random() * 3),
    //         y: Math.floor(Math.random() * 3)
    //     };
    // } while (board[coordsRdm.x][coordsRdm.y] !== '');

    // board[coordsRdm.x][coordsRdm.y] = currentPlayer;


    const winningPlayer = getWinningPlayer(board);
    if (winningPlayer) {
        displayMessage(`Player ${currentPlayer} has won !`);
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        setHTMLvisibilityForInputHumanCoordinates(false)

    }

    gameTurn += 1;

    if (gameTurn == 9) {
        displayMessage(`It's a tie!`);
        setHTMLvisibilityForInputAiCoordinatesInput(false)
        setHTMLvisibilityForInputHumanCoordinates(false)
    }

    if (isPlayerXHuman == false && isPlayerYHuman ===false) {
        if (winningPlayer) {
            displayMessage(`Player ${currentPlayer} has won !`);
            setHTMLvisibilityForInputAiCoordinatesInput(false)
            setHTMLvisibilityForInputHumanCoordinates(false)
        }
        else {
            if (gameTurn == 9) {
                displayMessage(`It's a tie!`);
                setHTMLvisibilityForInputAiCoordinatesInput(false)
                setHTMLvisibilityForInputHumanCoordinates(false)
            }
            else {
                setHTMLvisibilityForInputAiCoordinatesInput(true)
                setHTMLvisibilityForInputHumanCoordinates(false)
            }
        }

    }z
    displayBoard(board);
}

// this function is called when the user clicks on 
// the button labeled `Restart Game`
function resetGame() {
    // Reset game board state
    resetBoard();

    // Hide AI coordinates input
    setHTMLvisibilityForInputAiCoordinatesInput(false);

    // Hide human player coordinates input
    setHTMLvisibilityForInputHumanCoordinates(false);

    // Show game mode selection
    setHTMLvisibilityForInputGameMode(true);

    // Hide restart button
    setHTMLvisibilityForButtonLabeledReset(false);

    // Update game board display
    displayBoard(board);

    // Clear any message displayed
















    
    displayMessage("");

    console.log("Game reset.");

    location.reload()

}

// this function should change from A1..C3 to coordinates
// that are present in the `board` global variable
function extractCoordinates(input) {
    // if(input == "A1" && board[0][0] !== lastPlayer){
    //     lastPlayer = currentPlayer
    //     return {x: 0, y: 0}
    // }
    // else if(input == "A2" && board[0][1] !== lastPlayer){
    //     lastPlayer = currentPlayer
    //     return {x: 0, y: 1}
    // }
    // else if(input == "A3" && board[0][2] !== lastPlayer){
    //     lastPlayer = currentPlayer
    //     return {x: 0, y: 2}
    // }
    // else if(input == "B1" && board[1][0] !== lastPlayer){
    //     lastPlayer = currentPlayer
    //     return {x: 1, y: 0}
    // }
    // else if(input == "B2" && board[1][1] !== lastPlayer){
    //     lastPlayer = currentPlayer
    //     return {x: 1, y: 1}
    // }
    // else if(input == "B3" && board[1][2] !== lastPlayer){
    //     lastPlayer = currentPlayer
    //     return {x: 1, y: 2}
    // }
    // else if(input == "C1" && board[2][0] !== lastPlayer){
    //     lastPlayer = currentPlayer
    //     return {x: 2, y: 0}
    // }
    // else if(input == "C2" && board[2][1] !== lastPlayer){
    //     lastPlayer = currentPlayer
    //     return {x: 2, y: 1}
    // }
    // else if(input == "C3" && board[2][2] !== lastPlayer){
    //     lastPlayer = currentPlayer
    //     return{ x: 2, y: 2}
    // }

    let boardPositions = {
        A: 0, B: 1, C: 2, a: 0, b: 1, c: 2
    };

    for (let i = 0; i < 3; i++) {
        let row = boardPositions[input[0]];
        let col = Number(input[1]) - 1;

        if (row === undefined || col < 0 || col > 2) {
            console.log(displayMessage("Invalid coordinate entered"));
            return null;
        } else if (board[row][col] !== '') {
            console.log(displayMessage("Position is already taken on board"));
            return null;
        }
        else {
            board[row][col] = currentPlayer;
            lastPlayer = currentPlayer;
            return { x: row, y: col };
        }
    }
    return null;
}
function extractCoordinates2(input){
    return {x: ["A, B, C"].indexOf(input[0].toUpperCase()),
            y: input[1] - 1
    }
}

// this function should return `X` or `O` or undefined (carefull it's not a string )
// based on interpreting the values in the board variable
function getWinningPlayer(board) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return true;

        }

    }

    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] !== '' && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
            return true
        }
    }

    // Check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return true;
    }

    
    // If no winning player found, return undefined
    return false;
}

function AI() {

    if(currentPlayer === 'X'){
        enemy = '0';
    } else {
        enemy = 'X';
    }

    if (board[1][1] === '') { 
        board[1][1] = currentPlayer; startBool = false;
        console.log("picks center");
        return;
    }
    
    
    if (goForWin(currentPlayer,currentPlayer)) 
        return;
    else if(goForWin(enemy,currentPlayer)) 
        return;
    
    if (board[1][1] !== '' && startBool === true) {
        board[0][0] = currentPlayer;
        console.log("picks corner 1");
        startBool = false;
        return;
    }

    if((board[1][2] !== '' && board[2][1] !== '') && (board[1][1] !== '' && gameTurn === 3)){
        board[2][0] = currentPlayer;
        console.log("special case 1")
        return;
    }

    if((board[0][2] !== '' && board[2][0] !== '') && (board[1][1] !== '' && gameTurn === 3)){
        board[0][1] = currentPlayer;
        console.log("special case 2");
        return;
    }

    if((board[0][0] !== '' && board[2][2] !== '') && (board[1][1] !== '' && gameTurn === 3)){
        if(board[1][1]==='0'){
            board[0][1] = currentPlayer;
            console.log("special case 3");
        }
        else if(board[1][1]==='X'){
            board[2][0] = currentPlayer;
            console.log("special case 4");

        }
        return;
    }

    if((board[0][0] !== '' && board[2][1] !== '') && (board[1][1] !== '' && gameTurn === 3)){
        board[2][0] = currentPlayer;
        console.log("special case 5");
        return;
    }

    if((board[2][0] !== '' && board[1][2] !== '') && (board[1][1] !== '' && gameTurn === 3)){
        board[2][2] = currentPlayer;
        console.log("special case 6");
        return;
    }



    for(let i=0;i<board.length;i++){
        console.log("picks next position");
        for(let j=0;j<board[i].length;j++){
            if(board[i][j] === ''){
                board[i][j] = currentPlayer;
                return;
            }
        }
    }
}

function empty(col0, col1, col2, bool) {
    if (bool === false) {
        if (col0 === '') return 0;
        if (col1 === '') return 1;
        if (col2 === '') return 2;
        return 1;
    }
    else{
        if (col0 === '') return 2;
        if (col1 === '') return 1;
        if (col2 === '') return 0;       
        return 1;
    }
}

function pickCorner() {
    let counter = Math.floor(Math.random() * 4) + 1;
    console.log("picks corner "+counter);
    if (counter === 1) { 
        if (board[0][0] === '') {
            board[0][0] = currentPlayer;
        }
    }
    if (counter === 2) { 
        if (board[0][2] === '') {
            board[0][2] = currentPlayer;
        }
    }
    if (counter === 3) { 
        if (board[2][0] === '') {
            board[2][0] = currentPlayer;
        }
    }
    if (counter === 4) { 
        if (board[2][2] === '') {
        board[2][2] = currentPlayer;
        }
    }
}

/**
 * Checks whether the AI can win or not.
 * @param {*} currentPlayer object
 * @param {*} truePlayer object
 * @returns boolean
 */
function goForWin(currentPlayer, truePlayer){

    for (let i = 0; i < board.length; i++) {
            if ((board[i][0] === board[i][1] || board[i][1] === board[i][2] || board[i][0] === board[i][2]) && ((board[i][0] == currentPlayer && board[i][1] === currentPlayer) || (board[i][1] === currentPlayer && board[i][2] === currentPlayer) || (board[i][2] === currentPlayer && board[i][0] === currentPlayer))) {
                if (board[i][empty(board[i][0], board[i][1], board[i][2], false)] === '') {
                    board[i][empty(board[i][0], board[i][1], board[i][2], false)] = truePlayer;
                    console.log("horizontal line filled");
                    return true;
                }
            }
            if ((board[0][i] === board[1][i] || board[1][i] === board[2][i] || board[0][i] === board[2][i]) && ((board[0][i] === currentPlayer && board[1][i] === currentPlayer) || (board[1][i] ===currentPlayer && board[2][i] === currentPlayer) || (board[2][i] === currentPlayer && board[0][i] === currentPlayer))) {
                if (board[empty(board[0][i], board[1][i], board[2][i], false)][i] === '') {
                    board[empty(board[0][i], board[1][i], board[2][i], false)][i] = truePlayer;
                    console.log("vertical line filled");
                    return true;
                }
            }
    }
        if ((board[0][0] === board[1][1] || board[0][0] === board[2][2] || board[1][1] === board[2][2]) && ((board[0][0] === currentPlayer && board[1][1] === currentPlayer) || (board[1][1] === currentPlayer && board[2][2]) || (board[0][0] === currentPlayer && board[2][2] === currentPlayer))) {
            if (board[empty(board[0][0], board[1][1], board[2][2], false)][empty(board[0][0], board[1][1], board[2][2], false)] === '') {
                board[empty(board[0][0], board[1][1], board[2][2], false)][empty(board[0][0], board[1][1], board[2][2], false)] = truePlayer;
                console.log("principal diagonal filled");
                return true;
            }
        }
        if ((board[2][0] === board[1][1] || board[1][1] === board[0][2] || board[0][2] === board[2][0]) && ((board[2][0] === currentPlayer && board[1][1] === currentPlayer) || (board[1][1] === currentPlayer && board[0][2]) || (board[2][0] === currentPlayer && board[0][2] === currentPlayer))) {
            if (board[empty(board[0][2], board[1][1], board[2][0], false)][empty(board[0][2], board[1][1], board[2][0], true)] === '') {
                board[empty(board[0][2], board[1][1], board[2][0], false)][empty(board[0][2], board[1][1], board[2][0], true)] = truePlayer;
                console.log("secondary diagonal filled");
                return true;
            }
        }
    return false;
}
