function solution(n) {
  const fibo = [0n, 1n];

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
  }

  return Number(fibo[n] % 1234567n);
}

const n = 100000;

console.log(solution(n));
