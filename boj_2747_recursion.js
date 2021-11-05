"use strict";

const fs = require("fs");
const stdin = (
  process.platform == "linux" ? fs.readFileSync("/dev/stdin").toString() : `10`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(num) {
  const arr = new Array(num + 1).fill(-1);
  for (let i = 0; i <= num; i++) {
    if (i < 2) {
      arr[i] = i;
    } else {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
  }

  return arr[num];
}

const num = Number(input());

console.log(solution(num));
