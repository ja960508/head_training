function solution(progresses, speeds) {
  let answer = [];
  let publishedFunc;

  while (progresses.length > 0) {
    publishedFunc = 0;

    progresses = progresses.map((data, index) => (data += speeds[index]));

    while (progresses[0] >= 100) {
      publishedFunc++;
      progresses.shift();
      speeds.shift();
    }

    if (publishedFunc !== 0) {
      answer.push(publishedFunc);
    }
  }

  console.log(answer);
  return answer;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

solution(progresses, speeds);
