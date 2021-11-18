const fs = require('fs');
const stdin = (
  process.platform == 'linux' ? fs.readFileSync('/dev/stdin').toString() : `14`
).split('\n');

const input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

function solution(numOfBirds) {
  let result = 0;
  let counter = 1;

  while (numOfBirds > 0) {
    if (numOfBirds >= counter) {
      numOfBirds -= counter;
      result += 1;
    } else {
      counter = 0;
    }

    counter++;
  }

  console.log(result);
}

const numOfBirds = Number(input());

solution(numOfBirds);
