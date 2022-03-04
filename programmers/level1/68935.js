function converter(n) {
  const result = [];

  while (parseInt(n / 3)) {
    result.push(n % 3);
    n = parseInt(n / 3);
  }

  result.push(n);

  return result;
}

function solution(n) {
  let answer = 0;
  let counter = 0;
  const converted = converter(n);

  for (let i = converted.length - 1; i >= 0; i--) {
    answer += converted[i] * 3 ** counter;
    counter++;
  }

  console.log(answer);
  return answer;
}

const n = 45;

solution(n);
