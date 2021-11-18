const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `ababaa
    abaa`
).split('\n');

const input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

function solution(str, targetStr) {
  let i = 0;
  let count = 0;
  let targetLength = targetStr.length;

  while (str.length - i >= targetLength) {
    if (str.slice(i, i + targetLength) === targetStr) {
      count++;
      i += targetLength;
    } else {
      i++;
    }
  }

  console.log(count);
}

const str = input().trim();
const targetStr = input().trim();

solution(str, targetStr);
