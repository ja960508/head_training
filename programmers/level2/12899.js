function solution(n) {
  let converted = n.toString(3).split("").map(Number);

  for (let i = converted.length - 1; i >= 1; i--) {
    if (converted[i] <= 0) {
      converted[i] += 3;
      converted[i - 1]--;
    }
  }

  converted = converted.map((c) => {
    if (!c) return "";
    if (c === 3) return 4;

    return c;
  });

  return converted.join("");
}

const n = 9;

solution(n);
