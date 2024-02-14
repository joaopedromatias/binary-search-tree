# Binary Search Tree

A binary tree is a tree in which nodes can have no more than two childs

In a **`binary search tree`**, data must be positioned based on its comparison to the root. If it is smaller it goes to the left, else it goes to the right. If the position is not available, data is compared with the node in the current position, and so on. This is done until an available position is found.

## Pre order

-> first visit the root
-> traverse the left subtree
-> traverse the right subtree

## Post Order

-> traverse the left subtree
-> traverse the right subtree
-> visit the root

## In Order (root at the middle)

-> traverse the left subtree
-> visit the root
-> traverse the right subtree

```js
/*

             Josh
          /       \
        Jane      Michael
       /    \        /  \
   Abigail  John   Luke Nancy
         \                 \ 
        Adam                Tom
           \               /    \ 
            Bea         Sara       Zack
                        /   \      /    \ 
                    Rachel  Sue  Victoria Zoe
                               \            \
                               Tim         Zynard                                
*/
```
