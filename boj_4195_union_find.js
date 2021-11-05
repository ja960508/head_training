"use strict";

const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
3
Fred Barney
Barney Betty
Betty Wilma
3
Fred Barney
Betty Wilma
Fred Wilma`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let parent;
let network;

function find(node) {
  let p;
  if (parent[node] === node) {
    return parent[node];
  }

  p = find(parent[node]);
  parent[node] = p;

  return parent[node];
}

function union(node_X, node_Y) {
  let parent_X = find(node_X);
  let parent_Y = find(node_Y);

  if (parent_X !== parent_Y) {
    parent[parent_Y] = parent_X;
    network[parent_X] += network[parent_Y];
  }
}

function solution(numOfNetwork) {
  parent = {};
  network = {};

  while (numOfNetwork) {
    const [node_X, node_Y] = input().split(" ");

    if (!(node_X in parent)) {
      parent[node_X] = node_X;
      network[node_X] = 1;
    }
    if (!(node_Y in parent)) {
      parent[node_Y] = node_Y;
      network[node_Y] = 1;
    }

    union(node_X, node_Y);
    console.log(network[find(node_X)]);
    numOfNetwork--;
  }
}

const numOfTestcases = input();

for (let i = 0; i < numOfTestcases; i++) {
  let numOfNetwork = input();
  solution(numOfNetwork);
}
