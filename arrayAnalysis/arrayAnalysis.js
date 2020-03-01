const arrayAnalysis = (array) => {
	const object = {
		average: average(array),
		min: min(array),
		max: max(array),
		length: length(array),
	};
	return object;
}

const average = (array) => {
	const sum = array.reduce((a, b) => {
		return a + b;
	}, 0);
	return sum / array.length
};

const min = (array) => {
	return Math.min(...array);
};

const max = (array) => {
	return Math.max(...array);
};

const length = (array) => {
	return array.length;
}

module.exports = arrayAnalysis;