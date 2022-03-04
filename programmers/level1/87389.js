function solution(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 1) return i;
  }

  return -1;
}

const n = 10;

solution(n);
