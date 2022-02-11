function solution(numbers) {
  const answer = parseInt((10 * 9) / 2);
  const sumOfParam = numbers.reduce((acc, num) => acc + num, 0);

  return answer - sumOfParam;
}

const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

console.log(solution(numbers));
