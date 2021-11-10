const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
3
7`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const numOfTestcases = Number(input());

function getOperators(operatorCases, arr, num) {
  if (arr.length === num - 1) {
    operatorCases.push(arr);
  }

  arr.push(" ");
  getOperators(operatorCases, arr, num);
}

function solution(num) {
  const numOfOperatorCases = 3 ** (num - 1);
  const operatorCases = [];
  const arr = [];
}

for (let i = 0; i < numOfTestcases; i++) {
  solution(Number(input()));
}
