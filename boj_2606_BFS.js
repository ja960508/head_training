"use strict";

const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7
    6
    2 3
    8 5
    5 2
    5 6
    4 7
    7 3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(graph) {
  const visitedQ = [];
  const willVisitQ = [];
  let current;

  willVisitQ.push("1");

  while (willVisitQ.length) {
    current = willVisitQ.shift();

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

  return visitedQ.length - 1;
}

const numOfComputers = Number(input());
const edge = Number(input().trim());
const graph = {};

for (let i = 0; i < edge; i++) {
  let [node_X, node_Y] = input().trim().split(" ");

  if (!(node_X in graph) && !(node_Y in graph)) {
    graph[node_X] = [];
    graph[node_Y] = [];
  } else if (!(node_X in graph) && node_Y in graph) {
    graph[node_X] = [];
  } else if (node_X in graph && !(node_Y in graph)) {
    graph[node_Y] = [];
  }

  graph[node_X].push(node_Y);
  graph[node_Y].push(node_X);
}

console.log(solution(graph));
