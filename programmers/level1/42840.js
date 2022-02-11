function checkPerson1(number, i) {
  if ((i % 5) + 1 === number) {
    return true;
  }

  return false;
}

function checkPerson2(number, i) {
  if (i % 2 === 0) {
    return number === 2;
  }

  const temp = i % 8;

  switch (temp) {
    case 1:
      return number === 1;
    case 3:
      return number === 3;
    case 5:
      return number === 4;
    case 7:
      return number === 5;
  }
}

function checkPerson3(number, i) {
  const temp = i % 10;

  switch (temp) {
    case 0:
    case 1:
      return number === 3;
    case 2:
    case 3:
      return number === 1;
    case 4:
    case 5:
      return number === 2;
    case 6:
    case 7:
      return number === 4;
    case 8:
    case 9:
      return number === 5;
  }
}

function solution(answers) {
  let answer = [];
  let max = 0;
  const corrects = {
    1: 0,
    2: 0,
    3: 0,
  };

  for (let i = 0; i < answers.length; i++) {
    if (checkPerson1(answers[i], i)) {
      corrects[1]++;
    } // 수포자 1

    if (checkPerson2(answers[i], i)) {
      corrects[2]++;
    }

    if (checkPerson3(answers[i], i)) {
      corrects[3]++;
    }
  }

  Object.keys(corrects).map((key) => {
    if (max < corrects[key]) max = corrects[key];

    return;
  });

  Object.keys(corrects).map(
    (key) => corrects[key] !== max && delete corrects[key]
  );

  answer = Object.keys(corrects)
    .sort((a, b) => {
      return a - b;
    })
    .map(Number);

  console.log(answer);
  return answer;
}

const answers = [1, 3, 2, 4, 2];

solution(answers);
