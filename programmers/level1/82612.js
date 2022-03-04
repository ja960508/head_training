function solution(price, money, count) {
  let answer = money;

  for (let i = 1; i <= count; i++) {
    answer -= price * i;
  }

  if (answer >= 0) {
    return 0;
  }

  return -answer;
}

const price = 3;
const money = 20;
const count = 4;

solution(price, money, count);
