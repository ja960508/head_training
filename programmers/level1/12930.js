function solution(s) {
  return s
    .split(' ')
    .map((str) => {
      let result = '';

      for (let i = 0; i < str.length; i++) {
        result += i % 2 ? str[i] : str[i].toUpperCase();
      }

      return result;
    })
    .join(' ');
}

const s = 'TrY HeLlO WoRlD';

console.log(solution(s));
