const checkWin = require('./script.js');

test('Some Test', () => {
    const gameboardBlanc = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    const gameboardVert = [[1,-1,-1],[1,-1,-1],[1,-1,-1]];
    const gameboardHori = [[1,1,1],[-1,-1,-1],[-1,-1,-1]];
    const gameboardDiag = [[1,-1,-1],[-1,1,-1],[-1,-1,1]];
    const gameboardDiag2 = [[-1,-1,0],[-1,0,-1],[0,-1,-1]];
    const gameboardNoWin = [[1,1,0],[-1,0,1],[1,1,0]];

    expect(checkWin(gameboardBlanc)).toBe(-1)
    expect(checkWin(gameboardVert)).toBe(1)
    expect(checkWin(gameboardHori)).toBe(1)
    expect(checkWin(gameboardDiag)).toBe(1)
    expect(checkWin(gameboardDiag2)).toBe(0)
    expect(checkWin(gameboardNoWin)).toBe(-1)
})