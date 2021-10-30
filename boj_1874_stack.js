const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
1
2
5
4
3`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(arr, num) {
  const answer = [];
  const stack = [];
  let counter = 1;

  while (arr.length && stack.length <= num) {
    if (stack[stack.length - 1] !== arr[arr.length - 1]) {
      stack.push(counter++);
      answer.push('+');
    } else {
      arr.pop();
      stack.pop();
      answer.push('-');
    }
  }

  if (stack.length > num) {
    console.log('NO');
  } else {
    console.log(answer.join('\n'));
  }

  return;
}

const num = input();
const arr = [];

for (let i = 0; i < num; i++) {
  arr.push(Number(input()));
}

solution(arr.reverse(), num);
