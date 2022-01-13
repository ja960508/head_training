function solution(input) {
  input = input.map((data) => data.split(''));
  const [input0, input1] = input;
  const dp = [];

  input0.unshift(undefined);
  input1.unshift(undefined);

  for (let i = 0; i < input1.length; i++) {
    dp.push(new Array(input0.length).fill(0));
  }

  for (let i = 1; i < input0.length; i++) {
    for (let j = 1; j < input1.length; j++) {
      if (input0[i] === input1[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  console.log(dp);
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
  const input = `ACAYKP
  CAPCAK`
    .split('\n')
    .map((data) => data.trim());

  solution(input);
}

process.platform == 'linux' ? initBOJ() : initTest();
