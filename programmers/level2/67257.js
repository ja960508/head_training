function solution(expression) {
  let answer = 0;
  const operands = expression.match(/\d+/g);
  const operators = expression.match(/\D+/g);
  const kindsOfOperators = Array.from(new Set(operators));
  const priorities = [];

  function getPermutation(fixed, select, visited) {
    if (select === 0) {
      priorities.push(fixed);
      return;
    }

    for (let i = 0; i < kindsOfOperators.length; i++) {
      if (visited.includes(i)) continue;
      getPermutation([...fixed, kindsOfOperators[i]], select - 1, [
        ...visited,
        i,
      ]);
    }

    return;
  }

  getPermutation([], kindsOfOperators.length, []);

  for (const priority of priorities) {
    const _operands = [...operands];
    const _operators = [...operators];

    for (const p of priority) {
      while (_operators.indexOf(p) !== -1) {
        // console.log(
        //   `${_operands[_operators.indexOf(p)]}${
        //     _operators[_operators.indexOf(p)]
        //   }${_operands[_operators.indexOf(p) + 1]}`,
        //   eval(
        //     `${_operands[_operators.indexOf(p)]}${
        //       _operators[_operators.indexOf(p)]
        //     }${_operands[_operators.indexOf(p) + 1]}`
        //   )
        // );

        _operands[_operators.indexOf(p)] = eval(
          `${_operands[_operators.indexOf(p)]}${
            _operators[_operators.indexOf(p)]
          }${_operands[_operators.indexOf(p) + 1]}`
        );

        _operands.splice(_operators.indexOf(p) + 1, 1);
        _operators.splice(_operators.indexOf(p), 1);
      }
    }

    if (answer < Math.abs(_operands[0])) answer = Math.abs(_operands[0]);
  }

  return answer;
}

const expression = '100-200*300-500+20';

solution(expression);
