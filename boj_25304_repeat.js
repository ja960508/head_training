function solution(input) {
  const totalPrice = input[0];
  const numOfGoods = input[1];
  let calc = 0;

  for (let i = 0; i < numOfGoods; i++) {
    const [price, num] = input[2 + i].split(' ');
    calc += price * num;
  }

  console.log(totalPrice == calc ? 'Yes' : 'No');
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
  const input = `260000
  4
  20000 5
  30000 2
  10000 6
  5000 8`
    .split('\n')
    .map((data) => data.trim());

  solution(input);
}

process.platform == 'linux' ? initBOJ() : initTest();
