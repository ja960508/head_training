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
  const input = `4
  01a2b3456cde478
  000
  345634563456345634563456345634563456345634563456345634563456345634563456345634563456345634563456345634563456345634563456
  02james007
  03bond
  04austinpowers00
  aaa`
    .split('\n')
    .map((data) => data.trim());

  solution(input);
}

function solution(input) {
  const regExp = /\d+/g;
  const answer = [];

  for (let i = 1; i < input.length; i++) {
    if (input[i].match(regExp)) {
      answer.push(...input[i].match(regExp));
    }
  }

  answer.sort((a, b) => a - b);
  console.log(answer.map(BigInt).join('\n'));
}

process.platform == 'linux' ? initBOJ() : initTest();
