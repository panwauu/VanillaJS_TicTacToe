import { checkWin, getBoard, setBoard } from './script.js'

export function miniMaxMove(board, computerIndex) {
    let moves = getPossibleMoves(board)
    let favMove = moves[0]
    let bestValue = -Infinity
    for (var i = 0; i < moves.length; i++) {
        setBoard(board, moves[i], computerIndex)
        let moveValue = minimax(board, computerIndex, false, 1)
        setBoard(board, moves[i], -1)
        if(moveValue > bestValue){ 
            bestValue = moveValue
            favMove = moves[i]
        }
    }
    return favMove
}

export function minimax(gameboard, computerIndex, maximizingPlayer, numberMovesNecessary) {
    let winner = checkWin(gameboard)
    if (winner >= 0) {
        if (winner === computerIndex) { return 1/numberMovesNecessary }
        else if (winner === 2) { return 0 }
        else { return -1 }
    }

    let moves = getPossibleMoves(gameboard)
    if (maximizingPlayer) {
        let value = -Infinity
        moves.forEach(move => {
            setBoard(gameboard, move, computerIndex)
            let moveValue = minimax(gameboard, computerIndex, false, numberMovesNecessary+1)
            setBoard(gameboard, move, -1)
            value = Math.max(value, moveValue)
        })
        return value
    }
    else {
        let value = Infinity
        moves.forEach(move => {
            setBoard(gameboard, move, 1-computerIndex)
            let moveValue = minimax(gameboard, computerIndex, true, numberMovesNecessary+1)
            setBoard(gameboard, move, -1)
            value = Math.min(value, moveValue)
        })
        return value
    }
}

export function getPossibleMoves(gameboard) {
    let moves = []
    for (let i = 0; i < 9; i++) {
        if (getBoard(gameboard, i) < 0) { moves.push(i) }
    }
    return moves
}