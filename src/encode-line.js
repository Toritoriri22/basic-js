const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  if(str.length == 0) {
    return result;
  }
  let strEnd = str.replace(/([a-z])\1*/g, (elem) =>(elem.length > 1 ? elem.length + elem[0]: elem[0]));
  return strEnd;
}

module.exports = {
  encodeLine
};
