function solution(numbers) {
  // let result = numbers
  //   .sort((a, b) => {
  //     let strA = String(a);
  //     let strB = String(b);

  //     if (strA.length !== strB.length) {
  //       while (strA.length !== strB.length) {
  //         if (strA.length > strB.length) {
  //           strB += String(b);
  //         } else {
  //           strA += String(a);
  //         }
  //       }

  //       return strB - strA;
  //     } else {
  //       return strB - strA;
  //     }
  //   })
  //   .join('');

  let result = numbers
    .sort((a, b) => {
      const strA = String(a);
      const strB = String(b);

      return strB + strA - (strA + strB);
    })
    .join('');

  if (result[0] == 0) {
    return String(0);
  } else {
    return result;
  }
}

const numbers = [3, 34];

console.log(solution(numbers));
