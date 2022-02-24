function solution(N, stages) {
  let answer = [];
  let players = stages.length;
  const obj = {};

  for (let i = 1; i <= N; i++) {
    obj[i] = 0;
  }

  stages.forEach((data) => {
    data !== N + 1 && obj[data]++;
  });

  Object.keys(obj).forEach((data) => {
    let playing = obj[data];
    obj[data] = playing / players;
    players -= playing;
  });

  answer = Object.keys(obj)
    .sort((a, b) => obj[b] - obj[a])
    .map(Number);

  return answer;
}

const N = 4;
const stages = [4, 4, 4, 4, 4];

console.log(solution(N, stages));
