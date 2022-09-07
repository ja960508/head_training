function solution(s) {
  let answer = s.length;
  let _s = s;

  for (let i = 1; i <= s.length / 2; i++) {
    let counter = 1;
    const temp = [];

    for (let j = 0; j < s.length; j += i) {
      const prev = _s.slice(j, j + i);
      const next = _s.slice(j + i, j + i + i);

      if (prev === next) {
        counter++;
      } else {
        temp.push(prev);
        counter !== 1 && temp.push(counter);
        counter = 1;
      }
    }

    if (answer > temp.join('').length) {
      answer = temp.join('').length;
    }
  }

  return answer;
}

const s = 'ababcdcdababcdcd';

solution(s);
