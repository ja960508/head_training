'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux' ? fs.readFileSync('/dev/stdin').toString() : `5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(n) {
  const num = n < 2 ? 2 : n;
  const arr = new Array(num).fill(-1);

  arr[0] = 1;
  arr[1] = 2;

  for (let i = 2; i < n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 15746;
  }

  return arr[n - 1];
}

console.log(solution(input()));
