function solution(survey, choices) {
  const BASE_SCORE = 4;
  const MBTI = ['RT', 'CF', 'JM', 'AN'];
  const score = {};
  MBTI.forEach(([a, b]) => {
    score[a] = 0;
    score[b] = 0;
  });
  let answer = '';

  survey.forEach(([first, second], idx) => {
    const caseScore = choices[idx] - BASE_SCORE;
    if (caseScore < 0) {
      score[first] += Math.abs(caseScore);
    } else {
      score[second] += Math.abs(caseScore);
    }
  });

  for (const [firstType, secondType] of MBTI) {
    const firstTypeScore = score[firstType];
    const secondTypeScore = score[secondType];

    answer += firstTypeScore >= secondTypeScore ? firstType : secondType;
  }

  return answer;
}

const survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
const choices = [5, 3, 2, 7, 5];

solution(survey, choices);
