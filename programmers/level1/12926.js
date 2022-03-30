function solution(s, n) {
  const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const upper = lower.map((c) => c.toUpperCase());

  return s
    .split('')
    .map((c) => {
      if (c == false) {
        return c;
      }

      if (lower.includes(c)) {
        return lower[(lower.indexOf(c) + n) % lower.length];
      } else {
        return upper[(upper.indexOf(c) + n) % upper.length];
      }
    })
    .join('');
}

const s = 'a B z';
const n = 1;

console.log(solution(s, n));
