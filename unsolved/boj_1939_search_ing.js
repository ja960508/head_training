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

function bfs(targetWeight, startNode, endNode, bridgeInfo, numOfIsland) {
  const willVisitedQ = [];
  const visitedQ = new Array(numOfIsland).fill(false);
  let current;

  willVisitedQ.push(startNode);

  while (willVisitedQ.length) {
    current = willVisitedQ.shift();
    visitedQ[current - 1] = true;

    for (let node of bridgeInfo[current]) {
      if (visitedQ[node[0] - 1]) {
        continue;
      }

      if (node[1] <= targetWeight) {
        willVisitedQ.push(node[0]);
      }
    }
  }

  return visitedQ[endNode - 1];
}

const [numOfIsland, numOfBridge] = input()
  .split(' ')
  .map((data) => Number(data));
const bridgeInfo = {};
let min = Infinity;
let max = -1;
let mid;
let result;

for (let i = 0; i < numOfIsland; i++) {
  bridgeInfo[i + 1] = [];
}

for (let i = 0; i < numOfBridge; i++) {
  let [island0, island1, weight] = input()
    .trim()
    .split(' ')
    .map((data) => Number(data));
  bridgeInfo[island0].push([island1, weight]);
  bridgeInfo[island1].push([island0, weight]);
  min = Math.min(min, weight);
  max = Math.max(max, weight);
}

const [startNode, endNode] = input()
  .trim()
  .split(' ')
  .map((data) => Number(data));

result = min;

while (min <= max) {
  mid = parseInt((min + max) / 2);

  if (bfs(mid, startNode, endNode, bridgeInfo, numOfIsland)) {
    result = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(result);
