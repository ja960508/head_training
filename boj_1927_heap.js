'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `31
    4
    15
    11
    20
    13
    19
    23
    3
    24
    99
    193
    1
    3
    483
    213
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0`
).split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

class Heap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return index * 2 + 1;
  }
  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  insert(number) {
    if (this.heap.length > 0) {
      this.heap.push(number);
      this.heapUp();
    } else {
      this.heap.push(number);
    }
  }

  peek() {
    if (this.heap.length === 0) {
      return 0;
    } else if (this.heap.length === 1) {
      return this.heap.pop();
    } else {
      let result = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapDown();

      return result;
    }
  }

  heapDown() {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[0];

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      const smaller =
        rightChildIndex < count &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (rootNode > this.heap[smaller]) {
        this.heap[index] = this.heap[smaller];
        index = smaller;
      } else break;
    }

    this.heap[index] = rootNode;
  }

  heapUp() {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];
    let parentIndex = this.getParentIndex(index);

    while (lastInsertedNode < this.heap[parentIndex]) {
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }

    this.heap[index] = lastInsertedNode;
  }
}

function solution() {
  const numOfOperation = Number(input());
  const heap = new Heap();
  let result = [];

  for (let i = 0; i < numOfOperation; i++) {
    const currentOperation = Number(input().trim());

    if (currentOperation === 0) {
      result.push(heap.peek());
    } else {
      heap.insert(currentOperation);
    }
  }

  console.log(result.join('\n'));
}

solution();
