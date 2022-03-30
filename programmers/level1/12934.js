function solution(n) {
  const root = Math.sqrt(n);
  if (Number.isInteger(root)) {
    return (root + 1) ** 2;
  }

  return -1;
}

const n = 122;
solution(n);
