const calculator = require('./calculator');

test('Return result of addition', () => {
  expect(calculator.add(5, 6)).toBe(11);
});

test('Return result of subtraction', () => {
  expect(calculator.subtract(9, 4)).toBe(5);
});

test('Return result of division', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('Return result of multiplication', () => {
  expect(calculator.multiply(9, 9)).toBe(81);
});
