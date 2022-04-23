function solution(orders, course) {
  function getCombination(combAnswer, menu, fixed, select, index) {
    if (select === 0) {
      combAnswer.push(fixed);
      return;
    }

    for (let i = index; i < menu.length; i++) {
      if (menu.length - i < select) break;
      getCombination(combAnswer, menu, [...fixed, menu[i]], select - 1, i + 1);
    }
  }

  const answer = [];
  const info = {};
  const resultInfo = {};

  for (let c of course) {
    resultInfo[c] = {
      menu: '',
      counter: 0,
    };
  }

  for (let menu of orders) {
    const combAnswer = [];

    for (let c of course) {
      getCombination(combAnswer, menu.split('').sort().join(''), [], c, 0);
    }

    for (let comb of combAnswer) {
      if (!info[comb.join('')]) info[comb.join('')] = 0;

      info[comb.join('')]++;
    }
  }

  for (let menu in info) {
    if (info[menu] < 2) continue;

    if (resultInfo[menu.length].counter < info[menu]) {
      resultInfo[menu.length].menu = menu;
      resultInfo[menu.length].counter = info[menu];
    } else if (resultInfo[menu.length].counter == info[menu]) {
      resultInfo[menu.length].menu += `,${menu}`;
    }
  }

  for (let result in resultInfo) {
    if (resultInfo[result].menu.length) {
      answer.push(...resultInfo[result].menu.split(','));
    }
  }

  return answer.sort();
}

const orders = ['XYZ', 'XWY', 'WXA'];
const course = [2, 3, 4];

solution(orders, course);
