// 너비 높이 무게
function solution(input) {
  const numOfBricks = input[0];
  let bricks = [];
  const dp = Array.from(Array(Number(numOfBricks) + 1), () => [0]);

  for (let i = 1; i <= numOfBricks; i++) {
    bricks.push(input[i].trim());
  }

  bricks = bricks.map((data, index) =>
    data
      .split(' ')
      .map(Number)
      .concat(index + 1)
  );
  bricks = bricks.sort((a, b) => a[2] - b[2]);
  bricks.unshift([0, 0, 0, 0]);

  for (let i = 1; i <= numOfBricks; i++) {
    for (let j = 0; j < i; j++) {
      if (bricks[i][0] > bricks[j][0]) {
        dp[i] = Math.max(dp[i], dp[j] + bricks[i][1]);
      }
    }
  }

  let index = numOfBricks;
  let max = Math.max(...dp);
  const result = [];

  while (index) {
    if (max === dp[index]) {
      result.push(bricks[index][3]);
      max -= bricks[index][1];
    }

    index--;
  }

  result.reverse();
  console.log(result.length);
  result.map((data) => console.log(data));
}

function initBOJ() {
  const input = [];

  require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', function (line) {
      input.push(line.trim());
    })
    .on('close', () => solution(input));
}

function initTest() {
  const input = `5
  25 3 4
  4 4 6
  9 2 3
  16 2 5
  1 5 2`
    .split('\n')
    .map((data) => data.trim());

  solution(input);
}

process.platform == 'linux' ? initBOJ() : initTest();
