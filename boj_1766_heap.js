const input = [];

class Heap {
  constructor() {
    this.heap = [];
  }

  getParentIndex = (index) => Math.floor((index - 1) / 2);
  getLeftChildIndex = (index) => index * 2 + 1;
  getRightChildIndex = (index) => index * 2 + 2;

  insert(data) {
    if (this.heap.length === 0) this.heap.push(data);
    else {
      this.heap.push(data);
      this.bubbleUp();
    }
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      if (lastInsertedNode < this.heap[this.getParentIndex(index)]) {
        this.heap[index] = this.heap[this.getParentIndex(index)];
        index = this.getParentIndex(index);
      } else break;
    }

    this.heap[index] = lastInsertedNode;
  }

  remove() {
    const root = this.heap[0];

    if (this.heap.length === 0) return undefined;
    else if (this.heap.length === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
    }

    return root;
  }

  bubbleDown() {
    const count = this.heap.length;
    const root = this.heap[0];
    let index = 0;

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

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

const strToNumArr = (str) => str.split(' ').map(Number);

// function solution() {
//   const [numOfNodes, numOfInfos] = input()
//     .split(' ')
//     .map((data) => Number(data));
//   const array = [];
//   const inDegree = [];
//   const heap = new Heap();
//   const result = [];

//   for (let i = 0; i < numOfNodes; i++) {
//     array.push([]);
//     inDegree.push(0);
//   }

//   for (let i = 0; i < numOfInfos; i++) {
//     const [a, b] = input()
//       .trim()
//       .split(' ')
//       .map((data) => Number(data - 1));
//     array[a].push(b);
//     inDegree[b] += 1;
//   }

//   for (let i = 0; i < numOfNodes; i++) {
//     if (inDegree[i] === 0) {
//       heap.insert(i);
//     }
//   }

//   while (heap.heap.length) {
//     const data = heap.remove();
//     result.push(data);

//     for (let node of array[data]) {
//       inDegree[node] -= 1;

//       if (inDegree[node] === 0) {
//         heap.insert(node);
//       }
//     }
//   }

//   console.log(result.map((data) => data + 1).join(' '));
// }

// solution();

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    const [N, M] = strToNumArr(input.shift());
    const graph = [];
    const inDegrees = Array(N + 1).fill(0);
    for (let i = 0; i <= N; i++) {
      graph.push([]);
    }

    input.forEach((str) => {
      const [prev, next] = strToNumArr(str);
      graph[prev].push(next);
      inDegrees[next] += 1;
    });

    const pq = new Heap();
    for (let n = 1; n <= N; n++) {
      if (inDegrees[n] === 0) {
        pq.insert(n);
      }
    }

    const result = [];
    while (pq.heap.length) {
      const n = pq.remove();
      result.push(n);
      graph[n].forEach((v) => {
        inDegrees[v] -= 1;
        if (!inDegrees[v]) {
          pq.insert(v);
        }
      });
    }

    console.log(result.join(' '));
  });
