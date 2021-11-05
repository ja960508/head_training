// N * N 크기의 체스판에 N 개의 퀸이 서로 공격할 수 없도록 배치하는 문제
// 공간 트리를 만든다.
// DFS로 경우의 수 체크

// 수평체크, 수직체크, 대각선 체크

function isValid(candidate, column) {
  let currentRow = candidate.length;
  for (let row = 0; row < currentRow; row++) {
    if (
      candidate[row] == column ||
      Math.abs(candidate[row] - column) == currentRow - row
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
      console.log("push", candidate);
      DFS(n, currentRow + 1, candidate, result);
      console.log("will pop", candidate);
      candidate.pop();
    }
  }
}

function solution(n) {
  let result = [];
  DFS(n, 0, [], result);

  return result;
}

console.log(solution(4));
