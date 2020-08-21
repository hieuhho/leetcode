/*
Given a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \
1        7   9

Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9
*/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const increasingBST = (root) => {
  const tempNode = new TreeNode();
  let node = tempNode;

  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    node.right = root;
    node = node.right;
    node.left = null;
    dfs(root.right);
  };
  dfs(root);
  return tempNode.right;
};

const test = [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9];
console.log(increasingBST(test));
