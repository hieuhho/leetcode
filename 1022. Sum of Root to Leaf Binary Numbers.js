/*
Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

Return the sum of these numbers.

Input: [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

I array that represent a binary tree
O integer, sum of all binary path
C path won't exceed 1000
E long path

  [1,0,0] -> 1
            / \
           0   0
  -> 10, 10
  parseInt(10, 2) + parseInt(10, 2)

  add root node to arr
  if root has children
  add left child
  recurse
  add right child
  recurse

  run arr through parseInt
  add answer to parsed
  return answer
*/

const sumRootToLeaf = (root) => {
  const binaryArray = [];
  let result = 0;

  const binarySearch = (node, binary) => {
    if (!node.left && !node.right) {
      binaryArray.push(binary + node.val);
    } else if (!node.left || !node.right) {
      if (node.left) binarySearch(node.left, binary + node.val);
      else { binarySearch(node.right, binary + node.val); }
    } else {
      binarySearch(node.left, binary + node.val);
      binarySearch(node.right, binary + node.val);
    }
  };
  binarySearch(root, '');

  binaryArray.forEach((binary) => {
    const parsed = parseInt(binary, 2);
    result += parsed;
  });
  return result;
};
