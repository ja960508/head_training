function solution(participant, completion) {
  let obj = {};
  for (player of participant) {
    if (player in obj) {
      obj[player] += 1;
    } else {
      obj[player] = 1;
    }
  }

  for (player of completion) {
    obj[player] -= 1;

    if (obj[player] === 0) {
      delete obj[player];
    }
  }

  return Object.keys(obj).join(' ');
}

const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];

solution(participant, completion);
