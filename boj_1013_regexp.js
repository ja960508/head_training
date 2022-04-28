const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const regExp = new RegExp('^(100+1+|01)+$');

  input.slice(1).forEach((d) => console.log(regExp.test(d) ? 'YES' : 'NO'));
  process.exit();
});
