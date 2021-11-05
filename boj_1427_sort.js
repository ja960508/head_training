"use strict";

const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `500613009`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(numbers) {
  let index;
  let max;
  for (let i = 0; i < numbers.length - 1; i++) {
    let index = i;
    let max = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] > max) {
        index = j;
        max = numbers[j];
      }
    }

    [numbers[i], numbers[index]] = [numbers[index], numbers[i]];
  }

  console.log(numbers.join(""));
}

solution(input().split(""));
