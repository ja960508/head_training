const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1 1
    0
    2 2
    0 1
    1 0
    3 2
    1 1 1
    1 1 1
    5 4
    1 0 1 0 0
    1 0 0 0 0
    1 0 1 0 1
    1 0 0 1 0
    5 4
    1 1 1 0 1
    1 0 1 0 1
    1 0 1 0 1
    1 0 1 1 1
    5 5
    1 0 1 0 1
    0 0 0 0 0
    1 0 1 0 1
    0 0 0 0 0
    1 0 1 0 1
    0 0
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => {
    return stdin[line++];
  };
})();

function validCheck(current, dir, map) {
  if (current[0] + dir[0] > map.length - 1 || current[0] + dir[0] < 0) {
    return true;
  }
  if (current[1] + dir[1] > map[0].length - 1 || current[1] + dir[1] < 0) {
    return true;
  }
  if (map[current[0] + dir[0]][current[1] + dir[1]] === 0) {
    return true;
  }

  return false;
}

function DFS(map, y, x) {
  const willVisitQ = [];
  const dir = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  willVisitQ.push([y, x]);

  while (willVisitQ.length) {
    let current = willVisitQ.pop();
    map[current[0]][current[1]] = 0;

    for (let i = 0; i < dir.length; i++) {
      if (validCheck(current, dir[i], map)) {
        continue;
      }
      willVisitQ.push([current[0] + dir[i][0], current[1] + dir[i][1]]);
    }
  }
}

function solution(width, height) {
  const map = [];
  let result = 0;

  for (let i = 0; i < height; i++) {
    map.push(
      input()
        .trim()
        .split(" ")
        .map((data) => Number(data))
    );
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (map[i][j] == 1) {
        DFS(map, i, j);
        result++;
      }
    }
  }

  console.log(result);
}

while (true) {
  let [x, y] = input()
    .trim()
    .split(" ")
    .map((data) => Number(data));

  if (x == 0 && y == 0) break;

  solution(x, y);
}
