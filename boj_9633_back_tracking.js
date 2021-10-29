// N queen
// prunning -> 열의 gap과 행의 gap이 같은 지 파악

const fs = require('fs');
const stdin = (
  process.platform == 'linux' ? fs.readFileSync('/dev/stdin').toString() : `15`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function isValid(candidate, column) {
  let currRow = candidate.length;

  for (let row = 0; row < currRow; row++) {
    if (
      candidate[row] == column ||
      Math.abs(candidate[row] - column) == currRow - row
    ) {
      return false;
    }
  }

  return true;
}

function DFS(n, currentRow, candidate, result) {
  if (currentRow === n) {
    result.push([...candidate]);
    return;
  }

  for (let column = 0; column < n; column++) {
    if (isValid(candidate, column)) {
      candidate.push(column);
      DFS(n, currentRow + 1, candidate, result);
      candidate.pop();
    }
  }
}

function solution(n) {
  let result = [];
  DFS(n, 0, [], result);

  return result.length;
}

console.log(solution(Number(input())));
