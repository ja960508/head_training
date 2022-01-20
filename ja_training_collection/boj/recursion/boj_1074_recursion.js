'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10 512 512`
).split('\n');

const input = (function () {
  let line = 0;
  return () => stdin[line++];
})();

const [n, r, c] = input()
  .split(' ')
  .map((data) => Number(data));

function solution(n, r, c, lastIndex) {
  // 1. 2^n 길이의 변을 가지는 정사각형
  // 2. 순서는 0부터 시작한다. (row, column도)
  // 3. 사각형의 인덱스 끝은 2 ** (n + n) - 1이다.
  // 4. 사각형이 4등분 될 때, Z의 역순으로 현재 n을 기준으로 끝 인덱스가 변한다.
  // 5. 인덱스는 2^(2n - 2) => 4 ^ (n - 1)을 뺄셈하며 변한다.

  const currentRectangleSide = 2 ** n - 1;
  // 0부터 시작이니까 1 minus
  const branch = Math.floor(currentRectangleSide / 2);
  const subtractor = 4 ** (n - 1);
  const sideSubtractor = 2 ** (n - 1);

  if (n === 1) {
    // 사각형이 더이상 쪼개질 수 없을 때까지 분할
    if (r === 0 && c === 0) {
      console.log(lastIndex - 3);
    } else if (r === 0 && c === 1) {
      console.log(lastIndex - 2);
    } else if (r === 1 && c === 0) {
      console.log(lastIndex - 1);
    } else {
      console.log(lastIndex);
    }

    return lastIndex;
    // 왜 undefined가 리턴?
  }

  // Z의 역순으로 판별
  if (r > branch && c > branch) {
    solution(n - 1, r - sideSubtractor, c - sideSubtractor, lastIndex);
  } else if (r > branch && c <= branch) {
    solution(n - 1, r - sideSubtractor, c, lastIndex - subtractor);
  } else if (r <= branch && c > branch) {
    solution(n - 1, r, c - sideSubtractor, lastIndex - 2 * subtractor);
  } else {
    solution(n - 1, r, c, lastIndex - 3 * subtractor);
  }
}

solution(n, r, c, 2 ** (n + n) - 1);
