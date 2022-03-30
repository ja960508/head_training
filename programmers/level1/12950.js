function solution(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    let acc = [];
    for (let j = 0; j < arr1[i].length; j++) {
      acc.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(acc);
  }

  return result;
}

const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];

solution(arr1, arr2);
