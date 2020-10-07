/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/
const threeSum = (nums) => {
  const result = [];
  if (nums.length < 3) return result;
  nums = nums.sort((a, b) => a - b);
  for (let start = 0; start < nums.length - 2; start += 1) {
    if (nums[start] > 0) break;
    if (start > 0 && nums[start] === nums[start - 1]) continue;
    let slide = start + 1;
    let end = nums.length - 1;
    while (slide < end) {
      const sum = nums[start] + nums[slide] + nums[end];
      if (sum === 0) {
        result.push([nums[start], nums[slide], nums[end]]);
        while (nums[slide] === nums[slide + 1]) slide += 1;
        while (nums[end] === nums[end - 1]) end -= 1;
        slide += 1;
        end -= 1;
      } else if (sum < 0) {
        slide += 1;
      } else {
        end -= 1;
      }
    }
  }
  return result;
};

const test1 = [-1, 0, 1, 2, -1, -4];
const test2 = [0];
const test3 = [];
console.log(threeSum(test1));
console.log(threeSum(test2));
console.log(threeSum(test3));
