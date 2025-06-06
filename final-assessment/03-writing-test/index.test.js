import { test, describe } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

describe('fungsi sum', () => {
  // Test case 1
  test('menjumlahkan dua bilangan positif', () => {
    const result = sum(1, 2);
    assert.strictEqual(result, 3);
  }); // <-- Each block must be closed like this

  // Test case 2
  test('menjumlahkan dengan nol', () => {
    const result = sum(5, 0);
    assert.strictEqual(result, 5);
  });

  // Test case 3
  test('menjumlahkan dua bilangan negatif', () => {
    const result = sum(-3, -4);
    assert.strictEqual(result, -7);
  });

  // Test case 4
  test('menjumlahkan bilangan positif dan negatif', () => {
    const result = sum(10, -5);
    assert.strictEqual(result, 5);
  });

  // Test case 5
  test('menjumlahkan nol dengan nol', () => {
    const result = sum(0, 0);
    assert.strictEqual(result, 0);
  });
});