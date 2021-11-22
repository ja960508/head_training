'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 3
    1 2 2
    3 1 3
    2 3 2
    1 3`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [numOfIsland, numOfBridge] = input()
  .split(' ')
  .map((data) => Number(data));
const bridgeInfo = {};

for (let i = 0; i < numOfBridge; i++) {
  let [island0, island1, weight] = input()
    .split(' ')
    .map((data) => Number(data));
}
