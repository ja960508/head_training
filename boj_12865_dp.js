const strToNum = (str) => str.split(' ').map(Number);

function solution(input) {
  const [numOfThings, sackWeight] = strToNum(input.shift());
  const arr = [];

  for (let i = 0; i <= numOfThings; i++) {
    arr.push(Array(sackWeight + 1).fill(0));
  }

  for (let i = 1; i <= numOfThings; i++) {
    const [weight, value] = strToNum(input.shift());

    for (let j = 1; j <= sackWeight; j++) {
      if (j < weight) {
        arr[i][j] = arr[i - 1][j];
      } else {
        arr[i][j] = Math.max(arr[i - 1][j], arr[i - 1][j - weight] + value);
        // 현재 물건이 안 들어갔을 때 + value
      }
    }
  }
  console.log(arr[numOfThings][sackWeight]);
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
  const input = `4 7
    6 13
    4 8
    3 6
    5 12`
    .split('\n')
    .map((data) => data.trim());

  solution(input);
}

process.platform == 'linux' ? initBOJ() : initTest();
