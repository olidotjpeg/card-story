import { findSingleCard } from '../util/helpers'
import { allCards } from './cards.store'
import type { Card, Direction, Option } from './cards.store'

export const internalCards: Card[] = []

export function drawFirst(): Card {
  let singleCard: Card | undefined

  allCards.subscribe((value: Card[]) => (singleCard = value[0]))

  return singleCard
}

export function swipe(card: Card, direction: Direction): Card[] {
  console.log(card)
  const correctOption: Option = pickOption(card, direction)

  return [getNextCard(correctOption)]
}

export function getNextCard(option: Option): Card {
  return findSingleCard(option.nextStage)
}

export function pickOption(card: Card, direction: Direction): Option | null {
  const foundOption = card.options.find(option => option.type === direction)

  if (foundOption) {
    return foundOption
  }

  return null
}
