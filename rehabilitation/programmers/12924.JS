function solution(n) {
  let answer = 1;

  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    let curr = i;
    for (let j = i + 1; j <= Math.ceil(n / 2); j++) {
      curr += j;

      if (curr > n) {
        break;
      }

      if (curr === n) {
        answer++;

        break;
      }
    }
  }

  console.log(answer);

  return answer;
}

const n = 9;

solution(n);
