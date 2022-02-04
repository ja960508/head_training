'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux' ? fs.readFileSync('/dev/stdin').toString() : `3`
).split('\n');

const input = (function () {
  let line = 0;
  return () => stdin[line++];
})();

let log = [];
const max = Number(input());

function solution(n, start, to, by) {
  if (n < 2) {
    log.push(`${start} ${to}`);
    return;
  } else {
    solution(n - 1, start, by, to);
    log.push(`${start} ${to}`);
    solution(n - 1, by, to, start);
  }
}

function hanoi(n) {
  if (n < 2) {
    return 1;
  }

  return 1 + 2 * hanoi(n - 1);
}

console.log(hanoi(max));
if (max <= 20) {
  solution(max, 1, 3, 2);
  console.log(log.join('\n'));
}
