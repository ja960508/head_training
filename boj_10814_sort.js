"use strict";

const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
    21 Junkyu
    21 Dohyun
    20 Sunyoung`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(numOfCases) {
  const register = [];
  let name, age;
  let result = "";

  for (let i = 0; i < numOfCases; i++) {
    [age, name] = input().trim().split(" ");
    register.push({
      name: name,
      age: age,
    });
  }

  register.sort((a, b) => a.age - b.age);
  register.map((data) => (result += `${data.age} ${data.name}\n`));

  console.log(result);
}

const numOfCases = input();

solution(numOfCases);
