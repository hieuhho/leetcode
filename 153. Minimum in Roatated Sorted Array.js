/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2]
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0

O integer
I sorted array that may have been rorated
C none
E not an array, no sorted => return null

  find left and right
  find middle right + left floor

  ex [2,3,1]
  -> 1
*/

const findMin = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] > arr[right]) left = middle + 1;
    else right = middle;
  }
  return arr[left];
};
