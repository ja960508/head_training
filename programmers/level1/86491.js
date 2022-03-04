function solution(sizes) {
  let answer = 0;
  let width = 0;
  let height = 0;

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);
  }

  for (let i = 0; i < sizes.length; i++) {
    const [currWidth, currHeight] = sizes[i];

    if (width < currWidth) {
      width = currWidth;
    }
    if (height < currHeight) {
      height = currHeight;
    }
  }

  answer = width * height;
  console.log(answer);
  return answer;
}

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

solution(sizes);
