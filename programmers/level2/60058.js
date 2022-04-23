function check(s) {
  const stack = [];
  let top = -1;

  for (let i = 0; i < s.length; i++) {
    if (stack[top] === '(' && s[i] === ')') {
      stack.pop();
      top--;
    } else {
      stack.push(s[i]);
      top++;
    }
  }

  return !stack.length;
}

function convert(s) {
  if (!s) return s;

  let [u, v] = _split(s);

  if (check(u)) {
    return u + convert(v);
  } else {
    let result = '(';
    result += convert(v) + ')';
    u = u.slice(1, u.length - 1);

    for (let i = 0; i < u.length; i++) {
      if (u[i] === '(') result += ')';
      else result += '(';
    }

    return result;
  }
}

function _split(s) {
  let u = s[0];
  let v = '';
  let openner = 0;
  let closer = 0;

  s[0] === '(' ? openner++ : closer++;

  for (let i = 1; i < s.length; i++) {
    if (openner === closer) {
      v = s.slice(i, s.length);
      break;
    }

    s[i] === '(' ? openner++ : closer++;
    u += s[i];
  }

  return [u, v];
}

function solution(p) {
  let answer = p;

  if (check(answer)) return answer;
  else {
    while (!check(answer)) {
      answer = convert(answer);
    }
  }

  return answer;
}

const p = '()))((()';

console.log(solution(p));
