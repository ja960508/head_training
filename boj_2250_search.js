'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `19
    1 2 3
    2 4 5
    3 6 7
    4 8 -1
    5 9 10
    6 11 12
    7 13 -1
    8 -1 -1
    9 14 15
    10 -1 -1
    11 16 -1
    12 -1 -1
    13 17 -1
    14 -1 -1
    15 18 -1
    16 -1 -1
    17 -1 19
    18 -1 -1
    19 -1 -1`
).split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
