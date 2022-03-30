function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length ? arr : [-1];
}

const arr = [4, 3, 2, 1];

solution(arr);
