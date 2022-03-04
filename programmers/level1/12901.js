function solution(a, b) {
  let answer = '';
  const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const month_days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const currentMonth = 1;
  const currentDay = 1;
  let gap = 0;

  for (let i = currentMonth; i < a; i++) {
    gap += month_days[i - 1];
  }

  gap += b - currentDay;

  answer = days[gap % 7];

  console.log(answer);
  return answer;
}

const a = 2;
const b = 1;

solution(a, b);
