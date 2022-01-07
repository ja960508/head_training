function solution(clothes) {
  let obj = {};
  let result = 1;

  for (let item of clothes) {
    const [cloth, kind] = [...item];

    if (kind in obj) {
      obj[kind].push(cloth);
    } else {
      obj[kind] = [cloth];
    }
  }
  for (let cloth in obj) {
    result *= obj[cloth].length + 1;
  }

  result -= 1;

  return result;
}

const clothes = [
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];

console.log(solution(clothes));
