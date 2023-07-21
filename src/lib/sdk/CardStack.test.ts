import { expect, it } from 'vitest'
import type { Card } from './cards.store'
import { drawFirst, pickOption } from './CardStack'

const testCards: Card[] = [
  {
    id: 1,
    name: 'Introduction',
    description: 'You are in a jail cell with a knife in your hand',
    options: [
      {
        type: 'LEFT',
        text: 'Left1',
        nextStage: 2
      },
      {
        type: 'RIGHT',
        text: 'Right1',
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
        text: 'Left2',
        nextStage: 4
      },
      {
        type: 'RIGHT',
        text: 'Right2',
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

it('should return the first card with an ID of 1 from the gamesArray', () => {
  // Given
  const drawnCard = drawFirst()

  // Then
  expect(drawnCard.id).toBe(1)
})

// swipe
it('if swiping left should return the next card with id 2', () => {
  // Given
  // When
  // Then
})

// getNextCard

// pickOption
it('should return 3 different options from a given card set', () => {
  // Given
  const card1 = testCards[0]
  const card2 = testCards[1]
  const card3 = testCards[2]

  // Then
  expect(pickOption(card1, 'LEFT').text).toBe('Left1')
  expect(pickOption(card2, 'RIGHT').text).toBe('Right2')
  expect(pickOption(card3, 'LEFT')).toBe(null)
})
