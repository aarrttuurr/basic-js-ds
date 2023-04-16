const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rooot = null;
  }

  root() {
    return this.rooot;
  }

  add(data) {
    this.rooot = adder(this.rooot, data);

    function adder(node, data) {
      if(!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(data < node.data) {
        node.left = adder(node.left, data);
      } else {
        node.right = adder(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searcher(this.rooot, data);

    function searcher(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      return data < node.data ? searcher(node.left, data) : searcher(node.right, data);
    }
  }

  find(data) {
    return searcher2(this.rooot, data);
    
    function searcher2(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      return data < node.data ? searcher2(node.left, data) : searcher2(node.right, data);
    }
  }

  remove(data) {
    this.rooot = removeNode(this.rooot, data);

    function removeNode(node, data) {
      if(!node) {
        return null;
      }

      if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if(data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.rooot) {
      return;
    }

    let node = this.rooot;
    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if(!this.rooot) {
      return;
    }

    let node = this.rooot;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};