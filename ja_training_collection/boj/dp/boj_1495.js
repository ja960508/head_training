function solution(input) {
  // 1 이상, max 이하
  // start volume용 배열 1개, 0 ~ max 까지 인덱싱 위해 배열의 크기 조정
  const [numOfMusics, startVolume, maxVolume] = input[0].split(' ').map(Number);
  const adjustingValues = input[1].split(' ').map(Number);
  const dp = Array.from(Array(numOfMusics + 1), () => []);
  let result = -1;

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(maxVolume + 1).fill(false);
  }

  dp[0][startVolume] = true;

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j <= maxVolume; j++) {
      if (dp[i - 1][j]) {
        const plus = j + adjustingValues[i - 1];
        const minus = j - adjustingValues[i - 1];

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
  const input = `3 5 10
  5 3 7`
    .split('\n')
    .map((data) => data.trim());

  solution(input);
}

process.platform == 'linux' ? initBOJ() : initTest();
