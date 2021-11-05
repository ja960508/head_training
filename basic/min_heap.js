class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  peek = () => this.heap[0];

  showHeap = () => console.log(this.heap);

  insert = (key, value) => {
    const node = { key: key, value: value };
    this.heap.push(node);
    this.heapUp();
  };

  heapUp = () => {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex].value > lastInsertedNode.value) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastInsertedNode;
  };
  // 우선순위 큐를 구현하기 위해 HeapUp 로직 생성

  remove = () => {
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
      // left child가 있을 때 까지(layer)
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      const smaller =
        rightChildIndex < count && // right child가 있다면
        this.heap[rightChildIndex].value < this.heap[leftChildIndex].value
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smaller].value < rootNode.value) {
        this.heap[index] = this.heap[smaller];
        index = smaller;
      } else break;
    }

    this.heap[index] = rootNode;
  };
}

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enQueue = (key, value) => this.insert(key, value);
  deQueue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}

const heap = new PriorityQueue();
heap.insert("A", 0);
heap.insert("B", 5);
heap.insert("C", 7);
heap.insert("D", 1);
heap.insert("E", 3);

heap.showHeap();
heap.remove();
heap.showHeap();
