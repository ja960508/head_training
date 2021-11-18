'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10
    dc
    zxo
    abd
    pa
    ccc
    dc
    sad
    zxcvdq
    qteq
    abd`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(numOfBooks) {
  const salesTable = {};
  let bookName;
  let [max, name] = [-1, []];

  for (let i = 0; i < numOfBooks; i++) {
    bookName = input().trim();

    if (bookName in salesTable) {
      salesTable[bookName] += 1;
    } else {
      salesTable[bookName] = 1;
    }
  }

  const items = Object.keys(salesTable).map((key) => [key, salesTable[key]]);
  items.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
  });
  console.log(items[0][0]);

  //   for (let key in salesTable) {
  //     if (salesTable[key] >= max) {
  //       max = salesTable[key];
  //       name.push(key);
  //     }
  //   }

  //   name.sort((a, b) => {
  //     if (a > b) return 1;
  //     if (a < b) return -1;
  //   })[0];

  //   console.log(name[0]);
}

const numOfBooks = Number(input());

solution(numOfBooks);
