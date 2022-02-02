function solution(s) {
  let answer = "";
  const isAlpha = /[a-z]/;
  let temp = "";
  const mapper = {};
  const words = [
    "0	zero",
    "1	one",
    "2	two",
    "3	three",
    "4	four",
    "5	five",
    "6	six",
    "7	seven",
    "8	eight",
    "9	nine",
  ];
  words.map((data) => {
    const [value, key] = data.split("\t");
    mapper[key] = value;
  });

  for (let i = 0; i < s.length; i++) {
    if (isAlpha.test(s[i])) {
      temp += s[i];
    } else {
      answer += s[i];
    }

    if (temp in mapper) {
      answer += mapper[temp];
      temp = "";
    }
  }

  console.log(answer);
  return Number(answer);
}

const s = "one4seveneight";

solution(s);
