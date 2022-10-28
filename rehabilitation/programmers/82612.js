function solution(price, money, count) {
  let acc = 0;

  for (let i = 1; i <= count; i++) {
    acc += price * i;
  }

  return Math.max(acc - money, 0);
}

const price = 3;
const money = 20;
const count = 4;

solution(price, money, count);
