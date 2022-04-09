function solution(numbers, target) {
  let answer = 0;
  const dp = [];

  for (let i = 0; i <= numbers.length; i++) {
    dp.push([]);
  }

  dp[0] = [0];

  for (let i = 0; i < numbers.length; i++) {
    for (const d of dp[i]) {
      dp[i + 1].push(d + numbers[i]);
      dp[i + 1].push(d - numbers[i]);
    }
  }

  return dp[numbers.length].filter((d) => d === target).length;
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;

solution(numbers, target);
