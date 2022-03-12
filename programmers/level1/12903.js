function solution(s) {
  let answer = '';
  const mid = s.length / 2;

  answer =
    Math.floor(mid) === Math.ceil(mid)
      ? s.slice(Math.floor(mid) - 1, Math.floor(mid) + 1)
      : s.slice(Math.floor(mid), Math.ceil(mid));

  console.log(answer);

  return answer;
}

const s = 'qwer';

solution(s);
