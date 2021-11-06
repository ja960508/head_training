"use strict";

const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
    10 8 17
    0 0
    1 0
    1 1
    4 2
    4 3
    4 5
    2 4
    3 4
    7 4
    8 4
    9 4
    7 5
    8 5
    9 5
    7 6
    8 6
    9 6
    10 10 1
    5 5`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function BFS(map, y, x) {
  const willVisitQ = [];
  let current;

  willVisitQ.push([y, x]);

  while (willVisitQ.length) {
    current = willVisitQ.shift();

    if (map[current[0]][current[1]] === 0) {
      continue;
    }

    map[current[0]][current[1]] = 0;

    if (current[0] - 1 >= 0) {
      willVisitQ.push([current[0] - 1, current[1]]);
    }
    if (current[0] + 1 < map.length) {
      willVisitQ.push([current[0] + 1, current[1]]);
    }
    if (current[1] - 1 >= 0) {
      willVisitQ.push([current[0], current[1] - 1]);
    }
    if (current[1] + 1 < map[0].length) {
      willVisitQ.push([current[0], current[1] + 1]);
    }
  }
}

function solution(x, y, numOfBechu) {
  const map = new Array(Number(y));

  for (let i = 0; i < y; i++) {
    map[i] = new Array(Number(x)).fill(0);
  }

  let numOfBugs = 0;

  for (let i = 0; i < numOfBechu; i++) {
    let [column, row] = input().trim().split(" ");
    map[row][column] = 1;
  }

  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (map[i][j] === 1) {
        numOfBugs++;
        BFS(map, i, j);
      }
    }
  }

  console.log(numOfBugs);
}

const numOfTestcases = Number(input());

for (let i = 0; i < numOfTestcases; i++) {
  let [x, y, numOfBechu] = input().trim().split(" ");
  solution(x, y, numOfBechu);
}
