class BinarySearchTree {
  constructor(...nodes) {
    this.root = null
    for (let node of nodes) {
      this.put(node.key, node.value)
    }
  }

  put(key, value) {
    function _put(node, key, value) {
      if (node === null) return new Node(key, value)
      else if (key < node.key) {
        node.left = _put(node.left, key, value)
      } else if (key > node.key) {
        node.right = _put(node.right, key, value)
      } else {
        node.value = value
      }
      return node
    }
    this.root = _put(this.root, key, value)
  }

  get(key) {
    let x = this.root
    while (x !== null) {
      if (key < x.key) x = x.left // traverse left
      else if (key > x.key) x = x.right // traverse right
      else return x.value // found it!
    }
    return x
  }

  delete(key) {
    function _delete(node, key) {
      if (node === null) return
      if (key < node.key) {
        node.left = _delete(node.left, key)
      } else if (key > node.key) {
        node.right = _delete(node.right, key)
      } else { // node.key === key
        if (node.right === null) return node.left
        if (node.left === null) return node.right

        let t = node
        node = min(t.right)
        node.right = removeMin(t.right)
        node.left = t.left
      }
      return node
    }

    function removeMin(node) {
      if (node.left === null) return node.right
      node.left = removeMin(node.left)
      return node
    }

    function min(node) {
      let x = node
      while (x.left !== null) x = x.left
      return x
    }

    this.root = _delete(this.root, key)
  }

  contains(key) {

  }

  isEmpty() {

  }

  size() {

  }

  keys() {

  }

}

class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
  }
}

import { test } from 'ava'
test('BinarySearchTree#put', t => {
  let bst = new BinarySearchTree(
    { key: 'c', value: 42 },
    { key: 'a', value: 100 },
    { key: 'd', value: 22 }
  )
  t.is(bst.get('c'), 42)
  bst.put('c', 44)
  t.is(bst.get('c'), 44)
})

test('BinarySearchTree#get', t => {
  let bst = new BinarySearchTree(
    { key: 'c', value: 42 },
    { key: 'a', value: 100 },
    { key: 'd', value: 22 }
  )
  t.is(bst.get('a'), 100)
  t.is(bst.get('c'), 42)
  t.is(bst.get('d'), 22)
})

test('BinarySearchTree#delete', t => {
  let bst = new BinarySearchTree(
    { key: 'c', value: 42 },
    { key: 'a', value: 100 },
    { key: 'd', value: 22 }
  )
  t.is(bst.get('a'), 100)
  t.is(bst.get('c'), 42)
  t.is(bst.get('d'), 22)

  bst.delete('a')
  bst.delete('d')
  t.is(bst.get('d'), null)
  t.is(bst.get('a'), null)
  t.is(bst.get('c'), 42)
})