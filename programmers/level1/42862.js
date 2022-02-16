function solution(n, lost, reserve) {
  let _lost = lost.filter((data) => !reserve.includes(data));
  let _reserve = reserve.filter((data) => !lost.includes(data));
  _lost.sort((a, b) => a - b);
  _reserve.sort((a, b) => a - b);
  let answer = n - _lost.length;
  let index;

  for (let i = 0; i < _lost.length; i++) {
    const [prev, next] = [_lost[i] - 1, _lost[i] + 1];

    if (_reserve.includes(prev)) {
      index = _reserve.indexOf(prev);
      _reserve.splice(index, 1);
      answer++;
    } else if (_reserve.includes(next)) {
      index = _reserve.indexOf(next);
      _reserve.splice(index, 1);
      answer++;
    }
  }

  console.log(answer);
  return answer;
}

const n = 7;
const lost = [2, 3, 4];
const reserve = [1, 2, 3, 6];

solution(n, lost, reserve);
