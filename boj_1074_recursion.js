// unsolved, exceed time

'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10 512 512`
).split('\n');

const input = (function () {
  let line = 0;
  return () => stdin[line++];
})();

let result = 0;
const [power, x, y] = input()
  .split(' ')
  .map((data) => Number(data));

function solution(power, n, row, column, value) {
  // console.log(value, parseInt(n / 2));
  let temp = 0;
  if (n === 2) {
    if (row === x && column === y) {
      console.log(value - 3);
      return;
    }
    if (row === x && column + 1 === y) {
      console.log(value - 2);
      return;
    }
    if (row + 1 === x && column === y) {
      console.log(value - 1);
      return;
    }
    if (row + 1 === x && column + 1 === y) {
      console.log(value);
      return;
    }
    return;
  }

  if (x >= row + parseInt(n / 2) && y >= column + parseInt(n / 2)) {
    // console.log('case 4');
    solution(
      power - 1,
      parseInt(n / 2),
      row + parseInt(n / 2),
      column + parseInt(n / 2),
      value
    );
  } else if (x >= row + parseInt(n / 2)) {
    // console.log('case 3');

    temp = value - 4 ** (power - 1);

    solution(power - 1, parseInt(n / 2), row + parseInt(n / 2), column, temp);
  } else if (y >= column + parseInt(n / 2)) {
    // console.log('case 2');

    temp = value - 4 ** (power - 1) * 2;

    solution(power - 1, parseInt(n / 2), row, column + parseInt(n / 2), temp);
  } else {
    // console.log('case 1');

    temp = value - 4 ** (power - 1) * 3;

    solution(power - 1, parseInt(n / 2), row, column, temp);
  }
}

solution(power, 2 ** power, 0, 0, 2 ** power * 2 ** power - 1);
