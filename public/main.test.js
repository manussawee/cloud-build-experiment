const { multiply } = require('./main');

test('4 * 5 = 20', () => {
  expect(multiply(4, 5)).toBe(20);
});

test('3 * 0 = 0', () => {
  expect(multiply(3, 0)).toBe(0);
});

test('0 * 4 = 0', () => {
  expect(multiply(0, 4)).toBe(0);
});

test('-3 * 2 = -6', () => {
  expect(multiply(-3, 2)).toBe(-6);
});

test('-3 * -2 = 6', () => {
  expect(multiply(-3, -2)).toBe(6);
});