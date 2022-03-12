function bonusDecoder(bonus) {
  let mul = 0;

  if (bonus.length < 2) {
    switch (bonus) {
      case 'S':
        mul = 1;
        break;
      case 'D':
        mul = 2;
        break;
      case 'T':
        mul = 3;
        break;
    }
  }

  return mul;
}

function solution(dartResult) {
  let answer = 0;
  const scores = dartResult
    .split(/[a-z]|[A-Z]|\*|\#/)
    .filter((data) => data !== '');
  const bonus_option = dartResult.split(/\d/).filter((data) => data !== '');
  const star = '*';
  const oops = '#';
  let prev = 0;

  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    let [bonus, option] = bonus_option[i];
    bonus = bonusDecoder(bonus);

    if (option) {
      if (option === star) {
        answer += prev;
        prev = score ** bonus * 2;
      } else if (option === oops) {
        prev = score ** bonus * -1;
      }
    } else {
      prev = score ** bonus;
    }

    answer += prev;
  }

  console.log(answer);

  return answer;
}

const dartResult = '1S2D*3T';

solution(dartResult);
