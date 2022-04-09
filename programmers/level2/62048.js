function solution(W, H) {
  let result = 0;
  const slope = H / W;

  for (let i = 1; i <= W; i++) {
    result += Math.ceil(slope * i);
  }

  console.log(result);

  return (W * H - result) * 2;
}
const W = 8;
const H = 12;

solution(W, H);
