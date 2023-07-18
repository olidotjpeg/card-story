import { expect, test } from 'vitest';
import { getCurrentGameState } from './GameState';

test('it should return ENTRY gamestate', () => {
  expect(getCurrentGameState()).toBe('ENTRY');
});