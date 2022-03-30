function solution(s) {
  let count = 0;
  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    s[i] === 'p' && count++;
    s[i] === 'y' && count--;
  }

  return !Boolean(count);
}

const s = 'pPoooyY';

solution(s);
