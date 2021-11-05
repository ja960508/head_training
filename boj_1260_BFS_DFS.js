"use strict";

const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 1 1
    2 3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function BFS(graph, startNode) {
  const visitedQ = [];
  const willVisitQ = [];
  let tempArr;

  willVisitQ.push(startNode);

  while (willVisitQ.length) {
    tempArr = [];
    let currentNode = willVisitQ.shift();

    if (visitedQ.includes(currentNode)) {
      continue;
    }

    visitedQ.push(currentNode);

    if (currentNode in graph) {
      for (let node of graph[currentNode]) {
        tempArr.push(node);
      }
    }

    tempArr
      .sort((a, b) => Number(a) - Number(b))
      .map((data) => willVisitQ.push(data));
  }

  console.log(visitedQ.join(" "));
}

function DFS(graph, startNode) {
  const visitedQ = [];
  const willVisitQ = [];
  let tempArr;
  willVisitQ.push(startNode);

  while (willVisitQ.length) {
    tempArr = [];
    let currentNode = willVisitQ.pop();

    if (visitedQ.includes(currentNode)) {
      continue;
    }

    visitedQ.push(currentNode);

    if (currentNode in graph) {
      for (let node of graph[currentNode]) {
        tempArr.push(node);
      }
    }

    tempArr
      .sort((a, b) => Number(a) - Number(b))
      .reverse()
      .map((data) => willVisitQ.push(data));
  }

  console.log(visitedQ.join(" "));
}

function solution(numOfNodes, numOfEdges, startNode) {
  for (let i = 0; i < numOfEdges; i++) {
    let [node_X, node_Y] = input().trim().split(" ");
    if (!(node_X in graph) && !(node_Y in graph)) {
      graph[node_X] = [];
      graph[node_Y] = [];
    } else if (node_X in graph && !(node_Y in graph)) {
      graph[node_Y] = [];
    } else if (!(node_X in graph) && node_Y in graph) {
      graph[node_X] = [];
    }

    graph[node_X].push(node_Y);
    graph[node_Y].push(node_X);
  }

  DFS(graph, startNode);
  BFS(graph, startNode);
}

const [numOfNodes, numOfEdges, startNode] = input().split(" ");
const graph = {};

solution(numOfNodes, numOfEdges, startNode);
