/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
Accepted
*/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const levelOrder = (root) => {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length !== 0) {
    const len = queue.length;
    const currLevel = [];
    for (let i = 0; i < len; i += 1) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      currLevel.push(node.val);
    }
    result.push(currLevel);
  }
  return result;
};
