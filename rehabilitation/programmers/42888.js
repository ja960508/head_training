function solution(record) {
  const ENTER = 'Enter';
  const LEAVE = 'Leave';
  const CHANGE = 'Change';
  const answer = [];
  const changeLog = {};

  for (const r of record) {
    const [method, uid, nickname] = r.split(' ');

    if (method !== LEAVE) {
      changeLog[uid] = nickname;
    }
  }

  for (const r of record) {
    let [method, uid, nickname] = r.split(' ');

    if (changeLog[uid]) {
      nickname = changeLog[uid];
    }

    switch (method) {
      case ENTER:
        answer.push(`${nickname}님이 들어왔습니다.`);
        break;
      case LEAVE:
        answer.push(`${nickname}님이 나갔습니다.`);
        break;
      default:
        break;
    }
  }

  console.log(answer);

  return answer;
}

const record = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];

solution(record);
