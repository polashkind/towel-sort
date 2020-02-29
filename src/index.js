
// You should implement your task here.

/**
 * @param {number[][]} matrix
 * @returns {number[]}
 */
module.exports = function towelSort (matrix) {
  let result = [];

  if (!matrix) {
    return result;
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      result.push(matrix[i].reverse());
    } else {
      result.push(matrix[i]);
    }
  }

  return result.flat();
  // return !matrix ? [] : matrix.reduce((res, arr, i) => res.concat(i % 2 ? arr.reverse() : arr), []);
}
