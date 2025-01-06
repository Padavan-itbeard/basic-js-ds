const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = insert(this.rootTree, data);


    function insert(node, value) {
      if (node === null) {
        return new Node(value);
      }
      if (value < node.data) {
        node.left = insert(node.left, value);
      } else {
        node.right = insert(node.right, value);
      }

      return node;
    };
  }

  has(data) {
    return searchTree(this.rootTree, data);

    function searchTree(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      if (value < node.data) {
        return searchTree(node.left, value);
      } else {
        return searchTree(node.right, value);
      }
    }
  }

  find(data) {
    return findInTree(this.rootTree, data);

    function findInTree(node, value) {
      if (!node) {
        return null;
      }
      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        return findInTree(node.left, value);
      }
      return findInTree(node.right, value);
    }
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, data);

        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, data);

        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;

          return node;
        }

        if (!node.right) {
          node = node.left;

          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    function findMin(node) {
      if (node.left != null) {
        return findMin(node.left);
      }

      return node.data;
    };

    return findMin(this.rootTree);
  }

  max() {
    function findMax(node) {
      if (node.right != null) {
        return findMax(node.right);
      }

      return node.data;
    };

    return findMax(this.rootTree);
  }


}

module.exports = {
  BinarySearchTree
};