function isDivisorNumOdd(num) {
  let result = 0;

  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      if (i === parseInt(num / i)) {
        result++;
      } else {
        result += 2;
      }
    }
  }

  return result % 2;
}

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    if (!isDivisorNumOdd(i)) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  console.log(answer);
  return answer;
}

const left = 13;
const right = 17;

solution(left, right);
