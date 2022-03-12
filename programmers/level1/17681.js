function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    // const arr1ToBinary = arr1[i].toString(2).padStart(5, 0);
    // const arr2ToBinary = arr2[i].toString(2).padStart(5, 0);

    const info = (arr1[i] | arr2[i])
      .toString(2)
      .padStart(n, 0)
      .split('1')
      .join('#')
      .split('0')
      .join(' ');

    answer.push(info);
  }

  console.log(answer);

  return answer;
}

const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

solution(n, arr1, arr2);
