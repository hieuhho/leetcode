/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

const checkPalindrome = (str) => {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i += 1;
    j -= 1;
  }
  return true;
};

const longestPalindrome = (s) => {
  for (let i = s.length; i > 0; i -= 1) {
    let j = 0;
    let k = i;
    while (k <= s.length) {
      const tempStr = s.substring(j, k);
      if (checkPalindrome(tempStr)) return tempStr;
      j += 1;
      k += 1;
    }
  }
  return '';
};

const test1 = 'babad';
console.log(longestPalindrome(test1));
