import { describe, test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('Sum', () => {

  test('should add correctly', () => {
    // Arrange
    const a = 1;
    const b = 1;

    // Action
    const actualValue = sum(a, b);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });

  test('should return 0 if string passed on a parameter', () => {

    // Arrange
    const a = '5';
    const b = 4;
    // Action
    const actualValue = sum(a, b);

    const expectedValue = 0;

    // Assert
    assert.equal(actualValue, expectedValue);
  });

  test('should return 0 if string passed on b parameter', () => {

    // Arrange
    const a = 5;
    const b = '4';
    // Action
    const actualValue = sum(a, b);

    const expectedValue = 0;

    // Assert
    assert.equal(actualValue, expectedValue);
  });

  test('should return 0 if a is negative', () => {
    // Arrange
    const a = -5;
    const b = 4;

    // Act
    const actualValue = sum(a, b);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  test('should return 0 if b is negative', () => {
    // Arrange
    const a = 5;
    const b = -4;

    // Act
    const actualValue = sum(a, b);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });



});
