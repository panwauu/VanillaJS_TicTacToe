import {checkWin} from './script.js'

export function miniMaxMove(gameboard) {
    for (let i = 0; i < 9; i++) {
        if(getBoard(gameboard,i)<0){return i}
    }

    return -1
}

/*function minimax(node, maximizingPlayer){
    if (node is a terminal node):
        return 

    if maximizingPlayer then
        value := −∞
        for each child of node do
            value := max(value, minimax(child, depth − 1, FALSE))
        return value
    else (* minimizing player *)
        value := +∞
        for each child of node do
            value := min(value, minimax(child, depth − 1, TRUE))
        return value
}*/

function setBoard(board, i, val) {
    board[Math.floor(i / 3)][i % 3] = val
    return board
}

function getBoard(board, i) {
    return (board[Math.floor(i / 3)][i % 3])
}