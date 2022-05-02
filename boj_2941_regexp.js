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
    solution(input);
    process.exit();
  });
}

function initTest() {
  const input = `aaaa`;

  solution(input);
}

function solution(input) {
  let _input = String(input);
  const regExp = /(lj)|(c\=)|(c\-)|(d\-)|(nj)|(s\=)|(z\=)|(dz\=)/g;

  console.log(_input.replace(regExp, '1').length);
}

process.platform == 'linux' ? initBOJ() : initTest();
