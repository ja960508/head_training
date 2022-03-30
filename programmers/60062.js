const getPermutation = (arr, n) => {
  if (n === 1) return arr.map((el) => [el]);
  const result = [];

  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const perms = getPermutation(rest, n - 1);
    const attached = perms.map((perm) => [fixed, ...perm]);
    result.push(...attached);
  });

  return result;
};

function solution(n, weak, dist) {
  const linear = new Array(weak.length * 2 - 1).fill(0);

  for (let i = 0; i < linear.length; i++) {
    linear[i] = i < weak.length ? weak[i] : n + weak[i - weak.length];
  }

  dist.sort((a, b) => b - a);

  for (let i = 1; i <= dist.length; i++) {
    const perm = getPermutation(dist, i);

    for (const occation of perm) {
      for (let j = 0; j < weak.length; j++) {
        let line = linear.slice(j, weak.length + j);

        for (let k = 0; k < occation.length; k++) {
          let coverage = line[0] + occation[k];
          console.log(line, coverage, occation, linear);
          line = line.filter((data) => data > coverage);
          if (line.length <= 0) return i;
        }
      }
    }
  }

  return -1;
}

const n = 12;
const weak = [1, 5, 6, 10];
const dist = [1, 2, 3, 4];

solution(n, weak, dist);
