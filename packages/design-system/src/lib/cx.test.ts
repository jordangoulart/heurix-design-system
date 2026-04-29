import { describe, it, expect } from 'vitest';
import { cx } from './cx';

describe('cx', () => {
  it('joins truthy strings with single space', () => {
    expect(cx('a', 'b', 'c')).toBe('a b c');
  });
  it('skips false, null, undefined', () => {
    expect(cx('a', false, null, undefined, 'b')).toBe('a b');
  });
  it('returns empty string with no truthy values', () => {
    expect(cx(false, null, undefined)).toBe('');
  });
  it('preserves order', () => {
    expect(cx('first', 'second', 'third')).toBe('first second third');
  });
});
