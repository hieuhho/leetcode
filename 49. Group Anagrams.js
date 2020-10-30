/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.
*/
// O(NlogK)
const groupAnagrams1 = (strs) => {
  const map = {};
  for (const str of strs) {
    const key = [...str].sort();
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }
  return Object.values(map);
};

// O(KN)
const groupAnagrams = (strs) => {
  const res = {};
  for (const str of strs) {
    const count = new Array(26).fill(0);
    for (const char of str) count[char.charCodeAt() - 97]++;
    const key = count.join();
    res[key] ? res[key].push(str) : res[key] = [str];
  }
  return Object.values(res);
};

const test1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// console.log(groupAnagrams(test1));
console.log(groupAnagrams(test1));
