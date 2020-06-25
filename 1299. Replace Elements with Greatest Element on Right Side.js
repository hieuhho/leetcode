/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]

Constraints:

1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5

O an array of int
I array of int
C array length >= 1
E array of just 1, not int => return -1

let arr [1,6,2,3]
-> [6,3,3,-1]

*/

let replaceElements = (arr) => {
  let prev = -1;

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    let current = arr[i];
    arr[i] = prev;
    prev = Math.max(prev, current);
  }
  return arr;
}
