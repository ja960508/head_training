'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7
A B C
B D .
C E F
E . .
F . G
D . .
G . .`
).split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

class Node {
  constructor(node) {
    this.node = node;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.tree = {};
  }

  add(start, left, right) {
    this.tree[start] = [
      left === '.' ? null : left,
      right === '.' ? null : right,
    ];
  }

  preOrder(start) {
    let result = '';
    let current = start;

    if (current) {
      result += current;
      result += this.preOrder(this.tree[current][0]);
      result += this.preOrder(this.tree[current][1]);
    }

    return result;
  }
  inOrder(start) {
    let result = '';
    let current = start;

    if (current) {
      result += this.inOrder(this.tree[current][0]);
      result += current;
      result += this.inOrder(this.tree[current][1]);
    }

    return result;
  }
  postOrder(start) {
    let result = '';
    let current = start;

    if (current) {
      result += this.postOrder(this.tree[current][0]);
      result += this.postOrder(this.tree[current][1]);
      result += current;
    }

    return result;
  }
}

function solution(tree) {
  console.log(tree.preOrder('A'));
  console.log(tree.inOrder('A'));
  console.log(tree.postOrder('A'));
}

function init() {
  const numOfNodes = Number(input());
  const tree = new Tree();

  for (let i = 0; i < numOfNodes; i++) {
    tree.add(...input().split(' '));
  }

  solution(tree);
}

init();
