function gcd(a, b) {
  if (a % b === 0) return b;

  return gcd(b, a % b);
}

function solution(n, m) {
  let answer = [];
  answer.push(n < m ? gcd(m, n) : gcd(n, m));
  answer.push(parseInt((n * m) / answer[0]));

  return answer;
}

const n = 3;
const m = 12;
solution(n, m);
