const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let newArr = matrix.flat();
  let count = 0;
  for(let i = 0; i < newArr.length; i += 1) {
    if(newArr[i] == '^^') {
      count += 1;
    };
  };
  return count;
}

module.exports = {
  countCats
};
