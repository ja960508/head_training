function setMatrix(rows, columns) {
  const matrix = [];
  let counter = 1;

  for (let i = 0; i < rows; i++) {
    let temp = [];
    for (let j = 0; j < columns; j++) {
      temp.push(counter++);
    }

    matrix.push(temp);
  }

  return matrix;
}

function getSequence(x1, y1, x2, y2, matrix) {
  const result = [];

  for (let i = y1; i < y2; i++) {
    result.push(matrix[x1][i]);
  } // upper
  for (let i = x1; i < x2; i++) {
    result.push(matrix[i][y2]);
  } // right
  for (let i = y2; i > y1; i--) {
    result.push(matrix[x2][i]);
  } // bottom
  for (let i = x2; i > x1; i--) {
    result.push(matrix[i][y1]);
  } // left

  result.unshift(result.pop());

  return result;
}

function setSequence(x1, y1, x2, y2, matrix, sequence) {
  let counter = 0;
  for (let i = y1; i < y2; i++) {
    matrix[x1][i] = sequence[counter++];
  } // upper
  for (let i = x1; i < x2; i++) {
    matrix[i][y2] = sequence[counter++];
  } // right
  for (let i = y2; i > y1; i--) {
    matrix[x2][i] = sequence[counter++];
  } // bottom
  for (let i = x2; i > x1; i--) {
    matrix[i][y1] = sequence[counter++];
  } // left
}

function solution(rows, columns, queries) {
  const answer = [];
  const matrix = setMatrix(rows, columns);

  for (let query of queries) {
    const [x1, y1, x2, y2] = query.map((d) => d - 1);
    const sequence = getSequence(x1, y1, x2, y2, matrix);
    answer.push(Math.min(...sequence));

    setSequence(x1, y1, x2, y2, matrix, sequence);
  }

  console.log(answer);
  return answer;
}

const rows = 100;
const columns = 97;
const queries = [[1, 1, 100, 97]];

solution(rows, columns, queries);
