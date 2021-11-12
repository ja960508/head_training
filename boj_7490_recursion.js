const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
    3
    7`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const numOfTestcases = Number(input());

// 재귀를 이용해서 연산자 모음 생성
function getOperators(operatorCases, arr, num) {
  if (arr.length === num - 1) {
    const copy = [...arr];
    operatorCases.push(copy);

    return;
  }

  arr.push(' ');
  getOperators(operatorCases, arr, num);
  arr.pop();

  arr.push('+');
  getOperators(operatorCases, arr, num);
  arr.pop();

  arr.push('-');
  getOperators(operatorCases, arr, num);
  arr.pop();
}

function solution(num) {
  const numOfOperatorCases = 3 ** (num - 1);
  const operatorCases = [];
  const arr = [];

  getOperators(operatorCases, arr, num);

  // 숫자를 저장할 배열 선언 및 할당
  const numbers = [];

  for (let i = 1; i <= num; i++) {
    numbers[i - 1] = i;
  }

  // 연산자 경우의 수만큼 반복
  for (let i = 0; i < numOfOperatorCases; i++) {
    let str = '';

    for (let j = 0; j < num - 1; j++) {
      str += numbers[j] + operatorCases[i][j];
    }

    str += numbers[numbers.length - 1];

    // eval 함수를 이용해 모든 공백을 없앤 연산을 시행한다.
    if (eval(str.replace(/ /gi, '')) === 0) {
      console.log(str);
    }
  }
}

for (let i = 0; i < numOfTestcases; i++) {
  solution(Number(input().trim()));
  console.log('');
}
