const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 21
5 6 7 8 9`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(cards, numOfCards, maximumValue) {
  let max = -1;
  let pick = 3;
  let value;

  for (let i = 0; i <= numOfCards - pick; i++) {
    if (max === maximumValue) return max;
    for (let j = i + 1; j < numOfCards; j++) {
      for (let k = j + 1; k < numOfCards; k++) {
        value = cards[i] + cards[j] + cards[k];
        if (max < value && value <= maximumValue) max = value;
      }
    }
  }

  return max;
}

const [numOfCards, maximumValue] = input().split(' ');
const cards = input()
  .split(' ')
  .map((data) => Number(data));

console.log(solution(cards, numOfCards, maximumValue));
