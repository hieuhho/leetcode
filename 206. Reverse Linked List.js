/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/
// iteratively
const reverseList = (head) => {
  const prev = null;
  while (head) {
    const { next } = head;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

// recursively
const reverseList = (head) => {
  if (!head || !head.next) return head;
  const newHead = reverseList(head.next)
  head.next.next = head;
  head.next = null;
  return newHead;
}