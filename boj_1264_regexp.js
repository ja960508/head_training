const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const regExp = new RegExp('[aeiou]', 'gi');
  input.forEach(
    (d) =>
      d !== '#' && console.log(d.match(regExp) ? d.match(regExp).length : 0)
  );
  process.exit();
});
