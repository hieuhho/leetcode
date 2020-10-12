/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [0]
Output: 0
Example 4:

Input: nums = [-1]
Output: -1
Example 5:

Input: nums = [-2147483647]
Output: -2147483647

Constraints:

1 <= nums.length <= 2 * 104
-231 <= nums[i] <= 231 - 1
*/
const maxSubArray = (nums) => {
  if (nums.length === 1) return nums[0];
  let result = Number.MIN_SAFE_INTEGER;
  let currentSum = 0;
  const { length } = nums;
  for (let i = 0; i < length; i += 1) {
    currentSum += nums[i];
    if (currentSum > result) result = currentSum;
    if (currentSum < 0) currentSum = 0;
  }
  return result;
};

const test1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const test2 = [1];
const test3 = [0];
const test4 = [-1];
const test5 = [-2147483647];
const test6 = [-2, -1];

console.log(maxSubArray(test1));
console.log(maxSubArray(test2));
console.log(maxSubArray(test3));
console.log(maxSubArray(test4));
console.log(maxSubArray(test5));
console.log(maxSubArray(test6));
