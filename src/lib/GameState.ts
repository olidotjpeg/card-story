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

export function completeGame() {
    alert('You Beat the Game');
}

export function resetGame(): void {
    gameState = 'ENTRY';
}