function editor(answer) {
  while (answer[0] === ".") {
    answer.shift();
    answer = editor(answer);
  }

  while (answer[answer.length - 1] === ".") {
    answer.pop();
    answer = editor(answer);
  }

  if (answer.length === 0) {
    answer.push("a");
  }

  if (answer.length >= 16) {
    answer.splice(15);
    answer = editor(answer);
  }

  while (answer.length <= 2) {
    answer.push(answer[answer.length - 1]);
    answer = editor(answer);
  }

  return answer;
}

function dubbleDotCheck(answer) {
  const check = /\.\./;

  while (check.test(answer)) {
    answer = answer.replace("..", ".");
  }

  return answer.split("");
}

function solution(new_id) {
  let answer = "";
  const isAlpha = /[a-z]|[A-Z]/;
  const isNum = /[0-9]/;
  const isVaildSpecialChar = /[-_.]/;

  answer = new_id.toLowerCase().split("");
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
    .join("");

  console.log(answer);
  answer = dubbleDotCheck(answer);
  answer = editor(answer);
  answer = answer.join("");

  console.log(answer);
  return answer;
}

const new_id = "z-+.^.";

solution(new_id);

// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다. O
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다. O
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다. O
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
