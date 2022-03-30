function solution(s) {
  const reg = /^\d{4}$|^\d{6}$/;

  return reg.test(s);
}

const s = '1234';

console.log(solution(s));
