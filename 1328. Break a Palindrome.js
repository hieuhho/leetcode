/*
Given a palindromic string palindrome, replace exactly one character by any lowercase English letter so that the string becomes the lexicographically smallest possible string that isn't a palindrome.

After doing so, return the final string.  If there is no way to do so, return the empty string.

Example 1:

Input: palindrome = "abccba"
Output: "aaccba"

Example 2:

Input: palindrome = "a"
Output: ""

Constraints:

1 <= palindrome.length <= 1000
palindrome consists of only lowercase English letters.
*/

const breakPalindrome = (palindrome) => {
  if (palindrome.length === 1) return '';
  let temp = 0;
  for (let i = 0; i < (palindrome.length / 2 | 0); i += 1) {
    if (palindrome[i] !== 'a') {
      temp = i;
      break;
    }
  }
  if (temp === 0 && palindrome[temp] === 'a') temp = palindrome.length - 1;
  return `${palindrome.substring(0, temp)}${palindrome[temp] === 'a' ? 'b' : 'a'}${palindrome.substring(temp + 1)}`;
};

const test = 'abccba';
console.log(breakPalindrome(test));
