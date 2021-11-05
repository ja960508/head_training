function solution(bridgeLength, weight, truckWeight) {
    let answer = 0;
    let truckQueue = [];
    let lengthQueue = [];
    let currentWeight = 0;

    truckQueue.push(truckWeight[0]);
    currentWeight = truckWeight.shift();
    lengthQueue.push(1);
    answer = 1;

    while (truckQueue.length > 0) {
        for (let i = 0; i < truckQueue.length; i++) {
            lengthQueue[i]++;
        }

        if (lengthQueue[0] > bridgeLength) {
            lengthQueue.shift();
            currentWeight -= truckQueue.shift();
        }

        if (truckWeight[0] <= weight - currentWeight && truckWeight) {
            truckQueue.push(truckWeight[0]);
            currentWeight += truckWeight.shift();
            lengthQueue.push(1);
        }

        answer++;
    }

    return answer;
}
    console.log(solution(2, 10, [7,4,5,6]));