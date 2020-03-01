const reverseString = require('./reverseString');

test('reverse a string', () => {
  expect(reverseString('hammer')).toBe('remmah');
});