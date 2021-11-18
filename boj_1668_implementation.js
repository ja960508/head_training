'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
    1
    2
    5
    2
    1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(numOfTrophy) {
  const trophies = [];
  let left = 0;
  let right = 0;
  let max = -1;

  for (let i = 0; i < numOfTrophy; i++) {
    trophies[i] = Number(input().trim());
  }

  for (let i = 0; i < numOfTrophy; i++) {
    if (max < trophies[i]) {
      max = trophies[i];
      left++;
    }
  }

  max = -1;

  for (let i = numOfTrophy - 1; i >= 0; i--) {
    if (max < trophies[i]) {
      max = trophies[i];
      right++;
    }
  }

  console.log(`${left}\n${right}`);
}

const numOfTrophy = Number(input());

solution(numOfTrophy);
