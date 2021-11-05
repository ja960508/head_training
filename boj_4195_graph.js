'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
  3
  Fred Barney
  Barney Betty
  Betty Wilma
  3
  Fred Barney
  Betty Wilma
  Barney Betty`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function findParent(node, parent) {
  let p;

  if (node == parent[node]) {
    return node;
  }

  p = findParent(parent[node], parent);
  parent[node] = p;

  return parent[node];
}

function union(node_X, node_Y, parent, network) {
  let x = findParent(node_X, parent);
  let y = findParent(node_Y, parent);

  if (x != y) {
    parent[y] = x;
    network[x] += network[y];
  }
}

function solution(numOfTestCases) {
  let inputNum;

  let parent, network;
  let left, right;

  while (numOfTestCases) {
    inputNum = Number(input());
    parent = {};
    network = {};
    for (let i = 0; i < inputNum; i++) {
      [left, right] = input().trim().split(' ');

      if (!(left in parent)) {
        parent[left] = left;
        network[left] = 1;
      }
      if (!(right in parent)) {
        parent[right] = right;
        network[right] = 1;
      }

      union(left, right, parent, network);
      console.log(network[findParent(left, parent)]);
    }

    numOfTestCases--;
  }
}

solution(Number(input()));
