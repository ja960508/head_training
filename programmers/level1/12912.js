function solution(a, b) {
  return parseInt(((Math.abs(a - b) + 1) * (a + b)) / 2);
}

const a = 3;
const b = 5;

console.log(solution(a, b));
