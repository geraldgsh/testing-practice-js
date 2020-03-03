/* eslint-disable arrow-body-style */

const average = (array) => {
  const sum = array.reduce((a, b) => a + b, 0);
  return sum / array.length;
};

const min = (array) => {
  return Math.min(...array);
};

const max = (array) => {
  return Math.max(...array);
};

const length = (array) => {
  return array.length;
};

const arrayAnalysis = (array) => {
  const object = {
    average: average(array),
    min: min(array),
    max: max(array),
    length: length(array),
  };
  return object;
};

module.exports = arrayAnalysis;
