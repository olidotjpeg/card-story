import type { GameState } from './GameState';
import { cards, allCards, findSingleCard } from './cards.store';
import type { Card, Direction, Option } from './cards.store';

export let internalCards: Card[] = [];

export function dealHand() {
    internalCardDealer();
    cards.set(internalCards);

    return internalCards.reverse();
}

function internalCardDealer(gameState?: GameState) {
    if (!gameState) {
        internalCards = [drawFirst()];
    }
}

function drawFirst(): Card {
    let singleCard: Card | undefined;

    allCards.subscribe((value: Card[]) => singleCard = value[0]);

    return singleCard;
};

export function swipe(card: Card, direction: Direction): Card[] {
    console.log(card);
    const correctOption: Option = pickOption(card, direction);
    

    return [getNextCard(correctOption)];
}

export function getNextCard(option: Option): Card {
    return findSingleCard(option.nextStage);
}

export function throwOnBoard(card: number) {

}

function pickOption(card: Card, direction: Direction): Option {
    return card.options.find((option) => option.type === direction);
}