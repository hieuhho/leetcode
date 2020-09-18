/*
Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.

Example :
Input:
S = "abcde"
words = ["a", "bb", "acd", "ace"]
Output: 3
Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".
Note:

All words in words and S will only consists of lowercase letters.
The length of S will be in the range of [1, 50000].
The length of words will be in the range of [1, 5000].
The length of words[i] will be in the range of [1, 50].
*/

const numMatchingSubseq = (s, words) => {
  let count = 0;

  for (const w of words) {
    let i = 0;
    let j = 0;
    while (j < w.length && i < s.length) {
      if (w[j] === s[i]) {
        j += 1;
        i += 1;
      } else {
        i += 1;
      }
    }
    if (j === w.length) count += 1;
  }
  return count;
};

const s = 'abcde';
const words = ['a', 'bb', 'acd', 'ace'];
console.log(numMatchingSubseq(s, words));
