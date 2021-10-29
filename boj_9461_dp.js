'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
  6
  12`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(n) {
  const number = n < 3 ? 3 : n;
  const arr = new Array(number).fill(-1);
  arr[0] = 1;
  arr[1] = 1;
  arr[2] = 1;

  for (let i = 3; i < n; i++) {
    arr[i] = arr[i - 3] + arr[i - 2];
  }

  return arr[n - 1];
}

let cnt = input();

while (cnt--) {
  console.log(solution(input()));
}
