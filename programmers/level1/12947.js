function solution(x) {
  const digitSum = String(x)
    .split('')
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);

  return x % digitSum == false;
}

const x = 10;

solution(x);
