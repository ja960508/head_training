function bubblePop(bucket) {
  let answer = 0;

  for (let i = 0; i < bucket.length - 1; ) {
    if (bucket[i] !== bucket[i + 1]) {
      i++;
    } else {
      bucket.splice(i, 2);
      answer += 2;
      i = 0;
    }
  }

  return answer;
}

function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  while (moves.length > 0) {
    const current = moves.shift() - 1;
    // 인덱스 처리 - 1

    for (let i = 0; i < board.length; i++) {
      if (board[i][current] !== 0) {
        bucket.push(board[i][current]);
        board[i][current] = 0;
        break;
      }
    }
  }

  answer = bubblePop(bucket);

  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

solution(board, moves);
