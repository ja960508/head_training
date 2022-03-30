function solution(n) {
  let answer = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      answer += i;
      i !== parseInt(n / i) && (answer += parseInt(n / i));
    }
  }

  return answer;
}

const n = 12;

solution(n);
