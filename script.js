import { miniMaxMove } from './minimax.js';

let gameboard = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]
const X_CLASS = 'x'
const O_CLASS = 'o'
let cellElements = document.querySelectorAll('[data-cell]')
let htmlBoard = document.getElementById('board')
let winningMessageElement = document.getElementById('winningMessage')
let restartButtonOne = document.getElementById('restartButtonOne')
let restartButtonTwo = document.getElementById('restartButtonTwo')
let winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let oTurn = true
let computerTurn = 2

window.addEventListener('DOMContentLoaded', (event) => {
    cellElements = document.querySelectorAll('[data-cell]')
    htmlBoard = document.getElementById('board')
    winningMessageElement = document.getElementById('winningMessage')
    restartButtonOne = document.getElementById('restartButtonOne')
    restartButtonTwo = document.getElementById('restartButtonTwo')
    winningMessageTextElement = document.querySelector('[data-winning-message-text]')

    restartButtonOne.addEventListener('click', startGameOne)
    restartButtonTwo.addEventListener('click', startGameTwo)
});

function startGameOne() {
    oTurn = Math.random() >= 0.5;
    computerTurn = Math.round(Math.random())
    restartGame()
    if ((oTurn === true && computerTurn === 0) || (oTurn === false && computerTurn === 1)) {
        processNewInput(miniMaxMove(gameboard, computerTurn))
    }
}

function startGameTwo() {
    oTurn = Math.random() >= 0.5;
    computerTurn = 2
    restartGame()
}

function restartGame() {
    winningMessageElement.classList.remove('show')
    gameboard = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]
    drawBoard(gameboard)
}

function drawBoard(board) {
    // Draw Cells
    for (let i = 0; i < cellElements.length; i++) {
        let cell = cellElements[i]
        cell.classList.remove(X_CLASS)
        cell.classList.remove(O_CLASS)
        if (getBoard(board, i) === 0) {
            cell.classList.add(O_CLASS)
            cell.removeEventListener('click', handleClick)
        }
        else if (getBoard(board, i) === 1) {
            cell.classList.add(X_CLASS)
            cell.removeEventListener('click', handleClick)
        }
        else {
            cell.addEventListener('click', handleClick, { once: true })
        }
    }

    // Set Hover State
    if (oTurn) {
        htmlBoard.classList.remove(X_CLASS)
        htmlBoard.classList.add(O_CLASS)
    }
    else {
        htmlBoard.classList.remove(O_CLASS)
        htmlBoard.classList.add(X_CLASS)
    }
}

function handleClick(e) {
    const cell = e.target
    const i = cell.id
    processNewInput(i)
    if (computerTurn !== 2 && checkWin(gameboard) < 0) {
        processNewInput(miniMaxMove(gameboard, computerTurn))
    }
}

function processNewInput(cellNumber) {
    const newClass = oTurn ? 0 : 1
    setBoard(gameboard, cellNumber, newClass)
    oTurn = !oTurn
    drawBoard(gameboard)
    if (checkWin(gameboard) >= 0) {
        endGame()
    }
}

export function setBoard(board, i, val) {
    board[Math.floor(i / 3)][i % 3] = val
    return board
}

export function getBoard(board, i) {
    return (board[Math.floor(i / 3)][i % 3])
}

export function checkWin(board) {
    for (var i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== -1) { return board[i][0] }
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== -1) { return board[0][i] }
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1] !== -1) { return board[1][1] }
    if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[1][1] !== -1) { return board[1][1] }

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[i][j] < 0) { return -1 }
        }
    }

    return 2
}

function endGameMessage(winner) {
    let text = ''

    if (winner === 2) {
        text = "Draw!"
    }
    else if (computerTurn !== 2) {
        if (computerTurn === winner) {
            text = "You lost!"
        }
        else {
            text = "You won!"
        }
    }
    else {
        if (winner === 0) {
            text = "O won!"
        }
        else {
            text = "X won!"
        }
    }

    return text
}

function endGame() {
    for (let i = 0; i < cellElements.length; i++) {
        let cell = cellElements[i]
        cell.removeEventListener('click', handleClick)
    }
    winningMessageElement.classList.add('show')
    winningMessageTextElement.innerText = endGameMessage(checkWin(gameboard))
}