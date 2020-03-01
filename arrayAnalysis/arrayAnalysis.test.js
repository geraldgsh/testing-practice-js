const arrayAnalysis = require('./arrayAnalysis');

const object = arrayAnalysis([1, 8, 3, 4, 2, 6]);

test('Return average', () => {
	expect(object.average).toBe(4);
});

test('Return minimun value', () => {
	expect(object.min).toBe(1);
});

test('Return maximum value', () => {
	expect(object.max).toBe(8);
});

test('Return length of array', () => {
	expect(object.length).toBe(6);
});