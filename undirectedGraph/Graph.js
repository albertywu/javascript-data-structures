// graph constructor takes an integer param, indicating the number of nodes
// edges can be constructed using methods
// adjacency list representation

class Graph {
  constructor(N) {
    this.vertices = [...Array(N).keys()].map(_ => []) // adjacency list representation
  }

  // add an edge from vertex v -> w
  addEdge(v, w) {
    this.vertices[v].push(w)
  }

  // returns an iterable of vertices adjacent to v
  adj(v) {
    return this.vertices[v]
  }

  // # vertices
  V() {
    return this.vertices.length
  }

  // # edges
  E() {
    return this.vertices.reduce(
      (prev, curr) => prev + curr.length,
      0
    )
  }

  // pretty print
  toString() {
    this.vertices.forEach((v, idx) => {
      console.log(`${idx} -> ${v}`)
    })
  }
}

let g = new Graph(10)
g.addEdge(0, 1)
g.addEdge(0, 5)
g.addEdge(1, 2)
console.log(g.V()) // 10
console.log(g.E()) // 2
console.log(g.toString())