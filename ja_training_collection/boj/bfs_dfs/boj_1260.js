'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 5 3
    5 4
    5 2
    1 2
    3 4
    3 1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function BFS(graph, startNode) {
  const visitedQ = [];
  const willVisitQ = [];
  willVisitQ.push(Number(startNode));

  while (willVisitQ.length) {
    const current = willVisitQ.shift();
    if (visitedQ.includes(current)) continue;

    visitedQ.push(current);

    if (graph[current]) {
      graph[current].map((data) => willVisitQ.push(data));
    }
  }

  console.log(visitedQ.join(' '));
}

const visitedQ = [];

function DFS(graph, startNode) {
  // const visitedQ = [];
  // const willVisitQ = [];
  // let temp = [];
  // // using for left first search
  // willVisitQ.push(Number(startNode));

  // while (willVisitQ.length) {
  //   temp = [];
  //   const current = willVisitQ.pop();

  //   if (visitedQ.includes(current)) continue;

  //   visitedQ.push(current);

  //   if (graph[current]) {
  //     graph[current].map((data) => temp.push(data));
  //   }
  //   temp.reverse().map((data) => willVisitQ.push(data));
  // }

  // console.log(visitedQ.join(' '));
  visitedQ.push(startNode);
  console.log(startNode);

  for (let node of graph[startNode]) {
    if (!visitedQ.includes(node)) DFS(graph, node);
  }
}

function solution(numOfNodes, numOfEdges, startNode) {
  // 양방향으로 만들어야 함
  const graph = {};

  for (let i = 0; i < numOfEdges; i++) {
    const [nodeX, nodeY] = input().trim().split(' ');

    if (!graph[nodeX]) {
      graph[nodeX] = [];
    }
    if (!graph[nodeY]) {
      graph[nodeY] = [];
    }

    graph[nodeX].push(Number(nodeY));
    graph[nodeY].push(Number(nodeX));
  }

  for (let key in graph) {
    graph[key].sort((a, b) => a - b);
  }

  DFS(graph, startNode);
  BFS(graph, startNode);
}

const [numOfNodes, numOfEdges, startNode] = input().split(' ');

solution(numOfNodes, numOfEdges, Number(startNode));
