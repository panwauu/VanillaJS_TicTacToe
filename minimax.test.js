import { miniMaxMove } from './minimax.js';

test('Some Test', () => {
    const gameboardBlanc = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];

    expect(miniMaxMove(gameboardBlanc)).toBe(0)
})