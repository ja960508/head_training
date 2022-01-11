class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  insert = (value) => {
    this.heap.push(value);
    this.heapUp();
  };

  heapUp = () => {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex][1] > lastInsertedNode[1]) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastInsertedNode;
  };

  peek = () => {
    const count = this.heap.length;
    const root = this.heap[0];

    if (count === 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapDown();
    }

    return root;
  };

  heapDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[0];

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      const smaller =
        rightChildIndex < count &&
        this.heap[rightChildIndex][1] < this.heap[leftChildIndex][1]
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smaller][1] < rootNode[1]) {
        this.heap[index] = this.heap[smaller];
        index = smaller;
      } else break;
    }

    this.heap[index] = rootNode;
  };
}

function solution(jobs) {
  let answer = 0;
  const heap = new Heap();
  let currentTime = 0;
  let i = 0;

  jobs = jobs.sort((a, b) => a[0] - b[0]);

  while (jobs.length > i || heap.heap.length !== 0) {
    if (jobs.length > i && jobs[i][0] <= currentTime) {
      while (jobs.length > i && jobs[i][0] <= currentTime) {
        heap.insert(jobs[i++]);
      }
    } // heap에 추가해야할 작업이 있을 때

    if (heap.heap.length === 0) {
      currentTime = jobs[i][0]; // heap이 비었을 때, 즉시 시작
    } else {
      const [start, end] = heap.peek();
      answer += currentTime - start + end;
      currentTime += end;
    }
  }

  return parseInt(answer / jobs.length);
}

const jobs = [
  [0, 10],
  [4, 10],
  [5, 11],
  [15, 2],
];

console.log(solution(jobs));
