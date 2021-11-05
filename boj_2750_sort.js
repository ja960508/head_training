"use strict";

const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
5
2
3
4
1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function splitNumbers(numbers) {
  let pivot;
  const left = [];
  const right = [];

  if (numbers.length <= 1) {
    return numbers;
  }

  pivot = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < pivot) {
      left.push(numbers[i]);
    } else {
      right.push(numbers[i]);
    }
  }

  return splitNumbers(left).concat(pivot, splitNumbers(right));
}

function solution(numbers) {
  let result = splitNumbers(numbers);

  console.log(result.join("\n"));
}

const numOfnums = Number(input());
const numbers = new Array(numOfnums);

for (let i = 0; i < numOfnums; i++) {
  numbers[i] = Number(input());
}

solution(numbers);
