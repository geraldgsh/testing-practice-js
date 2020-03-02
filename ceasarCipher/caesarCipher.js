
const caesarCipher = (string, move) => {
	let cipher = '';
	for (let i = 0; i < string.length; i++) {
		const ascii = string[i].charCodeAt();
		if (ascii >= 65 && ascii <= 90) {
			cipher += String.fromCharCode(((string.charCodeAt(i) + move - 65) % 26) + 65);
		} else if (ascii >= 97 && ascii <= 122) {
			cipher += String.fromCharCode(((string.charCodeAt(i) + move - 97) % 26) + 97);
		} else {
			cipher += string[i];
		}
	}
	return cipher;
}

module.exports = caesarCipher;
