var gameboard = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]



function checkWin(){
    for(var i = 0; i<3; i++){
        if(gameboard[i][0] === gameboard[i][1] && gameboard[i][1] === gameboard[i][2] && gameboard[i][0] !== -1){return gameboard[i][0]}
        if(gameboard[0][i] === gameboard[1][i] && gameboard[1][i] === gameboard[2][i] && gameboard[0][i] !== -1){return gameboard[0][i]}
    }
    if(gameboard[0][0] === gameboard[1][1] && gameboard[1][1] === gameboard[2][2] && gameboard[1][1] !== -1){return gameboard[1][1]}
    if(gameboard[2][0] === gameboard[1][1] && gameboard[1][1] === gameboard[0][2] && gameboard[1][1] !== -1){return gameboard[1][1]}

    return false
}