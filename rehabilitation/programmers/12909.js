function solution(s) {
  const stack = [];
  const OPEN = '(';

  if (s[0] !== OPEN) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === OPEN || !stack.length) {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] === OPEN) {
        stack.pop();
      }
    }
  }

  return !Boolean(stack.length);
}

const s = '()()';

solution(s);
