const strToNum = (str) => str.split(' ').map(Number);

function solution(input) {
  const size = Number(input.shift());
  const sequence = strToNum(input.shift());
  const dp = Array(size).fill(1);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < i; j++) {
      if (sequence[j] < sequence[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  console.log(Math.max(...dp));
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
  const input = `6
  30 10 20 50 60 70`
    .split('\n')
    .map((data) => data.trim());

  solution(input);
}

process.platform == 'linux' ? initBOJ() : initTest();
