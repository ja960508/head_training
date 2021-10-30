const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `8 7 6 5 4 3 2 1`
).split('\n');

const input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

function solution(n) {
  let ascendFlag = 0;
  let decendFlag = 0;
  n = n.split(' ');

  for (let i = 1; i < n.length; i++) {
    if (n[i - 1] < n[i]) {
      ascendFlag = 1;
    }
    if (n[i - 1] > n[i]) {
      decendFlag = 1;
    }
  }

  if (ascendFlag && decendFlag) {
    return 'mixed';
  } else if (ascendFlag) {
    return 'ascending';
  } else {
    return 'descending';
  }
}

console.log(solution(input()));
