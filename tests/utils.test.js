import { isFunction } from '../src/utils';

describe('utils.js', () => {
  test('should check if parameter is a function', () => {
    const fn = () => {}
    expect(isFunction(fn)).toBeTruthy();
  });
});