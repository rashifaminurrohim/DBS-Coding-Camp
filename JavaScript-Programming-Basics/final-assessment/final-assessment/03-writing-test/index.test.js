import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('should add correctly', () => {
  // Arrange
  const a = 1;
  const b = 1;

  // Action
  const actualValue = sum(a,b);

  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});