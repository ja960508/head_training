'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 8
    ....XXXX
    ........
    XX.X.XX.
    ........
    ........`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(castle, row, column) {
  let guard = 0;
  const rowGuard = new Array(row).fill(0);
  const columnGuard = new Array(column).fill(0);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (castle[i][j] === 'X') {
        rowGuard[i] = 1;
        columnGuard[j] = 1;
      }
    }
  }

  guard = Math.max(
    rowGuard.filter((data) => data !== 1).length,
    columnGuard.filter((data) => data !== 1).length
  );

  console.log(guard);
}

const [row, column] = input()
  .split(' ')
  .map((data) => Number(data));
const castle = [];
let state;

for (let i = 0; i < row; i++) {
  state = input().trim().split('');
  castle.push(state);
}

solution(castle, row, column);
