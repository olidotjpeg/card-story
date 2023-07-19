import {it, expect} from 'vitest';
import { findSingleCard } from './helpers';

it('should return a single card from the list of given cards', () => {
    // Given
    const testId = 3;
    const failId = 100;

    // Then
    expect(findSingleCard(testId).id).toBe(3);
    expect(findSingleCard(failId)).toBe(undefined);
});