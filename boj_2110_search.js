// binary search
'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 3
    1
    7
    8
    9
    10`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(houses, numOfRouter) {
  let min;
  let max;
  let mid;
  let value;
  let result = 0;
  let count;

  min = 1;
  max = houses[houses.length - 1] - houses[0];

  while (min <= max) {
    mid = parseInt((max + min) / 2);
    value = houses[0];
    count = 1;

    for (let i = 1; i < houses.length; i++) {
      if (houses[i] >= value + mid) {
        value = houses[i];
        count++;
      }
    }

    if (count >= numOfRouter) {
      min = mid + 1;
      result = mid;
    } else {
      max = mid - 1;
    }
  }

  console.log(result);
}

const [numOfHouses, numOfRouter] = input()
  .split(' ')
  .map((data) => Number(data));
const housesMap = [];

for (let i = 0; i < numOfHouses; i++) {
  housesMap[i] = Number(input().trim());
}

housesMap.sort((a, b) => a - b);

solution(housesMap, numOfRouter);
