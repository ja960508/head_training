function editor(answer) {
  if (answer.length === 0) {
    answer.push('a');
  }

  if (answer.length >= 16) {
    answer.splice(15);
  }

  while (answer[0] === '.') {
    answer.shift();
    answer = editor(answer);
  }

  while (answer[answer.length - 1] === '.') {
    answer.pop();
    answer = editor(answer);
  }

  while (answer.length <= 2) {
    answer.push(answer[0]);
  }

  return answer;
}

function dubbleDotCheck(answer) {
  const check = /../;

  while (check.test(answer)) {
    answer = answer.replace('..', '.');
  }

  return answer;
}

function solution(new_id) {
  let answer = '';
  const isAlpha = /[a-z]|[A-Z]/;
  const isNum = /[0-9]/;
  const isVaildSpecialChar = /[-_.]/;

  answer = new_id.toLowerCase().split(' ');
  answer = answer
    .filter((data) => {
      if (
        isAlpha.test(data) ||
        isNum.test(data) ||
        isVaildSpecialChar.test(data)
      ) {
        return true;
      }
      return false;
    })
    .join('');
  answer = dubbleDotCheck(answer).split(' ');

  answer = editor(answer);
  answer = answer.join('');

  return answer;
}

const new_id = '...!@BaT#*..y.abcdefghijklm';

solution(new_id);
