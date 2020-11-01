import { miniMaxMove, getPossibleMoves, minimax } from './minimax.js';

test('Test the correct choice of minimax algorithm without optimizations', () => {
    const gameboardBlanc = [[1,1,-1],[0,0,-1],[1,-1,-1]];
    expect(miniMaxMove(gameboardBlanc,1)).toBe(2)
    expect(miniMaxMove(gameboardBlanc,0)).toBe(5)

    const gameboard2 = [[1,0,-1],[1,-1,-1],[-1,-1,0]];
    expect(miniMaxMove(gameboard2,1)).toBe(6)
})

test('Test the correct choice of minimax algorithm without optimizations - winning possible', () => {
    const gameboardBlanc = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    expect(minimax(gameboardBlanc,1,true,0)).toBe(0)

    const gameboard1 = [[1,1,-1],[0,0,-1],[-1,-1,-1]];
    expect(minimax(gameboard1,1,true,0)).toBe(1)
    expect(minimax(gameboard1,0,true,0)).toBe(1)

    const gameboard2 = [[1,-1,-1],[-1,-1,0],[-1,-1,-1]];
    expect(minimax(gameboard2,1,true,0)).toBe(0.2)

    const gameboard3 = [[-1,1,0],[-1,-1,-1],[0,-1,0]];
    expect(minimax(gameboard3,1,true,0)).toBe(-1)

    const gameboard4 = [[-1,1,0],[-1,-1,-1],[-1,-1,-1]];
    expect(minimax(gameboard4,1,true,0)).toBe(0)
})

test('Test the correct choice of minimax algorithm without optimizations - winning not possible', () => {
    const gameboardOneChoice =  [[1,0,-1],[0,0,0],[1,0,1]];
    expect(minimax(gameboardOneChoice,1,true,0)).toBe(-1)

    const gameboardTwoChoice =  [[0,0,-1],[1,1,0],[0,0,-1]];
    expect(minimax(gameboardTwoChoice,1,true,0)).toBe(-1)
})

test('Test the correct choice of minimax algorithm without optimizations with only one option', () => {
    const gameboard0WinPossible =  [[1,1,0],[0,0,-1],[1,0,1]];
    expect(minimax(gameboard0WinPossible,1,true,0)).toBe(0)
    expect(minimax(gameboard0WinPossible,0,true,0)).toBe(1)

    const gameboard1WinPossible = [[1,1,-1],[0,0,1],[1,0,1]];
    expect(minimax(gameboard1WinPossible,1,true,0)).toBe(1)
    expect(minimax(gameboard1WinPossible,0,true,0)).toBe(0)

    const gameboardNoWinPossible = [[1,-1,0],[0,1,1],[1,0,0]];
    expect(minimax(gameboardNoWinPossible,1,true,0)).toBe(0)
    expect(minimax(gameboardNoWinPossible,0,true,0)).toBe(0)
})

test('Test creation of possible Moves', () => {
    const gameboardBlanc = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    const gameboard1 = [[1,1,1],[-1,-1,-1],[-1,-1,-1]];
    const gameboard2 = [[-1,1,-1],[-1,1,-1],[-1,1,1]];
    expect(getPossibleMoves(gameboardBlanc)).toEqual([0,1,2,3,4,5,6,7,8])
    expect(getPossibleMoves(gameboard1)).toEqual([3,4,5,6,7,8])
    expect(getPossibleMoves(gameboard2)).toEqual([0,2,3,5,6])
})