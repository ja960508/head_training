"use strict";

const numbers = [];

function getRandomNumber(range, number, numberArr) {
  for (let i = 0; i < number; i++) {
    numberArr.push(Math.floor(Math.random() * range + 1));
  }

  console.log(numberArr);
}

function bubbleSort(numbers) {
  for (let i = 1; i <= numbers.length; i++) {
    for (let j = 0; j < numbers.length - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }

  return numbers;
}

function selectionSort(numbers) {
  let index;

  for (let i = 0; i < numbers.length; i++) {
    index = i;

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[index] > numbers[j]) {
        index = j;
      }
    }

    [numbers[i], numbers[index]] = [numbers[index], numbers[i]];
  }

  return numbers;
}

function insertionSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (numbers[j] < numbers[j - 1]) {
        [numbers[j], numbers[j - 1]] = [numbers[j - 1], numbers[j]];
      }
    }
  }

  return numbers;
}

function quickSort(numbers) {
  let pivot = numbers[0];
  let left = [];
  let right = [];

  if (numbers.length < 2) {
    return numbers;
  }

  for (let i = 1; i < numbers.length; i++) {
    if (pivot <= numbers[i]) right.push(numbers[i]);
    else left.push(numbers[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex < left.length) {
    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
  } else {
    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result;
}

function mergeSort(numbers) {
  if (numbers.length < 2) {
    return numbers;
  }

  const mid = Math.floor(numbers.length / 2);
  let left = numbers.slice(0, mid);
  let right = numbers.slice(mid, numbers.length);

  return merge(mergeSort(left), mergeSort(right));
}

getRandomNumber(100, 100, numbers);

console.log(mergeSort(numbers));
