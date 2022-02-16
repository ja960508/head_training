'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7
    6
    1 2
    2 3
    1 5
    5 2
    5 6
    4 7`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution() {
  const numOfComputers = Number(input().trim());
  const numOfEdges = Number(input().trim());
  const network = {};
  const visited = [];

  for (let i = 0; i < numOfEdges; i++) {
    const [c1, c2] = input().trim().split(' ').map(Number);

    if (!network[c1]) network[c1] = [];
    if (!network[c2]) network[c2] = [];

    network[c1].push(c2);
    network[c2].push(c1);
  }

  function DFS(start) {
    if (visited.includes(start)) return;

    visited.push(start);

    for (let node of network[start]) {
      DFS(node);
    }
  }

  DFS(1);
  console.log(visited.length - 1);
}

solution();
