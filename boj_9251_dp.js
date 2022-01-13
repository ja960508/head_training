'use strict';

function solution(input) {
  input = input.map((data) => data.trim().split(''));
  const input0 = input[0];
  const input1 = input[1];

  const dp = Array.from(Array(input0.length + 1), () => Array());

  for (let i = 0; i <= input0.length; i++) {
    for (let j = 0; j <= input1.length; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= input0.length; i++) {
    for (let j = 1; j <= input1.length; j++) {
      if (input0[i - 1] === input1[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  console.log(dp[input0.length][input1.length]);
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
