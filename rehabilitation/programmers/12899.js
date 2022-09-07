function solution(n) {
  let answer = [];
  const THREE = 3;
  let number = n;

  while (1) {
    const share = parseInt(number / THREE, 10);
    const remainder = number % THREE;

    answer.push(remainder);

    if (!share) {
      break;
    }

    number = share;
  }

  return String(Number(convert(answer)));
}

function convert(arr) {
  return arr
    .map((item, idx, thisArr) => {
      if (item <= 0) {
        if (idx + 1 >= thisArr.length) return item;

        thisArr[idx + 1] -= 1;

        return item + 3;
      }

      return item;
    })
    .map((item) => (item === 3 ? 4 : item))
    .reverse()
    .join('');
}

const n = 9;

solution(n);
