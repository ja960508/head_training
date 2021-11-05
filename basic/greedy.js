function atm(people) {
  people = people.sort((a, b) => a - b);
  console.log(`people ${people}`);

  let result = 0;
  let delay = 0;

  for (let i = 0; i < people.length; i++) {
    delay += people[i];
    result += delay;
  }

  return result;
}

function getRandomNumber(range, number, numberArr) {
  for (let i = 0; i < number; i++) {
    numberArr.push(Math.floor(Math.random() * range + 1));
  }

  console.log(numberArr);
}

const people = [];
getRandomNumber(10, 5, people);

console.log(atm([3, 1, 4, 3, 2]));
