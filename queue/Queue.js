class Queue {
  constructor(...items) {
    this.data = []
    for (let item of items) {
      this.enqueue(item)
    }
  }

  enqueue(item) { this.data.unshift(item) }

  dequeue() { return this.data.pop() }

  peek() { return this.data[this.data.length - 1] }

  isEmpty() { return this.data.length === 0 }

  [Symbol.iterator]() {
    let idx = this.data.length - 1
    return {
      next: () => idx > -1
        ? { value: this.data[idx--], done: false }
        : { done: true }
    }
  }
}

import { test } from 'ava'

test('Queue', t => {
  let q = new Queue(1, 2, 3)
  t.is(q.dequeue(), 1)
  t.is(q.dequeue(), 2)
  t.is(q.peek(), 3)
  t.is(q.isEmpty(), false)
  t.is(q.dequeue(), 3)
  t.is(q.isEmpty(), true)
})

test('Queue iterator', t => {
  let q = new Queue(1, 2, 3)
  let result = []
  for (let item of q) {
    result.push(item)
  }
  t.deepEqual(result, [1, 2, 3])
})