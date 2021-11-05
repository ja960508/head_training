// unsolved, exceed time

"use strict";

const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 4 1`
).split("\n");

const input = (function () {
  let line = 0;
  return () => stdin[line++];
})();

let result = 0;
const [power, x, y] = input()
  .split(" ")
  .map((data) => Number(data));

function solution(n, row, column) {
  if (n === 2) {
    if (row === x && column === y) {
      console.log(result);
      return;
    }
    result++;
    if (row === x && column + 1 === y) {
      console.log(result);
      return;
    }
    result++;
    if (row + 1 === x && column === y) {
      console.log(result);
      return;
    }
    result++;
    if (row + 1 === x && column + 1 === y) {
      console.log(result);
      return;
    }
    result++;
    return;
  }

  solution(parseInt(n / 2), row, column);
  solution(parseInt(n / 2), row, column + parseInt(n / 2));
  solution(parseInt(n / 2), row + parseInt(n / 2), column);
  solution(parseInt(n / 2), row + parseInt(n / 2), column + parseInt(n / 2));
}

solution(2 ** power, 0, 0);
