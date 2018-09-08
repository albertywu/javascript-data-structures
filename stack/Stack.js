class Stack {
  constructor(...items) {
    this.data = []
    for (let item of items) {
      this.push(item)
    }
  }

  push(item) { this.data.push(item) }

  pop() { return this.data.pop() }

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
test('Stack', t => {
  let s = new Stack(1, 2, 3)
  t.is(s.peek(), 3)
  s.pop()
  t.is(s.peek(), 2)
  s.pop()
  t.is(s.peek(), 1)
  t.is(s.isEmpty(), false)
  s.pop()
  t.is(s.peek(), undefined)
  t.is(s.isEmpty(), true)
})

test('Stack iterator', t => {
  let s = new Stack(1, 2, 3)
  let result = []
  for (let item of s) {
    result.push(item)
  }
  t.deepEqual(result, [3, 2, 1])
})