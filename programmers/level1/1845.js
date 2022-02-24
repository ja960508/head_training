function solution(nums) {
  const max = parseInt(nums.length / 2);
  const _set = new Set(nums);

  return _set.size <= max ? _set.size : max;
}

function second_solution(nums) {
  const max = parseInt(nums.length / 2);
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = true;
    }
  }

  return Object.keys(obj).length <= max ? Object.keys(obj).length : max;
}

const nums = [3, 3, 3, 2, 2, 2];

console.log(solution(nums));
console.log(second_solution(nums));
