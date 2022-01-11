'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `19
    1 2 3
    2 4 5
    3 6 7
    4 8 -1
    5 9 10
    6 11 12
    7 13 -1
    8 -1 -1
    9 14 15
    10 -1 -1
    11 16 -1
    12 -1 -1
    13 17 -1
    14 -1 -1
    15 18 -1
    16 -1 -1
    17 -1 19
    18 -1 -1
    19 -1 -1`
).split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

class Tree {
  constructor(numOfNodes) {
    this.tree = {};
    this.levelMin = new Array(numOfNodes).fill(numOfNodes);
    this.levelMax = new Array(numOfNodes).fill(0);
    this.counter = 0;
    this.levelDepth = 0;
  }

  add(node, left, right) {
    if (!(node in this.tree)) {
      this.tree[node] = {};
    }
    if (!(left in this.tree) && left !== '-1') {
      this.tree[left] = {};
    }
    if (!(right in this.tree) && right !== '-1') {
      this.tree[right] = {};
    }

    this.tree[node].left = left;
    this.tree[node].right = right;

    if (left !== '-1') {
      this.tree[left].parent = node;
    }

    if (right !== '-1') {
      this.tree[right].parent = node;
    }
  }

  inOrder(node, level) {
    this.levelDepth = Math.max(this.levelDepth, level);
    if (this.tree[node].left !== '-1') {
      this.inOrder(this.tree[node].left, level + 1);
    }
    this.levelMin[level] = Math.min(this.levelMin[level], this.counter);
    this.levelMax[level] = Math.max(this.levelMax[level], this.counter);
    this.counter += 1;
    if (this.tree[node].right !== '-1') {
      this.inOrder(this.tree[node].right, level + 1);
    }
  }

  findRoot() {
    let root = null;

    for (let node in this.tree) {
      if (!this.tree[node].parent) {
        root = node;
      }
    }

    return root;
  }
}

function solution(tree) {
  let resultLevel = -1;
  let resultWidth = -1;

  for (let i = 0; i <= tree.levelDepth; i++) {
    let width = tree.levelMax[i] - tree.levelMin[i];
    if (resultWidth < width) {
      resultLevel = i;
      resultWidth = width;
    }
  }

  console.log(resultLevel + 1, resultWidth + 1);
}

function init() {
  const numOfNodes = Number(input());
  const tree = new Tree(numOfNodes);
  let root = null;
  for (let i = 0; i < numOfNodes; i++) {
    const [node, left, right] = input().trim().split(' ');

    tree.add(node, left, right);
  }

  root = tree.findRoot();
  tree.inOrder(root, 0);

  solution(tree);
}

init();
