const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numToStr = n.toString();
  let result = 0;
  for( let i = 0; i < numToStr.length; i += 1) {
    let replaceStr = numToStr.replace(numToStr[i], '');
    let strToNum = Number(replaceStr);
    if(strToNum > result) {
      result = strToNum;
    } 
  }
  return result;
}

module.exports = {
  deleteDigit
};
