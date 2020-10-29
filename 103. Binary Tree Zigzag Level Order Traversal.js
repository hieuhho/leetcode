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
const zigzagLevelOrderBFS = (root) => {
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

// improved runtime

const zigzagLevelOrder = (root) => {
  const result = [];
  zigzag(root, 0, result);
  return result;
};

const zigzag = (node, depth, result) => {
  if (!node) return;
  if (result[depth] == null) result.push([]);
  if (depth % 2 === 0) result[depth].push(node.val);
  else result[depth].unshift(node.val);
  zigzag(node.left, depth + 1, result);
  zigzag(node.right, depth + 1, result);
};
