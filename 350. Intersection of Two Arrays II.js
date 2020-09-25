/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

const intersect = (nums1, nums2) => {
  const map = nums1.reduce((num, n) => {
    num[n] = (num[n] + 1 || 1);
    return num;
  }, {});
  return nums2.filter((n) => {
    if (map[n]) {
      map[n] -= 1;
      return true;
    }
    return false;
  });
};

const test1a = [1, 2, 2, 1];
const test1b = [2, 2];
console.log(intersect(test1a, test1b));

const test2a = [4, 9, 5];
const test2b = [9, 4, 9, 8, 4];
console.log(intersect(test2a, test2b));
