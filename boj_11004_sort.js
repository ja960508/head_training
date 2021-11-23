const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 2
4 1 2 3 5`
).split('\n');

const input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

const [numOfNumbers, k] = input()
  .split(' ')
  .map((data) => Number(data));
const numbers = input()
  .split(' ')
  .map((data) => Number(data));

console.log(numbers.sort((a, b) => a - b)[k - 1]);
