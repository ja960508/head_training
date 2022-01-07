function solution(genres, plays) {
  let obj = {};
  let arr = [];
  let result = [];

  for (let i = 0; i < genres.length; i++) {
    if (genres[i] in obj) {
      obj[genres[i]][i] = plays[i];
      obj[genres[i]]['max'] += plays[i];
    } else {
      obj[genres[i]] = {};
      obj[genres[i]][i] = plays[i];
      obj[genres[i]]['max'] = plays[i];
    }
  }

  for (let key in obj) {
    arr.push({ [key]: obj[key] });
  }

  arr = arr.sort((a, b) => {
    return b[Object.keys(b)[0]]['max'] - a[Object.keys(a)[0]]['max'];
  });

  for (let item of arr) {
    const genre = Object.keys(item)[0];
    let temp = [];

    delete item[genre]['max'];

    for (let key in item[genre]) {
      temp.push({ [key]: item[genre][key] });
    }

    temp = temp.sort((a, b) => {
      return b[Object.keys(b)[0]] - a[Object.keys(a)[0]];
    });

    if (temp.length < 2) {
      result.push(Number(Object.keys(temp[0]).join('')));
    } else {
      result.push(Number(Object.keys(temp[0]).join('')));
      result.push(Number(Object.keys(temp[1]).join('')));
    }
  }

  console.log(result);
  return result;
}

const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];

solution(genres, plays);
