/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/

// BFS
const zigzagLevelOrder = (root) => {
  if (!root) return [];
  const queue = [root];
  const result = [];
  let depth = 0;
  while (queue.length !== 0) {
    const len = queue.length;
    const currLevel = [];
    for (let i = 0; i < len; i += 1) {
      const currNode = queue.shift();
      if (depth % 2 === 0) currLevel.push(currNode.val);
      else currLevel.unshift(currNode.val);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    result.push(currLevel);
    depth += 1;
  }
  return result;
};
