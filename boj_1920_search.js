const fs = require('fs');
const { start } = require('repl');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
    4 1 5 2 3
    5
    1 3 7 9 5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const num = input();
const numbers = input()
  .trim()
  .split(' ')
  .map((data) => Number(data));
const inputNum = input();
const inputNumbers = input()
  .trim()
  .split(' ')
  .map((data) => Number(data));

function solution(numbers, inputNumbers) {
  let start, end;
  numbers = numbers.sort((a, b) => a - b);
  let answer = new Array(inputNumbers.length).fill(0);

  for (let i = 0; i < inputNumbers.length; i++) {
    start = 0;
    end = numbers.length - 1;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (inputNumbers[i] === numbers[mid]) {
        answer[i] = 1;
        break;
      } else if (inputNumbers[i] < numbers[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  answer.map((data) => console.log(data));
}

solution(numbers, inputNumbers);
