function solution(lottos, win_nums) {
  let answer = [];
  let counter = 0;
  let base = 7;
  const numOfZeros = lottos.filter((data) => data === 0).length;

  for (let num of win_nums) {
    lottos.includes(num) && counter++;
  }

  answer.push(
    base - numOfZeros - counter > 6 ? 6 : base - numOfZeros - counter
  );
  answer.push(base - counter > 6 ? 6 : base - counter);

  console.log(answer);
  return answer;
}

const lottos = [0, 0, 0, 0, 0, 0];
const win_nums = [31, 10, 45, 1, 6, 19];

solution(lottos, win_nums);
