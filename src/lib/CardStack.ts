import { gameState, updateGameState, getCurrentGameState, resetGame, completeGame } from "./GameState";
import type { GameState } from './GameState';

interface Card {
    name: string;
    gameState: GameState;
    id: number;
}

export let cards: Card[] = [];

export function dealHand() {
   internalCardDealer(getCurrentGameState());
   return cards;
}

function internalCardDealer(gameState: GameState) {
    switch(gameState) { 
        case 'ENTRY': { 
           cards = [
            {
                name: 'Leftist',
                gameState: 'LEFT',
                id: 1
            },
            {
                name: 'Rightist',
                gameState: 'RIGHT',
                id: 2
            }
           ];
           break; 
        } 
        case 'MIDDLE': { 
           //statements; 
           break; 
        }
        case 'LEFT': {
            cards = [
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

export function swipeLeft(card: number) {
    console.log('swiped left', card);
}

export function swipeRight(card: number) {
    console.log('swiped right', card);
}

export function throwOnBoard(card: number) {

}