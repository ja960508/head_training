function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  answer = new Set(answer);
  answer = Array.from(answer);
  // = [...answer];
  answer.sort((a, b) => a - b);

  console.log(answer);

  return answer;
}

const numbers = [2, 1, 3, 4, 1];

solution(numbers);
