function solution(s) {
  const answer = [];
  const _s = s
    .replace(/{+|}{2,}/g, '')
    .split('},')
    .map((d) => d.split(','))
    .sort((a, b) => a.length - b.length);

  for (let item of _s) {
    for (let elem of item) {
      if (!answer.includes(Number(elem))) answer.push(Number(elem));
    }
  }

  console.log(answer);

  return answer;
}

const s = '{{4,2,3},{3},{2,3,4,1},{2,3}}';

solution(s);
