function solution(input) {}

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
  const input = ``.split('\n').map((data) => data.trim());

  solution(input);
}

process.platform == 'linux' ? initBOJ() : initTest();
