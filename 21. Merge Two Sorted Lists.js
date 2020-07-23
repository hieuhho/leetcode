/*
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

O array
I 2 arrays
C none
E input validations, if items are integers, if there are lists

[1, 2, 3], [4, 5, 6]
-> [1, 2, 3, 4 ,5, 6]
*/

ListNode = (val) => {
  this.val = val;
  this.next = null;
};

const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) return l1 || l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  l2.next = mergeTwoLists(l1, l2.next);
  return l2;
};

const firstList = [1, 2, 4];
const secondList = [1, 3, 4];
console.log(mergeTwoLists(firstList, secondList));
