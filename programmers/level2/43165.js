function solution(numbers, target) {
  const dp = Array.from(Array(numbers.length + 1), () => new Array());

  dp[0] = [0];

  for (let i = 0; i < numbers.length; i++) {
    for (const d of dp[i]) {
      dp[i + 1].push(d + numbers[i]);
      dp[i + 1].push(d - numbers[i]);
    }
  }

  return dp[numbers.length].filter((d) => d === target).length;
}

// function solution(numbers, target) {
//   function DFS(value, depth) {
//     if (depth === numbers.length) {
//       if (value === target) return 1;
//       else return 0;
//     } else {
//       return (
//         DFS(value + numbers[depth], depth + 1) +
//         DFS(value - numbers[depth], depth + 1)
//       );
//     }
//   }

//   return DFS(0, 0);
// }

// function solution(numbers, target) {
//   let answer = 0;
//   const willVisit = [[0, 0]];

//   while (willVisit.length > 0) {
//     const [value, depth] = willVisit.shift();

//     if (depth === numbers.length && value === target) {
//       answer++;
//       continue;
//     }

//     if (depth < numbers.length) {
//       willVisit.push([value + numbers[depth], depth + 1]);
//       willVisit.push([value - numbers[depth], depth + 1]);
//     }
//   }

//   return answer;
// }

const numbers = [4, 1, 2, 1];
const target = 4;

solution(numbers, target);
