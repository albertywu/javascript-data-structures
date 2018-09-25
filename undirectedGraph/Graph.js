// graph constructor takes an integer param, indicating the number of nodes
// edges can be constructed using methods
// adjacency list representation

class Graph {
  constructor(N) {
    this.vertices = [...Array(N).keys()].map(_ => []) // adjacency list representation
  }

  // add an edge from vertex v -> w
  addEdge(v, w) { }

  // returns an iterable of vertices adjacent to v
  adj(v) { }

  // # vertices
  V()

  // # edges
  E()

  // pretty print
  toString()
}