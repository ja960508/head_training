'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 6
    110110
    110110
    111111
    111101`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(maze, x, y) {
  const visitedRoom = [];
  const willVisitRoom = [];
  let count = 0;

  willVisitRoom.push([0, 0, 1]);

  while (willVisitRoom.length) {
    let current = willVisitRoom.shift();

    if (maze[current[0]][current[1]] === '0') {
      continue;
    }

    visitedRoom.push(current);
    maze[current[0]][current[1]] = '0';

    if (current[0] == [x - 1] && current[1] == [y - 1]) {
      console.log(current[2]);
      return;
    }

    // current[0] = y축
    // current[1] = x축
    if (current[0] - 1 >= 0) {
      // 상단
      willVisitRoom.push([current[0] - 1, current[1], current[2] + 1]);
    }
    if (current[0] + 1 < maze.length) {
      // 하단
      willVisitRoom.push([current[0] + 1, current[1], current[2] + 1]);
    }
    if (current[1] - 1 >= 0) {
      // 좌측
      willVisitRoom.push([current[0], current[1] - 1, current[2] + 1]);
    }
    if (current[1] + 1 < maze[0].length) {
      // 우측
      willVisitRoom.push([current[0], current[1] + 1, current[2] + 1]);
    }
  }
}

const [row, column] = input()
  .split(' ')
  .map((data) => Number(data));
const maze = new Array(row);

for (let i = 0, elem; i < row; i++) {
  elem = input().trim().split('');

  maze[i] = elem;
}

solution(maze, row, column);
