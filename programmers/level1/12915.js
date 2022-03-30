function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    else if (a[n] > b[n]) return 1;
    else {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    }
  });
  return strings;
}

const strings = ['abce', 'abcd', 'cdx'];
const n = 2;

console.log(solution(strings, n));
