"use strict";

const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 4
    1 1
    2 2
    3 3
    4 4`
).split("\n");

const input = (function () {
  let line = 0;
  return () => stdin[line++];
})();

function DFS(graph, startNode, visited) {
  const visitedQ = [];
  const willVisitQ = [];
  let current;
  willVisitQ.push(startNode);

  while (willVisitQ.length) {
    current = willVisitQ.pop();

    if (visitedQ.includes(current)) {
      continue;
    }

    visitedQ.push(current);

    if (current in graph) {
      for (let node of graph[current]) {
        willVisitQ.push(node);
      }
    }
  }

  for (let node of visitedQ) {
    visited.push(node);
  }
}

function solution(graph) {
  let answer = 0;
  const visited = [];

  for (let key in graph) {
    if (!visited.includes(key)) {
      DFS(graph, key, visited);
      answer++;
    }
  }

  console.log(answer);
}

const graph = {};
const [numOfNodes, numOfEdges] = input()
  .split(" ")
  .map((data) => Number(data));

for (let i = 0; i < numOfNodes; i++) {
  graph[`${i + 1}`] = [`${i + 1}`];
}

for (let i = 0; i < numOfEdges; i++) {
  let [node_X, node_Y] = input().trim().split(" ");

  //   if (!(node_X in graph) && !(node_Y in graph)) {
  //     graph[node_X] = [];
  //     graph[node_Y] = [];
  //   } else if (!(node_X in graph) && node_Y in graph) {
  //     graph[node_X] = [];
  //   } else if (node_X in graph && !(node_Y in graph)) {
  //     graph[node_Y] = [];
  //   }

  graph[node_X].push(node_Y);
  graph[node_Y].push(node_X);
}

solution(graph);
