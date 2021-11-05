// 사이클이 생기면 안 된다.
class Node {
  constructor(weight, startNode, endNode) {
    this.weight = weight;
    this.startNode = startNode;
    this.endNode = endNode;
  }
}

class Kruskal {
  constructor(vertices) {
    this.edges = [];
    this.vertices = vertices;
    this.parent = {};
    this.rank = {};
  }

  insert(node) {
    this.edges.push(node);
  }

  init() {
    // O(V)
    for (let node of this.vertices) {
      this.parent[node] = node;
      this.rank[node] = 0;
    }

    console.log(this.parent);
    console.log(this.rank);
  }

  find(node) {
    // path compression
    if (this.parent[node] !== node) {
      this.parent[node] = this.find(this.parent[node]);
    }

    return this.parent[node];
  }

  union(node_u, node_v) {
    let root0 = this.find(node_u);
    let root1 = this.find(node_v);

    if (this.rank[root0] > this.rank[root1]) {
      this.parent[root1] = root0;
    } else {
      this.parent[root0] = root1;
      if (this.rank[root0] === this.rank[root1]) {
        this.rank[root1] += 1;
      }
    }
  }

  mst() {
    let result = [];
    this.edges.sort((a, b) => a.weight - b.weight);

    for (let edge of this.edges) {
      let { weight, startNode, endNode } = { ...edge };

      if (this.find(startNode) !== this.find(endNode)) {
        this.union(startNode, endNode);
        result.push(edge);
      }
    }

    console.log(result);
    return result;
  }
}

class Prim {
  constructor(nodes) {
    this.vertices = nodes;
    this.edges = [];
  }
}

const kruskal = new Kruskal(["A", "B", "C", "D", "E", "F", "G"]);
kruskal.insert(new Node(7, "A", "B"));
kruskal.insert(new Node(5, "A", "D"));
kruskal.insert(new Node(8, "B", "C"));
kruskal.insert(new Node(9, "B", "D"));
kruskal.insert(new Node(7, "B", "E"));
kruskal.insert(new Node(5, "C", "E"));
kruskal.insert(new Node(7, "D", "E"));
kruskal.insert(new Node(6, "D", "F"));
kruskal.insert(new Node(8, "E", "F"));
kruskal.insert(new Node(9, "E", "G"));
kruskal.insert(new Node(11, "F", "G"));

kruskal.init();
kruskal.mst();
