function solution(places) {
  const getPersonMap = (place) => {
    const personMap = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === 'P') {
          personMap.push([i, j]);
        }
      }
    }

    return personMap;
  };

  const checkManhattenDistance = (person0, person1) => {
    const [person0_X, person0_Y] = person0;
    const [person1_X, person1_Y] = person1;

    if (
      Math.abs(person0_Y - person1_Y) + Math.abs(person0_X - person1_X) <=
      2
    ) {
      return false;
    }

    return true;
  };

  const checkSafety = (place, person0, person1) => {
    const [person0_X, person0_Y] = person0;
    const [person1_X, person1_Y] = person1;

    if (person0_X === person1_X) {
      // 같은 행
      if (place[person0_X][Math.min(person0_Y, person1_Y) + 1] === 'X') {
        return true;
      }
    } else if (person0_Y === person1_Y) {
      // 같은 열
      if (place[Math.min(person0_X, person1_X) + 1][person0_Y] === 'X') {
        return true;
      }
    } else {
      // 대각선
      if (
        place[person0_X][person1_Y] === 'X' &&
        place[person1_X][person0_Y] === 'X'
      ) {
        return true;
      }
    }

    return false;
  };

  const checkRoomSafety = (place, personMap) => {
    for (let i = 0; i < personMap.length; i++) {
      for (let j = i + 1; j < personMap.length; j++) {
        if (!checkManhattenDistance(personMap[i], personMap[j])) {
          if (!checkSafety(place, personMap[i], personMap[j])) {
            return false;
          }
        }
      }
    }

    return true;
  };

  const answer = [];

  for (let place of places) {
    const personMap = getPersonMap(place);

    if (checkRoomSafety(place, personMap)) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  }

  return answer;
}

const places = [
  ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
  ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
  ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
  ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
  ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
];

solution(places);
