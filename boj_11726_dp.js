'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux' ? fs.readFileSync('/dev/stdin').toString() : `2`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(n) {
  const arr = new Array(n).fill(-1);
  arr[0] = 1;

  if (n >= 2) {
    arr[1] = 2;

    for (let i = 2; i < n; i++) {
      arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
    }
  }

  return arr[n - 1];
}

console.log(solution(Number(input())));
