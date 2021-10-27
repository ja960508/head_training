'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux' ? fs.readFileSync('/dev/stdin').toString() : `4`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(weight) {
  const small = 3;
  const big = 5;
  let bags = 0;

  while (weight !== 0) {
    if (weight % big === 0) {
      bags += parseInt(weight / big);
      weight -= parseInt(weight / big) * big;
    } else {
      weight -= small;

      bags++;
    }

    if (weight < 0) {
      return -1;
    }
  }

  return bags;
}

console.log(solution(input()));
