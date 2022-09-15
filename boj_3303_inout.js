function solution(input) {
  let answer = '';
  const chesses = [1, 1, 2, 2, 2, 8];

  input[0]
    .split(' ')
    .forEach((data, idx) => (answer += chesses[idx] - Number(data) + ' '));

  console.log(answer);
}

function initBOJ() {
  const input = [];

  require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', (line) => {
      input.push(line);
    })
    .on('close', () => solution(input));
}

function initTest() {
  const input = `2 1 2 1 2 1`.split('\n').map((data) => data.trim());

  solution(input);
}

process.platform == 'linux' ? initBOJ() : initTest();
