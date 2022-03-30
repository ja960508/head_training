function solution(N) {
  const answer = String(N)
    .split('')
    .reduce((acc, curr) => Number(acc) + Number(curr), 0);

  return answer;
}

const N = '123';

console.log(solution(N));
