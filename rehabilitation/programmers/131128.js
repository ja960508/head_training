function solution(X, Y) {
  let answer = '';
  const INITIAL_VALUE = '-1';
  const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

  const preprocessNumbers = (str) => {
    const result = {};

    for (let c of str) {
      if (!result[c]) result[c] = 0;
      result[c]++;
    }

    return result;
  };

  const XNumbers = preprocessNumbers(X);
  const YNumbers = preprocessNumbers(Y);

  for (let number of numbers) {
    answer += number.repeat(Math.min(XNumbers[number], YNumbers[number]));
  }

  if (answer.startsWith('0')) return '0';

  return answer.length ? answer : INITIAL_VALUE;
}

const X = '100';
const Y = '203045';

solution(X, Y);
