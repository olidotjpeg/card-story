import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface Card {
    id: number;
    name: string;
    description: string;
    options: Option[];
}

export type Direction = 'LEFT' | 'RIGHT' | 'UP';

export interface Option {
    type: Direction;
    text: string;
    nextStage: number;
}

const gameArray: Card[] = [
    {
        id: 1,
        name: 'Introduction',
        description: 'You are in a jail cell with a knife in your hand',
        options: [
            {
                type: 'LEFT',
                text: 'Use the knife to open the cell',
                nextStage: 2
            },
            {
                type: 'RIGHT',
                text: 'Kill yourself with the knife',
                nextStage: 3
            }
        ]
    },
    {
        id: 2,
        name: 'Where is the exit?',
        description: 'Outside the cell the room has no door, how do you proceed?',
        options: [
            {
                type: 'LEFT',
                text: 'Check the corpse on the floor',
                nextStage: 4
            },
            {
                type: 'RIGHT',
                text: 'Check the drawers of the desk',
                nextStage: 5
            }
        ]
    },
    {
        id: 3,
        name: 'YOU DIED',
        description: 'You have killed yourself idiot...',
        options: []
    }
]

export const cards: Writable<Card[]> = writable([]);
export const allCards: Writable<Card[]> = writable(gameArray);