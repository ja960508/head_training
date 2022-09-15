function solution(input) {
  const [currentHour, currentMinute] = input[0].split(' ').map(Number);
  const neededMinute = Number(input[1]);
  const carryHour = parseInt((currentMinute + neededMinute) / 60, 10);

  if (carryHour > 0) {
    console.log(
      (currentHour + carryHour) % 24,
      currentMinute + neededMinute - 60 * carryHour
    );
  } else {
    console.log(currentHour % 24, currentMinute + neededMinute);
  }
}

function initBOJ() {
  const input = [];

  require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', (line) => {
      input.push(line);
    })
    .on('close', () => solution(input));
}

function initTest() {
  const input = `23 48
  120`
    .split('\n')
    .map((data) => data.trim());

  solution(input);
}

process.platform == 'linux' ? initBOJ() : initTest();
