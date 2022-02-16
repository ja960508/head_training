'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 17`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution() {
  const [subin, brother] = input().split(' ').map(Number);
  const q = [subin];
  const MAX = 100000;
  const pos = new Array(MAX + 1).fill(0);

  while (q.length) {
    const current = q.shift();
    if (current === brother) return pos[current];

    for (let next of [current - 1, current + 1, current * 2]) {
      if (0 <= next && next <= MAX && !pos[next]) {
        pos[next] = pos[current] + 1;
        q.push(next);
      }
    }
  }
}

console.log(solution());
