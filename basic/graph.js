class Graph {
  constructor() {
    this.graph = {};
  }

  add(parent, child) {
    this.graph[parent] = child;
  }

  BFS(start) {
    let visitedQ = [];
    let needToVisitQ = [];
    let currentNode;
    let count = 0;

    needToVisitQ.push(start);

    while (needToVisitQ.length) {
      currentNode = needToVisitQ.shift();
      count++;
      //   if (visitedQ.includes(currentNode)) {
      //     continue;
      //   } else {
      //     visitedQ.push(currentNode);
      //   }

      //   for (let item of this.graph[currentNode]) {
      //     needToVisitQ.push(item);
      //   }
      if (!visitedQ.includes(currentNode)) {
        visitedQ = [...visitedQ, currentNode];
        needToVisitQ = [...needToVisitQ, ...this.graph[currentNode]];
      }

      console.log(visitedQ, count);
    }
  }

  DFS(start) {
    let visitedQ = [];
    let needToVisitQ = [];
    let currentNode;
    needToVisitQ.push(start);

    while (needToVisitQ.length) {
      currentNode = needToVisitQ.pop();
      if (!visitedQ.includes(currentNode)) {
        visitedQ = [...visitedQ, currentNode];
        needToVisitQ = [...needToVisitQ, ...this.graph[currentNode]];
      }
    }

    console.log(visitedQ);
  }
}

const graph = new Graph();
graph.add("A", ["B", "C"]);
graph.add("B", ["A", "D"]);
graph.add("C", ["A", "G", "H", "I"]);
graph.add("D", ["B", "E", "F"]);
graph.add("E", ["D"]);
graph.add("F", ["D"]);
graph.add("G", ["C"]);
graph.add("H", ["C"]);
graph.add("I", ["C", "J"]);
graph.add("J", ["I"]);

console.log(graph);
graph.DFS("A");
