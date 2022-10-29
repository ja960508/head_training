function solution(number) {
  let answer = 0;

  const getCombination = (fixed, select, index) => {
    if (select === 0) {
      answer += fixed.reduce((acc, curr) => acc + curr, 0) ? 0 : 1;
      return;
    }

    for (let i = index; i < number.length; i++) {
      if (number.length - i < select) break;
      getCombination([...fixed, number[i]], select - 1, i + 1);
    }
  };

  // for (let i = 0; i < number.length - 2; i++) {
  //   for (let j = i + 1; j < number.length - 1; j++) {
  //     for (let k = j + 1; k < number.length; k++) {
  //       const acc = number[i] + number[j] + number[k];

  //       if (acc === 0) {
  //         answer++;
  //       }
  //     }
  //   }
  // }

  getCombination([], 3, 0);

  return answer;
}

const number = [-2, 3, 0, 2, -5];

solution(number);
