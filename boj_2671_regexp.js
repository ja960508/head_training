const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const regExp = /^(100+1+|01)+$/g;
  const str = input.pop();

  console.log(regExp.test(str) ? 'SUBMARINE' : 'NOISE');
  process.exit();
});
