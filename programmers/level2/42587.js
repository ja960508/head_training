function solution(priorities, location) {
  let answer = 0;

  while (priorities.length) {
    if (!priorities.some((p) => priorities[0] < p)) {
      answer++;
      priorities.shift();
      if (location === 0) break;
      location--;
    } else {
      priorities.push(priorities.shift());
      if (location === 0) {
        location = priorities.length - 1;
      } else {
        location--;
      }
    }
  }

  return answer;
}

const priorities = [2, 1, 3, 3, 2];
const location = 3;

solution(priorities, location);
