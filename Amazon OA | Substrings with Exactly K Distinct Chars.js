/*
Given a string s and an int k, return an int representing the number of substrings (not unique) of s with exactly k distinct characters. If the given string doesn't have k distinct characters, return 0.

Example 1:

Input: s = "pqpqs", k = 2
Output: 7
Explanation: ["pq", "pqp", "pqpq", "qp", "qpq", "pq", "qs"]

Example 2:

Input: s = "aabab", k = 3
Output: 0
Constraints:

The input string consists of only lowercase English letters [a-z]
0 ≤ k ≤ 26
*/

const substringsWithKDistinct = (string, k) => {
  let start = 0;
  let end = 0;
  const result = [];

  const { length } = string;

  while (start < length && end < length) {
    while (end <= length) {
      if (string.slice(start, end).length > 1) {
        const newSet = new Set(string.slice(start, end));
        if (newSet.size === k) result.push(string.slice(start, end));
      }
      end += 1;
    }
    start += 1;
    end = start;
  }
  return result.length;
};

const s = 'pqpqs';
const k = 2;

console.log(substringsWithKDistinct(s, k));
