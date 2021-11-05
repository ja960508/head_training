const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1
    C<B<A<---`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const numOfCases = Number(input());

function solution(numOfCases) {
  let strings;
  let leftStack;
  let rightStack;
  let currValue;

  while (numOfCases) {
    leftStack = [];
    rightStack = [];
    strings = input().trim().split('');

    for (let i = 0; i < strings.length; i++) {
      currValue = strings[i];

      switch (currValue) {
        case '<':
          if (leftStack.length) {
            rightStack.push(leftStack.pop());
          }
          break;

        case '>':
          if (rightStack.length) {
            leftStack.push(rightStack.pop());
          }
          break;

        case '-':
          if (leftStack.length) {
            leftStack.pop();
          }
          break;

        default:
          leftStack.push(currValue);
          break;
      }
    }

    console.log(leftStack.concat(rightStack.reverse()).join(''));
    numOfCases--;
  }
}

solution(numOfCases);
