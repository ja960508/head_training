function solution(sizes) {
  const widths = [];
  const heights = [];

  for (let size of sizes) {
    size.sort((a, b) => b - a);

    widths.push(size[0]);
    heights.push(size[1]);
  }

  return Math.max(...widths) * Math.max(...heights);
}

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

solution(sizes);
