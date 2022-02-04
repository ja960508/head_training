'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux' ? fs.readFileSync('/dev/stdin').toString() : `3`
).split('\n');

const input = (function () {
  let line = 0;
  return () => stdin[line++];
})();

let counter = 0;
let log = '';
const max = Number(input());

function solution(n, start, to, by) {
  counter++;
  if (n < 2) {
    if (max <= 20) {
      log += `${start} ${to}\n`;
    }
    return;
  } else {
    solution(n - 1, start, by, to);
    if (max <= 20) {
      log += `${start} ${to}\n`;
    }
    solution(n - 1, by, to, start);
  }
}

solution(max, 1, 3, 2);
console.log(counter);
max <= 20 && console.log(log);
