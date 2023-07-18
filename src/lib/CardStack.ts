import { updateGameState, getCurrentGameState, resetGame, completeGame } from "./GameState";
import type { GameState } from './GameState';
import { cards } from './cards.store';

export interface Card {
    name: string;
    gameState: GameState;
    id: number;
    description: string;
    leftOption: string;
    rightOption: string;
}

export let internalCards: Card[] = [];

export function dealHand() {
    internalCardDealer(getCurrentGameState());
    cards.set(internalCards);

    return internalCards;
}

function internalCardDealer(gameState: GameState) {
    switch(gameState) { 
        case 'ENTRY': { 
            const newCards: Card[] = [{ name: 'EntryCard', gameState: 'ENTRY', id: 1, description: 'You are in a jail cell, what do you want to do?', leftOption: 'Break open the cell', rightOption: 'Stab myself with a knife' }]
            internalCards = [...newCards];
            break; 
        } 
        case 'MIDDLE': {
            console.log('middle')
            const newCards: Card[] = [{ name: 'DoorCard', id: 4, gameState: 'MIDDLE', description: 'There is a door infront of you, how will you proceed?', leftOption: 'Ready your knife and go through the door', rightOption: 'Stab myself with a knife' }]
            internalCards = [...newCards]
            break; 
        }
        case 'LEFT': {
            const newCards: Card[] = [
                {
                    name: 'Middlist',
                    id: 3,
                    gameState: 'END'
                },
                {
                    name: 'Rightist',
                    id: 2,
                    gameState: 'RIGHT'
                }
            ]
            internalCards = [...newCards]
            break;
        }
        case 'RIGHT': {
            resetGame();
            break;
        }
        case 'END': {
            completeGame();
            break;
        }
        default: { 
           resetGame();
           break; 
        } 
     } 
}

type Direction = 'LEFT' | 'RIGHT';

export function swipe(card: number, direction: Direction, gameState: GameState) {
    // updateGameState
    const currentGameState = getCurrentGameState();
    if (direction === 'LEFT' && currentGameState === 'ENTRY') {
        updateGameState('MIDDLE');
    }

    if (direction === 'LEFT' && currentGameState === 'MIDDLE') {
        updateGameState('END')
    }

    if (direction === 'RIGHT' && currentGameState === 'MIDDLE') {
        updateGameState('RIGHT');
    }

    if (direction === 'RIGHT' && currentGameState === 'ENTRY') {
        updateGameState('RIGHT');
    }

    dealHand();
}

export function throwOnBoard(card: number) {

}