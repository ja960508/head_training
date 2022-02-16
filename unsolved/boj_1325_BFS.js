'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 4
    3 1
    3 2
    4 3
    5 3`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution() {
  const [numOfComputers, numOfRelation] = input().trim().split().map(Number);
}

solution();
