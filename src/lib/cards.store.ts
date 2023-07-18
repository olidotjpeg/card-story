import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Card } from './CardStack';

export const cards: Writable<Card[]> = writable([]);

const gameArray = [
    {
        id: 1,
        name: 'CardName',
        description: 'This is a cool Description text of the card',
        options: [
            {
                type: 'LEFT',
                text: 'Options 1',
                nextStage: 2
            },
            {
                type: 'RIGHT',
                text: 'Options 2',
                nextStage: 3
            }
        ]
    }
]