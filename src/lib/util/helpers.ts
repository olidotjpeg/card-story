import { allCards } from '../sdk/cards.store'
import type { Card } from '../sdk/cards.store'

// Helpers
export function findSingleCard(id: number): Card | undefined {
  let singleCard: Card | undefined

  allCards.subscribe((cards: Card[]) => {
    singleCard = cards.find(card => card.id === id)
  })

  return singleCard
}
