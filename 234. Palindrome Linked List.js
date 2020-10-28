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
  if (head === null) return true;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast) slow = slow.next;
  let prev = null;
  while (slow) {
    const { next } = slow;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  console.log('slow: ', slow);
  fast = head;
  while (prev) {
    if (prev.val !== fast.val) return false;
    prev = prev.next;
    fast = fast.next;
  }
  return true;
};
