function solution(id_list, report, k) {
  const answer = Array(id_list.length).fill(0);
  const info = {};
  for (let id of id_list) {
    info[id] = {
      reported: 0,
      reporters: [],
    };
  }

  for (let data of report) {
    const [reporter, reportedPerson] = data.split(' ');

    if (!info[reportedPerson].reporters.includes(reporter)) {
      info[reportedPerson].reported++;
      info[reportedPerson].reporters.push(reporter);
    }
  }

  for (let data in info) {
    if (info[data].reported >= k) {
      for (let reporter of info[data].reporters) {
        answer[id_list.indexOf(reporter)]++;
      }
    }
  }

  console.log(answer);

  return answer;
}

const id_list = ['con', 'ryan'];
const report = ['ryan con', 'ryan con', 'ryan con', 'ryan con'];
const k = 3;

solution(id_list, report, k);
