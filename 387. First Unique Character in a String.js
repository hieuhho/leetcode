/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

Note: You may assume the string contains only lowercase English letters.

O integer of firt uniq indx
I string
C O(n)
E if doesn't exist return -1

'bob' -> 1
'cat' -> 0
'aabbcc' -> -1

count each letter occurance using obj
iterate string
if i in obj = 1
return i
*/

// Using Map

const firstUniqChar = (string) => {
  const map = new Map();

  for (let i = 0; i < string.length; i += 1) {
    if (map.has(string[i])) {
      map.set(string[i], 2);
    } else {
      map.set(string[i], 1);
    }
  }
  for (let j = 0; j < string.length; j += 1) {
    if (map.get(string[j]) === 1) {
      return j;
    }
  }
  return -1;
};

// Using Object
const firstUniqCharObj = (string) => {
  const occurance = {};
  for (let i = 0; i < string.length; i += 1) {
    if (!occurance[string[i]]) {
      occurance[string[i]] = 1;
    } else {
      occurance[string[i]] += 1;
    }
  }
  for (let j = 0; j < string.length; j += 1) {
    if (occurance[string[j]] === 1) {
      return j;
    }
  }
  return -1;
};
