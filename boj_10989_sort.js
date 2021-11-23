// counting sort
// unsolved, memory exceeded

'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10
    5
    2
    3
    1
    4
    2
    3
    5
    1
    7`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(numOfCases) {
  const numbers = new Array(numOfCases).fill(0);
  let result = '';

  for (let i = 0; i < numOfCases; i++) {
    numbers[Number(input().trim()) - 1]++;
  }

  for (let i = 0; i < numOfCases; i++) {
    if (numbers[i]) {
      for (let j = 0; j < numbers[i]; j++) {
        result += `${i + 1}\n`;
      }
    }
  }

  console.log(result);
}

const numOfCases = Number(input());

solution(numOfCases);
