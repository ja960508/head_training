function solution(s) {
  let answer = "";
  let temp = "";

  for (let i = 0; i < s.length; i++) {
    temp += s[i];

    if (s[i] === " " || i === s.length - 1) {
      temp = [...temp].map((c) => c.toLowerCase());
      temp[0] = temp[0].toUpperCase();

      answer += temp.join("");
      temp = "";
    }
  }

  return answer;
}

const s = "3people unFollowed me";

solution(s);
