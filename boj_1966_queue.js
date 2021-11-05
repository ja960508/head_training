const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const numOfTestCase = input();

function solution(numOfTestCase) {
  let numOfPapers, targetLocation, priorities;
  let result;

  while (numOfTestCase > 0) {
    [numOfPapers, targetLocation] = input()
      .split(' ')
      .map((data) => Number(data));
    priorities = input()
      .split(' ')
      .map((data) => Number(data));
    result = 0;

    while (priorities.length) {
      if (priorities.some((data) => priorities[0] < data)) {
        // 우선순위 높은 게 있을 때, 인쇄 불가능
        priorities.push(priorities.shift());

        if (targetLocation === 0) {
          targetLocation = priorities.length - 1;
        } else {
          targetLocation -= 1;
        }
      } else {
        // 인쇄 가능
        priorities.shift();
        result++;
        if (targetLocation === 0) {
          console.log(result);
          break;
        } else {
          targetLocation -= 1;
        }
      }
    }

    numOfTestCase--;
  }
}

solution(numOfTestCase);
