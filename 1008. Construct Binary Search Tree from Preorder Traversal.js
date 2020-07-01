/*
Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

              8
             / \
            5   10
           / \    \
          1   7   12

Constraints:

1 <= preorder.length <= 100
1 <= preorder[i] <= 10^8
The values of preorder are distinct.

O array
I array
C distint values
E array of nulls, not integers

[2, 1, 0, null, 3, null, 4]
            2
           / \
          1   3
         / \ / \
        0 null  4
-> [2, 1, 3, 0, null, null, 4]

add node to result
check node for child
if child
add left child to result
add right child to result
recurse
*/
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const bstFromPreorder = (preorder) => {
  const root = new TreeNode(preorder[0]);

  for (let i = 1; i < preorder.length; i += 1) {
    recurse(root, preorder[i]);
  }
  return root;
};

const recurse = (root, val) => {
  if (val <= root.val) {
    if (root.left) recurse(root.left, val);
    else { root.left = new TreeNode(val); }
  } else if (root.right) recurse(root.right, val);
  else root.right = new TreeNode(val);
};

const test = [8, 5, 1, 7, 10, 12];
console.log(bstFromPreorder(test));
