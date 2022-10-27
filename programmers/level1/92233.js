function solution(id_list, report, k) {
  const answer = [];
  const reportLog = {};
  const mailLog = {};

  for (let id of id_list) {
    reportLog[id] = new Set();
    mailLog[id] = 0;
  }

  for (let log of report) {
    const [reporter, defendant] = log.split(' ');
    reportLog[defendant].add(reporter);
  }

  for (let log in reportLog) {
    if (reportLog[log].size >= k) {
      for (let reporter of reportLog[log]) {
        mailLog[reporter]++;
      }
    }
  }

  for (let log in mailLog) {
    answer.push(mailLog[log]);
  }

  return answer;
}

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];
const k = 2;

solution(id_list, report, k);
