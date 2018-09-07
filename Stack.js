class Stack {
  constructor() {
    this.data = []
  }

  push(item) {
    this.data.push(item)
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  size() {
    return this.data.length
  }
}

import { test } from 'ava'
test('Stack', t => {
  let s = new Stack()
  s.push(1)
  s.push(2)
  s.push(3)
  t.is(s.peek(), 3)
  s.pop()
  t.is(s.peek(), 2)
  s.pop()
  t.is(s.peek(), 1)
  s.pop()
  t.is(s.peek(), undefined)
})