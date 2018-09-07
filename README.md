# Data Structures & Applications (in Javascript)

This is my attempt at bridging the gap between data structures and applications in javascript. There are many repos out there that implement data structures, but I haven't seen many that explain how these data structures are useful in real-life problems.

Here you'll find:
* clean ES6 implementations of classic data structures
* some classic applications of these data structures

### LinkedList
- [ ] API: `add, isEmpty, head, removeHead`
- [ ] Applications:
  - [ ] stacks
  - [ ] queues
  - [ ] hash tables w/chaining

### Stack
- [x] API: `push, pop, peek, isEmpty, toString`
- [ ] Applications:
  - [ ] Dijkstra's two-stack algorithm
  - [ ] parsing in a compiler
  - [ ] depth-first search of a graph
  - [ ] undo in a word processor
  - [ ] back button in a web browser
  - [ ] implementing function calls in a compiler
  - [ ] calculators

---

### Queue
- [x] API: `enqueue, dequeue, peek, isEmpty, toString`
- [ ] Applications:
  - [ ] breadth-first search of a graph
  - [ ] customers in a line

---

### Priority Queues / Binary Heap
- [ ] MaxPQ API: `insert, delMax, isEmpty, max, size, toString`
- [ ] MinPQ API: `insert, delMin, isEmpty, min, size, toString`
- [ ] Applications:
  - [ ] event-driven simulation [customers in a line, colliding particles]
  - [ ] numerical computation [reducing roundoff error]
  - [ ] data compression [huffman codes]
  - [ ] graph search [Dijkstra's algorithm, Prim's algorithm]
  - [ ] number theory [sum of powers]
  - [ ] AI [A* search]
  - [ ] statistics [maintain largest M values in a sequence]
  - [ ] operating systems [load balancing, interrupt handling]
  - [ ] discrete optimization [bin packing, scheduling]
  - [ ] spam filtering [Bayesianb spam filter]
  
---

### BinarySearchTree
- [ ] API: `put, get, delete, keys, toString`
- [ ] Traversal: `inorder, preorder, postorder` traversal
- [ ] Applications:
  - [ ] poor man's symbol table implementation
  - [ ] geometric problems:
    - [ ] 1d range search
    - [ ] line segment intersection
    - [ ] kd-trees
    - [ ] interval search trees
    - [ ] rectangle intersection

---

### HashTable (w/Separate Chaining)
- [ ] API: `put, get, delete, contains, isEmpty, size, keys, toString`
- [ ] Applications:
  - [ ] dictionaries
  - [ ] web search

---

### Undirected Graphs
- [ ] API: `addEdge, adj, vertices, edges, toString`
- [ ] Applications:
  - [ ] circuits (vertices are components, edges are wires)
  - [ ] mechanical (vertices are joints, edges are beams)
  - [ ] transportation (vertices are street intersections, edges are roads)
  - [ ] finance (vertices are stocks, edges are transactions)
  - [ ] game (vertices are board position, edges are legal moves)
  - [ ] social network (vertices are people, edges are friendships)
  - [ ] neural network (vertices are neurons, edges are synapses)
  - [ ] molecule (vertices are atoms, edges are bonds)

