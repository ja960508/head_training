function solution(progresses, speeds) {
  const answer = [];

  while (progresses.length > 0) {
    let work = Math.ceil((100 - progresses[0]) / speeds[0]);
    let counter = 0;
    let index = -1;

    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i] * work;
    }

    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) break;

      index = i;
    }

    for (let i = 0; i <= index; i++) {
      progresses.shift();
      speeds.shift();
      counter++;
    }

    counter !== 0 && answer.push(counter);
  }

  console.log(answer);
  return answer;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

solution(progresses, speeds);
