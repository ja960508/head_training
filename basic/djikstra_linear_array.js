// Dijkstra using linear Array

const INF = Infinity;
const arr = [
  [0, 10, 1, 4, INF, INF],
  [10, 0, 2, 5, INF, INF],
  [1, 2, 0, 1, INF, 8],
  [4, 5, 1, 0, INF, 3],
  [INF, INF, INF, INF, 0, 2],
  [INF, INF, 8, 3, 2, 0],
];
let answer = new Array(6).fill(INF);

const isVisit = new Array(6).fill(false);
// 방문 여부를 표현하는 배열

const getMin = function (node) {
  let min = INF;
  let index = 0;

  for (let i = 0; i < node.length; i++) {
    if (min > node[i] && !isVisit[i]) {
      min = node[i];
      index = i;
    }
  }

  return index;
  // 최소 거리를 가지는 노드의 인덱스를 반환한다.
};

const dist = function (start) {
  let startNode = arr[start];
  answer = arr[start]; // 초기값 설정
  let nextNodeIndex;
  let nextNode;
  let defaultWeight = 0;
  isVisit[start] = true;

  while (isVisit.includes(false)) {
    nextNodeIndex = getMin(startNode);
    console.log(`startNode ${startNode}`);
    // 출발점에서 최소 거리에 있는 노드를 기록한다.
    nextNode = arr[nextNodeIndex];
    defaultWeight += startNode[nextNodeIndex];
    console.log(defaultWeight);
    // 출발점에서 해당 노드까지 가는 가중치, 누적시킨다.

    for (let i = 0; i < startNode.length; i++) {
      if (answer[i] > nextNode[i] + defaultWeight && !isVisit[i]) {
        answer[i] = nextNode[i] + defaultWeight;
      }
    }

    startNode = arr[nextNodeIndex];
    isVisit[nextNodeIndex] = true;
  }

  return answer;
};

console.log(dist(0));
