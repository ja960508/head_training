const combAnswer = [];
const permAnswer = [];

function getCombination(fixed, select, index) {
  if (select === 0) {
    combAnswer.push(fixed);
    return;
  }

  for (let i = index; i < arr.length; i++) {
    if (arr.length - i < select) break; // 남은 원소의 개수가 선택해야할 원소의 개수보다 적을 때
    getCombination([...fixed, arr[i]], select - 1, i + 1);
  }

  return;
}

function getPermutation(fixed, select, visited) {
  if (select === 0) {
    permAnswer.push(fixed);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited.includes(i)) continue;
    getPermutation([...fixed, arr[i]], select - 1, [...visited, i]);
  }

  return;
}

const arr = [1, 2, 3, 4];
getPermutation([], 3, []);
getCombination([], 3, 0);

console.log(combAnswer);
console.log(permAnswer);
