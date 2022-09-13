function solution(s) {
  let str = s;
  let convertedLength;
  let numOfZeros = 0;
  let count = 0;

  while (convertedLength !== 1) {
    const convertedStr = str.replace(/0/g, "");
    convertedLength = convertedStr.length;
    numOfZeros += str.length - convertedLength;
    str = convertedLength.toString(2);
    count++;
  }

  return [count, numOfZeros];
}

const s = "110010101001";
solution(s);
