function solution(phone_number) {
  let answer = '';

  for (let i = 0; i < phone_number.length - 4; i++) {
    answer += '*';
  }
  answer += phone_number.substring(
    phone_number.length - 4,
    phone_number.length
  );

  return answer;
}

const phone_number = '01033334444';
solution(phone_number);
