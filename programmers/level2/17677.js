function getIntersection(str1Token, str2Token) {
  let result = 0;

  for (let token in str1Token) {
    if (str2Token[token]) {
      result += Math.min(str1Token[token], str2Token[token]);
    }
  }

  return result;
}

function getUnion(str1Token, str2Token) {
  let result = 0;

  for (let token in str1Token) {
    if (str2Token[token]) {
      result += Math.max(str1Token[token], str2Token[token]);
    } else {
      result += str1Token[token];
    }
  }

  for (let token in str2Token) {
    if (str1Token[token]) {
      continue;
    } else {
      result += str2Token[token];
    }
  }

  return result;
}

function solution(str1, str2) {
  let answer = 0;
  const str1Token = {};
  const str2Token = {};

  for (let i = 0; i <= str1.length - 2; i++) {
    const token = `${str1.slice(i, i + 2).toLowerCase()}`;

    if (/[\W\d_]/g.test(token)) {
      continue;
    }

    if (!str1Token[token]) {
      str1Token[token] = 0;
    }

    str1Token[token]++;
  }

  for (let i = 0; i <= str2.length - 2; i++) {
    const token = `${str2.slice(i, i + 2).toLowerCase()}`;

    if (/[\W\d_]/g.test(token)) {
      continue;
    }

    if (!str2Token[token]) {
      str2Token[token] = 0;
    }

    str2Token[token]++;
  }

  const intersection = getIntersection(str1Token, str2Token);
  const union = getUnion(str1Token, str2Token);
  console.log(str1Token, str2Token);
  console.log(intersection, union);
  if (intersection === 0 && union === 0) {
    answer = 1;
  } else {
    answer = intersection / union;
  }

  return parseInt(answer * 65536);
}

const str1 = 'aa1+aa2';
const str2 = 'AAAA12';

solution(str1, str2);
