const capitalize = require('./capitalize');

test('Returns capatalized string', () => {
  expect(capitalize('singh')).toBe('Singh');
});
