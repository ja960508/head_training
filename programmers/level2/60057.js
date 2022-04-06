function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= s.length / 2; i++) {
    let counter = 1;
    const temp = [];

    for (let j = 0; j < s.length; j += i) {
      const prev = s.slice(j, j + i);
      const next = s.slice(j + i, j + i + i);

      if (prev === next) {
        counter++;
      } else {
        counter !== 1 && temp.push(counter);
        temp.push(prev);
        counter = 1;
      }
    }

    if (answer > temp.join("").length) {
      answer = temp.join("").length;
    }
  }

  return answer;
}

const s = "aabbb";

solution(s);
