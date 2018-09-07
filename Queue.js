class Queue {
  constructor() {
    this.data = []
  }

  enqueue(item) {
    this.data.unshift(item) // add to front
  }

  dequeue() {
    return this.data.pop()  // remove from back
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  isEmpty() {
    return this.data.length === 0
  }
}

import { test } from 'ava'

test('Queue', t => {
  let q = new Queue()
  q.enqueue(1)
  q.enqueue(2)
  q.enqueue(3)
  t.is(q.dequeue(), 1)
  t.is(q.dequeue(), 2)
  t.is(q.peek(), 3)
  t.is(q.isEmpty(), false)
  t.is(q.dequeue(), 3)
  t.is(q.isEmpty(), true)
})