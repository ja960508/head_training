function solution(s) {
  const mapper = {};
  const words = [
    '0	zero',
    '1	one',
    '2	two',
    '3	three',
    '4	four',
    '5	five',
    '6	six',
    '7	seven',
    '8	eight',
    '9	nine',
  ];
  words.map((data) => {
    const [value, key] = data.split('\t');
    mapper[key] = value;
  });
  let str = s;

  for (const key in mapper) {
    const regExp = new RegExp(`${key}`, 'g');
    str = str.replace(regExp, mapper[key]);
  }

  return Number(str);
}

const s = 'one4seveneight';
solution(s);
