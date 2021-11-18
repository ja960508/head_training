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

function mergeSort(numbers) {
  if (numbers.length < 2) {
    return numbers;
  }

  const mid = parseInt(numbers.length / 2);
  const left = mergeSort(numbers.slice(0, mid));
  const right = mergeSort(numbers.slice(mid));
  const result = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result[k] = left[i];
      i++;
    } else {
      result[k] = right[j];
      j++;
    }

    k++;
  }

  if (i === left.length) {
    while (j < right.length) {
      result[k] = right[j];
      j++;
      k++;
    }
  } else {
    while (i < left.length) {
      result[k] = left[i];
      i++;
      k++;
    }
  }

  return result;
}

function solution(numOfNumbers) {
  const numbers = [];

  for (let i = 0; i < numOfNumbers; i++) {
    numbers[i] = Number(input());
  }

  // console.log(numbers.sort((a, b) => a - b).join('\n'));

  const sortedNumbers = mergeSort(numbers);

  console.log(sortedNumbers.join('\n'));
}

solution(numOfNumbers);
