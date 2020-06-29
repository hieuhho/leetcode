/*
Given an array nums sorted in ascending order, return true if and only if you can split it into 1 or more subsequences such that each subsequence consists of consecutive integers and has length at least 3.

Example 1:

Input: [1,2,3,3,4,5]
Output: True
Explanation:
You can split them into two consecutive subsequences :
1, 2, 3
3, 4, 5

Example 2:

Input: [1,2,3,3,4,4,5,5]
Output: True
Explanation:
You can split them into two consecutive subsequences :
1, 2, 3, 4, 5
3, 4, 5

Example 3:

Input: [1,2,3,4,4,5]
Output: False

Constraints:

1 <= nums.length <= 10000

O bool
I array of int
C none, see above
E empty, not array

[1] -> false
[1, 2 , 3] -> true
[1, 2, 2] ->  false

loop
check if can join existing result
else
make new result

*/

const isPossible = (nums) => {
  const count = {};
  const exist = {};

  nums.forEach((n) => { count[n] = count[n] ? count[n] + 1 : 1; });

  for (const n of nums) {
    if (count[n] === 0) {
      continue;
    } else if (exist[n] > 0) {
      exist[n + 1] = exist[n + 1] ? exist[n + 1] + 1 : 1;
      exist[n] -= 1;
    } else if (count[n + 1] > 0 && count[n + 2] > 0) {
      count[n + 1] -= 1;
      count[n + 2] -= 1;
      exist[n + 3] = exist[n + 3] ? exist[n + 3] + 1 : 1;
    } else {
      return false;
    }
    count[n] -= 1;
  }
  return true;
};

const test1 = [1, 2, 3, 3, 4, 5];
console.log('test1: ', isPossible(test1));
const test2 = [1, 2, 3, 3, 4, 4, 5, 5];
console.log('test2: ', isPossible(test2));
const test3 = [1, 2, 3, 4, 4, 5];
console.log('test3: ', isPossible(test3));
