function solution(arr, divisor) {
  const answer =
    arr.filter((data) => !(data % divisor)).length > 0
      ? arr.filter((data) => !(data % divisor)).sort((a, b) => a - b)
      : [-1];

  console.log(answer);
  return answer;
}

const arr = [5, 9, 7, 10];
const divisor = 5;

solution(arr, divisor);
