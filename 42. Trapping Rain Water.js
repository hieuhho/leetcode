/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:

n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105
*/

const trap = (height) => {
  if (!height.length) return 0;

  let result = 0;
  const leftHeight = {};
  const rightHeight = {};
  const len = height.length;

  leftHeight[0] = height[0];
  for (let i = 1; i < len; i += 1) {
    leftHeight[i] = Math.max(height[i], leftHeight[i - 1]);
  }
  rightHeight[len - 1] = height[len - 1];
  for (let i = len - 2; i >= 0; i -= 1) {
    rightHeight[i] = Math.max(height[i], rightHeight[i + 1]);
  }
  for (let i = 0; i < len; i += 1) {
    result += Math.min(leftHeight[i], rightHeight[i]) - height[i];
  }
  return result;
};

const test1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const test2 = [4, 2, 0, 3, 2, 5];
console.log(trap(test1));
console.log(trap(test2));
