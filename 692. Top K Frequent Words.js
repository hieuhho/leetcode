/*
Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:
Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.
Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Input words contain only lowercase letters.
Follow up:
Try to solve it in O(n log k) time and O(n) extra space.

O array of string
I array of strings
C 1 < valid k < ele
E only 1 freq with k > 1

[a, b, a, c], k = 2
-> [a, b] a occurred 2 times, b and c once but b has lower alphabetical
*/

// higher order solve
const topKFrequent = (words, k) => {
  const count = words.reduce((a, b) => {
    a[b] ? a[b]++ : a[b] = 1;
    return a;
  }, {});
  const result = Object.keys(count).sort((a, b) => {
    if (count[a] > count[b]) return -1;
    if (count[b] > count[a]) return 1;
    return a.localeCompare(b);
  });
  return result.slice(0, k);
};

// naive solve
const topKFrequentNaive = (words, k) => {
  const wordsMap = {};
  words.forEach((word) => {
    wordsMap[word] = wordsMap[word] + 1 || 1;
  });
  const result = Object.keys(wordsMap).sort((a, b) => {
    if (wordsMap[b] === wordsMap[a]) return a.localeCompare(b);
    return wordsMap[b] - wordsMap[a];
  });
  return result.slice(0, k);
};

const test1 = ['i', 'love', 'leetcode', 'i', 'love', 'coding'];
const k = 2;
console.log(topKFrequent(test1, k));
const test2 = ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'];
const p = 4;
console.log(topKFrequent(test2, p));
