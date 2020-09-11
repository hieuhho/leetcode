/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true

Example 2:

Input: s = "foo", t = "bar"
Output: false

Example 3:

Input: s = "paper", t = "title"
Output: true
Note:
You may assume both s and t have the same length.
*/

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;
  if (new Set(s).size !== new Set(t).size) return false;
  const map = new Map();
  for (let i = 0; i < t.length; i += 1) {
    if (map.has(s[i]) && map.get(s[i]) !== t[i]) return false;
    map.set(s[i], t[i]);
  }
  return true;
};

const s = 'egg';
const t = 'add';
console.log(isIsomorphic(s, t));

const s2 = 'foo';
const t2 = 'bar';
console.log(isIsomorphic(s2, t2));

const s3 = 'paper';
const t3 = 'title';
console.log(isIsomorphic(s3, t3));

const s4 = 'aba';
const t4 = 'baa';
console.log(isIsomorphic(s4, t4));
