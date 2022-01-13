'use strict';

function solution(input) {
  const [numOfMusics, startVolume, maxVolume] = input[0].split(' ').map(Number);
  const musics = input[1].trim().split(' ').map(Number);
  const dp = Array.from(Array(numOfMusics + 1), () => Array());
  let result = -1;

  for (let i = 0; i <= maxVolume; i++) {
    dp[0][i] = false;

    if (i === startVolume) {
      dp[0][i] = true;
    }
  }

  for (let i = 1; i <= numOfMusics; i++) {
    for (let j = 0; j <= maxVolume; j++) {
      if (!dp[i][j]) dp[i][j] = false;
      if (dp[i - 1][j] === true) {
        const plus = j + musics[i - 1];
        const minus = j - musics[i - 1];

        if (plus <= maxVolume) dp[i][plus] = true;
        if (minus >= 0) dp[i][minus] = true;
      }
    }
  }

  for (let i = 0; i <= maxVolume; i++) {
    if (dp[numOfMusics][i] === true) {
      result = i;
    }
  }

  console.log(result);
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
  const input = `4 8 20
  15 2 9 10`
    .split('\n')
    .map((data) => data.trim());

  solution(input);
}

process.platform == 'linux' ? initBOJ() : initTest();
