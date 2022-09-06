function getNextLocation(current, grid) {
  const [currentX, currentY] = current[0]; // 현재 위치
  const direction = current[1]; // 들어오는 방향
  let next;
  let nextDirection;

  switch (grid[currentX][currentY]) {
    case 'S':
      switch (direction) {
        case 'UP':
          next =
            currentX + 1 < grid.length
              ? [currentX + 1, currentY]
              : [0, currentY];
          nextDirection = 'UP';
          return [next, nextDirection];
        case 'DOWN':
          next =
            currentX - 1 >= 0
              ? [currentX - 1, currentY]
              : [grid.length - 1, currentY];
          nextDirection = 'DOWN';
          return [next, nextDirection];
        case 'LEFT':
          next =
            currentY + 1 < grid[0].length
              ? [currentX, currentY + 1]
              : [currentX, 0];
          nextDirection = 'LEFT';
          return [next, nextDirection];
        case 'RIGHT':
          next =
            currentY - 1 >= 0
              ? [currentX, currentY - 1]
              : [currentX, grid[0].length - 1];
          nextDirection = 'RIGHT';
          return [next, nextDirection];
      }
    case 'L':
      switch (direction) {
        case 'UP':
          next =
            currentY + 1 < grid[0].length
              ? [currentX, currentY + 1]
              : [currentX, 0];
          nextDirection = 'LEFT';
          return [next, nextDirection];
        case 'DOWN':
          next =
            currentY - 1 >= 0
              ? [currentX, currentY - 1]
              : [currentX, grid[0].length - 1];
          nextDirection = 'RIGHT';
          return [next, nextDirection];
        case 'LEFT':
          next =
            currentX - 1 >= 0
              ? [currentX - 1, currentY]
              : [grid.length - 1, currentY];
          nextDirection = 'DOWN';
          return [next, nextDirection];
        case 'RIGHT':
          next =
            currentX + 1 < grid.length
              ? [currentX + 1, currentY]
              : [0, currentY];
          nextDirection = 'UP';
          return [next, nextDirection];
      }
    case 'R':
      switch (direction) {
        case 'UP':
          next =
            currentY - 1 >= 0
              ? [currentX, currentY - 1]
              : [currentX, grid[0].length - 1];
          nextDirection = 'RIGHT';
          return [next, nextDirection];
        case 'DOWN':
          next =
            currentY + 1 < grid[0].length
              ? [currentX, currentY + 1]
              : [currentX, 0];
          nextDirection = 'LEFT';
          return [next, nextDirection];
        case 'LEFT':
          next =
            currentX + 1 < grid.length
              ? [currentX + 1, currentY]
              : [0, currentY];
          nextDirection = 'UP';
          return [next, nextDirection];
        case 'RIGHT':
          next =
            currentX - 1 >= 0
              ? [currentX - 1, currentY]
              : [grid.length - 1, currentY];
          nextDirection = 'DOWN';
          return [next, nextDirection];
      }
  }
}

function getCheckIndex(direction) {
  switch (direction) {
    case 'UP':
      return 0;
    case 'DOWN':
      return 1;
    case 'LEFT':
      return 2;
    case 'RIGHT':
      return 3;
  }
}

function solution(grid) {
  const answer = [];
  let counter = 0;
  const directions = ['UP', 'DOWN', 'LEFT', 'RIGHT'];
  const check = [true, true, true, true]; // 상 하 좌 우
  let current = [[0, 0], 'UP'];

  while (check.includes(true)) {
    const [currentX, currentY] = current[0];
    const direction = current[1];

    if (currentX === 0 && currentY === 0) {
      const checkIndex = getCheckIndex(direction);
      if (check[checkIndex] === false) {
        answer.push(counter - 1);
        counter = 0;
        current = [[0, 0], directions[check.indexOf(true)]];
      } else {
        counter !== 0 && (check[checkIndex] = false);
      }
    }

    current = getNextLocation(current, grid);
    console.log(current, grid[current[0][0]][current[0][1]]);
    counter++;
  }
  answer.push(counter - 1);
  console.log(answer);

  return answer;
}

const grid = ['S', 'S'];

solution(grid);
