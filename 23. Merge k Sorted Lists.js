/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []

Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.
*/
const mergeKLists = (lists) => {
  const merge2Lists = (l1, l2) => {
    if (!l1 || !l2) return l1 || l2;
    let node = {};
    const root = node;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        node.next = l1;
        l1 = l1.next;
      } else {
        node.next = l2;
        l2 = l2.next;
      }
      node = node.next;
    }
    if (l1) node.next = l1;
    if (l2) node.next = l2;
    return root.next;
  };
  let root = lists[0];
  for (let i = 1; i < lists.length; i += 1) {
    root = merge2Lists(root, lists[i]);
  }
  return root || null;
};
