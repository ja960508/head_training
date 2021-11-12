const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
5
4
3
2
1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => {
    return stdin[line++];
  };
})();

const numOfNumbers = Number(input());

// function Qsort(numbers) {
//   if (numbers.length < 2) {
//     return numbers;
//   }

//   const pivot = numbers[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < pivot) {
//       left.push(numbers[i]);
//     } else {
//       right.push(numbers[i]);
//     }
//   }

//   return Qsort(left).concat(pivot, Qsort(right));
// }

function solution(numOfNumbers) {
  const numbers = [];

  for (let i = 0; i < numOfNumbers; i++) {
    numbers[i] = Number(input());
  }

  console.log(numbers.sort((a, b) => a - b).join('\n'));
}

solution(numOfNumbers);
