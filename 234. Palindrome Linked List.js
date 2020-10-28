/*
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
*/
const isPalindrome = (head) => {
  if (head === null || head.next === null) return true;
  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = reverse(slow.next);
  slow = slow.next;
  while (slow !== null) {
    if (head.val !== slow.val) return false;
    head = head.next;
    slow = slow.next;
  }
  return true;
};

const reverse = (head) => {
  let prev = null;
  let next = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};
