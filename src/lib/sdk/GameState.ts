import { dealHand } from "./CardStack";

export type GameState = 'ENTRY' | 'MIDDLE' | 'LEFT' | 'RIGHT' | 'END';

export let gameState: GameState = 'ENTRY';

export function getCurrentGameState(): GameState {
    return gameState;
}

export function updateGameState(newGameState: GameState): GameState {
    gameState = newGameState;

    if (newGameState === 'END') {
        completeGame();
        return 'END';
    }

    return gameState;
}

export function completeGame(): void {
    alert('You Beat the Game, and we are resetting');
    gameState = 'ENTRY';
    dealHand();
}

export function resetGame(): void {
    alert('You lost, game has been reset');
    gameState = 'ENTRY';
    dealHand();
}