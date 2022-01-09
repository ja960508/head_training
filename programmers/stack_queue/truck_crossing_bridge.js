function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let truckQueue = [];
  let lengthQueue = [];
  let currentWeight = 0;

  truckQueue.push(truck_weights[0]);
  currentWeight = truck_weights.shift();
  lengthQueue.push(1);
  answer = 1;

  while (truckQueue.length > 0) {
    answer++;

    for (let i = 0; i < truckQueue.length; i++) {
      lengthQueue[i]++;
    }

    if (lengthQueue[0] > bridge_length) {
      lengthQueue.shift();
      currentWeight -= truckQueue.shift();
    }

    if (truck_weights[0] <= weight - currentWeight && truck_weights) {
      truckQueue.push(truck_weights[0]);
      currentWeight += truck_weights.shift();
      lengthQueue.push(1);
    }
  }

  return answer;
}

const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

console.log(solution(bridge_length, weight, truck_weights));
