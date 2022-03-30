function solution(n) {
  return Number(String(n).split('').sort().reverse().join(''));
}

const n = 118372;

solution(n);
