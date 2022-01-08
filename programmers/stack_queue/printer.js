function solution(priorities, location) {
  let answer = 0;

  while (priorities.length > 0) {
    if (priorities.some((data) => priorities[0] < data)) {
      priorities.push(priorities[0]);
      priorities.shift();

      if (location === 0) {
        location = priorities.length - 1;
      } else {
        location--;
      }
    } else {
      priorities.shift();
      answer++;

      if (location === 0) {
        break;
      }
      location--;
    }
  }

  return answer;
}

const priorities = [2, 1, 3, 2];
const location = 1;

console.log(solution(priorities, location));
