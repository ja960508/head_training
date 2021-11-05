"use strict";

const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7
  0110100
  0110101
  1110101
  0000111
  0100000
  0111110
  0111000`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function BFS(result, x, y) {
  const visitedQ = [];
  const willVisitQ = [];
  let numOfHouses = 0;
  let current;

  willVisitQ.push([x, y]);

  while (willVisitQ.length) {
    current = willVisitQ.shift();

    if (map[current[0]][current[1]] == 0) {
      continue;
    }

    map[current[0]][current[1]] = 0;
    numOfHouses++;

    if (current[0] - 1 >= 0) {
      willVisitQ.push([current[0] - 1, current[1]]);
    }
    if (current[0] + 1 < map.length) {
      willVisitQ.push([current[0] + 1, current[1]]);
    }
    if (current[1] - 1 >= 0) {
      willVisitQ.push([current[0], current[1] - 1]);
    }
    if (current[1] + 1 < map.length) {
      willVisitQ.push([current[0], current[1] + 1]);
    }
  }

  result.push(numOfHouses);
}

function solution(map) {
  let numOfComplexes = 0;
  const result = [];

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (map[i][j] == 1) {
        numOfComplexes++;
        BFS(result, i, j);
      }
    }
  }

  console.log(`${numOfComplexes}\n${result.sort((a, b) => a - b).join("\n")}`);
}

const mapSize = Number(input());
const map = new Array();

for (let i = 0; i < mapSize; i++) {
  map.push(input().trim().split(""));
}

solution(map);
