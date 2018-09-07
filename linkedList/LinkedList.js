class LinkedList {
  constructor(...items) {
    this.head = null
    for (let item of items) {
      this.addTail(item)
    }
  }

  first() {
    return this.head ? this.head.item : undefined
  }

  last() {
    if (this.head === null) return undefined
    let x = this.head
    while (x.next !== null) x = x.next
    return x.item
  }

  addHead(item) {
    let newNode = new Node(item)
    newNode.next = this.head
    this.head = newNode
    return this
  }

  removeHead() {
    if (this.head === null) return
    this.head = this.head.next
    return this
  }

  // add item to end of the ll
  addTail(item) {
    let newNode = new Node(item)
    if (this.head === null) {
      this.head = newNode
      return this
    }
    let x = this.head
    while (x.next !== null) x = x.next
    x.next = newNode
    return this
  }

  removeTail() {
    if (this.head === null) {
      return this
    } else if (this.head.next === null) {
      this.head = null
      return this
    }
    let prev = this.head
    let x = this.head.next
    while (x.next !== null) {
      x = x.next
      prev = prev.next
    }
    prev.next = null
    return this
  }

  reverse() {
    let x = this.head
    let prev = null
    while (x !== null) {
      let next = x.next // save pointer to next node
      x.next = prev
      prev = x
      x = next
    }
    this.head = prev
    return this
  }
}

class Node {
  constructor(item) {
    this.item = item
    this.next = null
  }
}

import { test } from 'ava'

test('LinkedList#addHead', t => {
  let ll = new LinkedList(1, 2, 3)
  t.is(ll.first(), 1)
  ll.addHead(2)
  t.is(ll.first(), 2)
})

test('LinkedList#removeHead', t => {
  let ll = new LinkedList(1, 2, 3)
  t.is(ll.first(), 1)
  ll.removeHead()
  t.is(ll.first(), 2)
})

test('LinkedList#addTail', t => {
  let ll = new LinkedList(1, 2, 3)
  t.is(ll.last(), 3)
  ll.addTail(4)
  t.is(ll.last(), 4)
})

test('LinkedList#removeTail', t => {
  let ll = new LinkedList(1, 2, 3)
  t.is(ll.last(), 3)
  ll.removeTail()
  t.is(ll.last(), 2)
})

test('LinkedList#reverse', t => {
  let ll = new LinkedList(1, 2, 3, 4, 5)
  t.is(ll.first(), 1)
  t.is(ll.last(), 5)
  ll.reverse()
  t.is(ll.first(), 5)
  t.is(ll.last(), 1)
})