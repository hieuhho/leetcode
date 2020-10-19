/*
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Note:

You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].
*/
const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = (start + end) / 2 | 0;
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) end = mid - 1;
    else { start = mid + 1; }
  }
  return -1;
};

const nums1 = [-1, 0, 3, 5, 9, 12];
const target1 = 9;
console.log(search(nums1, target1));

const nums2 = [-1, 0, 3, 5, 9, 12];
const target2 = 2;
console.log(search(nums2, target2));

const nums3 = [5];
const target3 = 5;
console.log(search(nums3, target3));