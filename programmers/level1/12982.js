function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] < 0) {
      break;
    }

    answer++;
    budget -= d[i];
  }

  console.log(answer);
  return answer;
}

const d = [1, 3, 2, 5, 4];
const budget = 9;

solution(d, budget);
