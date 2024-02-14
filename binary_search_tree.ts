class Node {
  data: string
  left?: Node
  right?: Node

  constructor(data: string) {
    this.data = data
  }
}

class BinarySearchTree {
  private root?: Node

  insert(data: string) {
    if (!this.root) {
      this.root = new Node(data)
    } else {
      const searchResult = this.search(data)
      if (searchResult) return console.log('value already in tree')
      let nodeToEvaluate = this.root
      while (true) {
        if (data < nodeToEvaluate.data) {
          const leftNode = nodeToEvaluate.left
          if (leftNode) {
            nodeToEvaluate = leftNode
          } else {
            nodeToEvaluate.left = new Node(data)
            break
          }
        } else {
          const rightNode = nodeToEvaluate.right
          if (rightNode) {
            nodeToEvaluate = rightNode
          } else {
            nodeToEvaluate.right = new Node(data)
            break
          }
        }
      }
    }
  }

  traversePreOrder(node = this.root) {
    if (node) {
      console.log(node.data)
      if (node.left) this.traversePreOrder(node.left)
      if (node.right) this.traversePreOrder(node.right)
    }
  }

  traversePostOrder(node = this.root) {
    if (node) {
      if (node.left) this.traversePostOrder(node.left)
      if (node.right) this.traversePostOrder(node.right)
      console.log(node.data)
    }
  }

  traverseInOrder(node = this.root) {
    if (node) {
      if (node.left) this.traverseInOrder(node.left)
      console.log(node.data)
      if (node.right) this.traverseInOrder(node.right)
    }
  }

  search(data: string, returnParent = false) {
    let nodeToEvaluate = this.root
    if (!nodeToEvaluate) return console.log('tree is empty')

    let prevNode: Node | undefined

    while (nodeToEvaluate) {
      if (nodeToEvaluate.data === data) {
        return returnParent
          ? { node: nodeToEvaluate, parentNode: prevNode }
          : { node: nodeToEvaluate }
      }
      prevNode = nodeToEvaluate
      if (data < nodeToEvaluate.data) {
        nodeToEvaluate = nodeToEvaluate.left
      } else {
        nodeToEvaluate = nodeToEvaluate.right
      }
    }
  }

  delete(data: string) {
    const searchResult = this.search(data, true)
    if (!searchResult) return
    const { node, parentNode } = searchResult

    const isLeafOrHasOnlyOneChild = !node.left || !node.right
    const isRoot = !parentNode

    const isLinkedInLeft = parentNode ? parentNode.left === node : undefined

    if (isLeafOrHasOnlyOneChild) {
      const nodeToAppendInParent = node.left || node.right
      if (isRoot) {
        this.root = nodeToAppendInParent
      } else {
        if (isLinkedInLeft) {
          parentNode.left = nodeToAppendInParent
        } else {
          parentNode.right = nodeToAppendInParent
        }
      }
    } else {
      const nodeRightSide = node.right
      const nodeLeftSide = node.left

      const rootOfLeftSubtree = node.left!
      const rootOfRightSubtree = node.right!

      const leftSubtreeRightChild = rootOfLeftSubtree.right
      const rightSubtreeLeftChild = rootOfRightSubtree.left

      if (!leftSubtreeRightChild) {
        rootOfLeftSubtree.right = nodeRightSide
        if (isRoot) {
          this.root = rootOfLeftSubtree
        } else {
          if (isLinkedInLeft) {
            parentNode.left = rootOfLeftSubtree
          } else {
            parentNode.right = rootOfLeftSubtree
          }
        }
      } else if (!rightSubtreeLeftChild) {
        rootOfRightSubtree.left = nodeLeftSide
        if (isRoot) {
          this.root = rootOfRightSubtree
        } else {
          if (isLinkedInLeft) {
            parentNode.left = rootOfRightSubtree
          } else {
            parentNode.right = rootOfRightSubtree
          }
        }
      } else {
        let prevNode = rootOfLeftSubtree
        let leafOfLeftSubtreeOnRightSide = leftSubtreeRightChild
        while (leafOfLeftSubtreeOnRightSide.left || leafOfLeftSubtreeOnRightSide.right) {
          prevNode = leafOfLeftSubtreeOnRightSide
          leafOfLeftSubtreeOnRightSide = (leafOfLeftSubtreeOnRightSide.left ||
            leafOfLeftSubtreeOnRightSide.right)!
        }
        const prevNodeIsLinkedInLeft = prevNode.left === leafOfLeftSubtreeOnRightSide
        if (prevNodeIsLinkedInLeft) {
          prevNode.left = undefined
        } else {
          prevNode.right = undefined
        }

        const nodeLeftSide = node.left
        leafOfLeftSubtreeOnRightSide.right = nodeRightSide
        leafOfLeftSubtreeOnRightSide.left = nodeLeftSide

        if (isRoot) {
          this.root = leafOfLeftSubtreeOnRightSide
        } else {
          if (isLinkedInLeft) {
            parentNode.left = leafOfLeftSubtreeOnRightSide
          } else {
            parentNode.right = leafOfLeftSubtreeOnRightSide
          }
        }
      }
    }
  }

  findMin() {
    let nodeToEvaluate = this.root
    if (!nodeToEvaluate) return console.log('tree is empty')

    while (true) {
      const leftNode: Node | undefined = nodeToEvaluate!.left
      if (leftNode) {
        nodeToEvaluate = leftNode
      } else {
        break
      }
    }
    return nodeToEvaluate
  }

  findMax() {
    let nodeToEvaluate = this.root
    if (!nodeToEvaluate) return console.log('tree is empty')

    while (true) {
      const rightNode: Node | undefined = nodeToEvaluate!.right
      if (rightNode) {
        nodeToEvaluate = rightNode
      } else {
        break
      }
    }
    return nodeToEvaluate
  }
}

const binaryTree = new BinarySearchTree()

binaryTree.insert('Josh')
binaryTree.insert('Jane')
binaryTree.insert('Abigail')
binaryTree.insert('Adam')
binaryTree.insert('Michael')
binaryTree.insert('Nancy')
binaryTree.insert('John')
binaryTree.insert('Tom')
binaryTree.insert('Sara')
binaryTree.insert('Zack')
binaryTree.insert('Zoe')
binaryTree.insert('Bea')
binaryTree.insert('Zynard')
binaryTree.insert('Luke')
binaryTree.insert('Sue')
binaryTree.insert('Tim')
binaryTree.insert('Victoria')
binaryTree.insert('Rachel')

export {}
