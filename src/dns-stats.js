const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let previousKey = '';
  if(domains.length == 0) {
    return result;
  };

  for(let i = 0; i < domains.length; i += 1) {
    let separateArr = domains[i].split('.');
    previousKey = '';
    for(let j = separateArr.length - 1; j >= 0; j -= 1) {
      let sum = '.' + separateArr[j];
      previousKey += sum;
      if(result.hasOwnProperty(previousKey)) {
        result[previousKey] += 1;
      } else {
        result[previousKey] = 1;
      }
    }
  }
  return result
}

module.exports = {
  getDNSStats
};
