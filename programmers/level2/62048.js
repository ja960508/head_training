function solution(W, H) {
  let answer = W * H;
  const slope = H / W;


  return answer - 2 * Math.min(W, H);
}

const W = 8;
const H = 12;

solution(W, H);
