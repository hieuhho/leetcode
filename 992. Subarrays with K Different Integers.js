/*
Given an array A of positive integers, call a (contiguous, not necessarily distinct) subarray of A good if the number of different integers in that subarray is exactly K.

(For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.)

Return the number of good subarrays of A.

Example 1:

Input: A = [1,2,1,2,3], K = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].
Example 2:

Input: A = [1,2,1,3,4], K = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].

Note:

1 <= A.length <= 20000
1 <= A[i] <= A.length
1 <= K <= A.length
*/

const subarraysWithKDistinct = (array, int) => {
  const atMost = (num) => {
    let length = 0;
    let result = 0;
    const count = {};

    for (let i = 0; i < array.length; i += 1) {
      if (!count[array[i]]) count[array[i]] = 0;
      if (count[array[i]] === 0) num -= 1;
      count[array[i]] += 1;

      while (num < 0) {
        count[array[length]] -= 1;
        if (count[array[length]] === 0) num += 1;
        length += 1;
      }
      result += i - length + 1;
    }
    return result;
  };
  return atMost(int) - atMost(int - 1);
};

const a = [1, 2, 1, 2, 3];
const k = 2;
console.log(subarraysWithKDistinct(a, k));

const a2 = [1, 2, 1, 3, 4];
const k2 = 3;
console.log(subarraysWithKDistinct(a2, k2));

const a3 = [1, 2];
const k3 = 1;
console.log(subarraysWithKDistinct(a3, k3));
