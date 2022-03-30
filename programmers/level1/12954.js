function solution(x, n) {
  const answer = new Array(n).fill(0).map((data, i) => data + x * (i + 1));

  return answer;
}

const x = 2;
const n = 5;

solution(x, n);
