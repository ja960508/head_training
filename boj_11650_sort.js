"use strict";

const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
    3 4
    1 1
    1 -1
    2 2
    3 3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(numOfCases) {
  const coordinates = [];
  let x, y;
  let result = "";

  for (let i = 0; i < numOfCases; i++) {
    [x, y] = input().trim().split(" ");
    coordinates.push({
      x: x,
      y: y,
    });
  }

  coordinates.sort((a, b) => {
    if (a.x === b.x) {
      return a.y - b.y;
    }

    return a.x - b.x;
  });

  coordinates.map((data) => (result += `${data.x} ${data.y}\n`));

  console.log(result);
}

const numOfCases = Number(input());

solution(numOfCases);
