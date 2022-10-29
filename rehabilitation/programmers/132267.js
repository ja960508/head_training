function solution(a, b, n) {
  let answer = 0;
  let emptyBottle = n;

  while (Math.floor(emptyBottle / a)) {
    const addedCoke = Math.floor(emptyBottle / a) * b;
    emptyBottle = emptyBottle % a;
    emptyBottle += addedCoke;

    answer += addedCoke;
  }

  return answer;
}

const a = 2;
const b = 1;
const n = 20;

solution(a, b, n);
