const fs = require('fs');
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

function solution() {
  const num = input();
  let numbers = input()
    .trim()
    .split(' ')
    .map((data) => Number(data));
  const inputNum = input();
  const inputNumbers = input()
    .trim()
    .split(' ')
    .map((data) => Number(data));

  let start, end;
  numbers = numbers.sort((a, b) => a - b);
  let answer = '';
  let flag;

  for (let i = 0; i < inputNum; i++) {
    start = 0;
    end = num - 1;
    flag = 0;

    while (start <= end) {
      mid = Math.floor((start + end) / 2);

      if (inputNumbers[i] === numbers[mid]) {
        answer += '1\n';
        flag = 1;
        break;
      } else if (inputNumbers[i] < numbers[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    if (!flag) {
      answer += '0\n';
    }
  }

  console.log(answer);
}

solution();
