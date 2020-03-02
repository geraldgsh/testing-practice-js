const caesarCipher = require('./caesarCipher');

test('Returns cipher at 1 letter ahead', () => {
	expect(caesarCipher('At TaCk', 1)).toBe('Bu UbDl');
});

test('Returns cipher at 5 letters ahead', () => {
	expect(caesarCipher('MuN D@ne', 3)).toBe('PxQ G@qh');
})

test('Returns cipher at 7 letters ahead', () => {
	expect(caesarCipher('H@Mmer T1me!!', 5)).toBe('M@Rrjw Y1rj!!');
})

test('Returns cipher at 7 letters ahead', () => {
	expect(caesarCipher('0H h@1l C@esar!!', 7)).toBe('0O o@1s J@lzhy!!');
})