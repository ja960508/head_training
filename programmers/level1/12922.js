function solution(n) {
  let answer = '';

  for (let i = 0; i < n; i += 2) {
    answer += '수박';
  }

  answer = answer.slice(0, n);

  console.log(answer);
  return answer;
}

const n = 3;

solution(n);
