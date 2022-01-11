'use strict';

const fs = require('fs');
const stdin = (
  process.platform == 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
10
20
40`
).split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

class Heap {
  constructor() {
    this.heap = [];
  }

  getParentIndex = (index) => Math.floor((index - 1) / 2);
  getLeftChildIndex = (index) => index * 2 + 1;
  getRightChildIndex = (index) => index * 2 + 2;

  insert(value) {
    if (this.heap.length === 0) {
      this.heap.push(value);
    } else {
      this.heap.push(value);
      this.bubbleUp();
    }
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];
    let parentIndex = this.getParentIndex(index);

    while (lastInsertedNode < this.heap[parentIndex]) {
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }

    this.heap[index] = lastInsertedNode;
  }

  remove() {
    const root = this.heap[0];

    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return root;
  }

  bubbleDown() {
    let index = 0;
    const count = this.heap.length;
    const root = this.heap[0];
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);

    while (leftChildIndex < count) {
      leftChildIndex = this.getLeftChildIndex(index);
      rightChildIndex = this.getRightChildIndex(index);

      const smaller =
        rightChildIndex < count &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smaller] < root) {
        this.heap[index] = this.heap[smaller];
        index = smaller;
      } else break;
    }

    this.heap[index] = root;
  }
}

function solution() {
  const numOfCards = Number(input());
  const heap = new Heap();
  let acc;

  for (let i = 0; i < numOfCards; i++) {
    heap.insert(Number(input()));
  }

  if (numOfCards === 1) return heap.remove();

  acc = heap.remove() + heap.remove();
  while (heap.heap.length) {
    acc += acc + heap.remove();
  }

  return acc;
}

console.log(solution());
