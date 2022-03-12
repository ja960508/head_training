function solution(arr) {
  const answer = [];
  let prev = -1;

  for (let i = 0; i < arr.length; i++) {
    if (prev !== arr[i]) answer.push(arr[i]);
    prev = arr[i];
  }

  console.log(answer);
  return answer;
}

const arr = [1, 1, 3, 3, 0, 1, 1];

solution(arr);
