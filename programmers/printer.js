'use strict';

function solution(priorities, location) {
    let answer = 0;
    let target = location;

    while (priorities.length > 0) {
        if (priorities.some(data => priorities[0] < data)) {
            priorities.push(priorities[0]);
            priorities.shift();

            if (target == 0) {
                target += priorities.length - 1;
            } else {
                target -= 1;
            }
        } else {
            answer++;
            if (target == 0) break;
            else target -= 1;

            priorities.shift();
        }
    } c 

    return answer;
}

console.log(solution([2,1,3,2], 2));