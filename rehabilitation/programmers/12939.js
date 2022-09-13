function solution(s) {
  const numbers = s.split(" ").map(Number);

  return [Math.min(...numbers), Math.max(...numbers)].join(" ");
}

const s = "-1 -2 -3 -4";

solution(s);
