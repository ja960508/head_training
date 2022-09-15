function solution(input) {
  const dices = input[0].split(' ').sort();
  const occation = dices.reduce((result, curr, idx) => {
    if (curr === dices[idx + 1]) return result + 1;
    return result;
  }, 0);

  switch (occation) {
    case 0:
      console.log(dices[2] * 100);
      return;
    case 1:
      console.log(1000 + dices[1] * 100);

      return;
    case 2:
      console.log(10000 + dices[1] * 1000);
      return;
  }
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
  const input = `6 2 5`.split('\n').map((data) => data.trim());

  solution(input);
}

process.platform == 'linux' ? initBOJ() : initTest();
