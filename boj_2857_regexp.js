function solution(input) {
  const answer = [];
  const regExp = /FBI/;

  for (let i = 0; i < input.length; i++) {
    if (regExp.test(input[i])) answer.push(i + 1);
  }

  return answer.length ? answer.join(' ') : 'HE GOT AWAY!';
}

function initBOJ() {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input = [];

  rl.on('line', (line) => {
    input.push(line);
  }).on('close', () => {
    console.log(solution(input));
    process.exit();
  });
}

function initTest() {
  const input = `47-FBI
  BOND-007
  RF-FBI18
  MARICA-13
  13A-FBILL13A-FBILL13A-FBILL
  FBI
  FBI~~`
    .split('\n')
    .map((item) => item.trim());

  console.log(solution(input));
}

process.platform == 'linux' ? initBOJ() : initTest();
