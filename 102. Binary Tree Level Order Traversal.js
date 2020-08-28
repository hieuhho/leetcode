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

  const stack = [];
  const result = [];

  stack.push(root);

  while (stack.length > 0) {
    const size = stack.length;
    const temp = [];

    for (let i = 0; i < size; i += 1) {
      const node = stack.shift();
      temp.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    result.push(temp);
  }
  return result;
};

const test = [3, 9, 20, null, null, 15, 7];
console.log(levelOrder(test));
