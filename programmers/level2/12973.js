function solution(s) {
  const stack = [];
  let top = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === stack[top]) {
      stack.pop();
      top--;
    } else {
      stack.push(s[i]);
      top++;
    }
  }

  console.log(stack);

  return stack.length ? 0 : 1;
}

const s = 'baabaa';

solution(s);
