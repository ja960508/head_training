function solution(num) {
  let _num = num;
  let counter = 0;

  while (_num !== 1) {
    if (counter === 500) return -1;

    if (_num % 2) {
      _num = _num * 3 + 1;
    } else {
      _num = _num / 2;
    }

    counter++;
  }

  return counter;
}

const num = 6;

solution(num);
