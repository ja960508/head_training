function solution(numbers, hand) {
  // * = 10, # = 12
  // row * 3 + column + 1;
  let answer = "";
  numbers = numbers.map((data) => {
    if (data === "*") {
      return 9;
    }

    if (data === "#") {
      return 11;
    }

    if (data === 0) {
      return 10;
    }

    return data - 1;
  });

  let currentLeft = [3, 0];
  let currentRight = [3, 2];

  for (let i = 0; i < numbers.length; i++) {
    const row = parseInt(numbers[i] / 3);
    const column = numbers[i] % 3;

    if (column === 0) {
      currentLeft = [row, column];
      answer += "L";
    } else if (column === 2) {
      currentRight = [row, column];
      answer += "R";
    } else {
      const disFromLeft =
        Math.abs(currentLeft[0] - row) + Math.abs(currentLeft[1] - column);
      const disFromRight =
        Math.abs(currentRight[0] - row) + Math.abs(currentRight[1] - column);

      if (disFromLeft === disFromRight) {
        if (hand === "right") {
          currentRight = [row, column];
          answer += "R";
        } else {
          currentLeft = [row, column];
          answer += "L";
        }
      } else if (disFromRight > disFromLeft) {
        currentLeft = [row, column];
        answer += "L";
      } else {
        currentRight = [row, column];
        answer += "R";
      }
    }
  }

  console.log(answer);
  return answer;
}

const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand = "left";

solution(numbers, hand);
