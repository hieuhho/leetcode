/*
Given an array A of integers, return true if and only if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i+1 < j with (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])

Example 1:

Input: A = [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

Example 2:

Input: A = [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false

Example 3:

Input: A = [3,3,6,5,-2,2,5,1,-9,4]
Output: true
Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

Constraints:

3 <= A.length <= 50000
-10^4 <= A[i] <= 10^4
*/

const canThreePartsEqualSum = (A) => {
  const sum = A.reduce((total, x) => total + x);
  if (sum % 3) return false;

  const avg = sum / 3;
  let current = 0;
  let count = 0;

  for (const a of A) {
    current += a;
    if (current === avg) {
      count++;
      current = 0;
    }
    if (count >= 3) return true;
  }
  return false;
};
const test1 = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
console.log(canThreePartsEqualSum(test1));

const test2 = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1];
console.log(canThreePartsEqualSum(test2));

const test3 = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4];
console.log(canThreePartsEqualSum(test3));

console.log(canThreePartsEqualSum([1, -1, 1, -1]));
console.log(canThreePartsEqualSum([18, 12, -18, 18, -19, -1, 10, 10]));
console.log(canThreePartsEqualSum([0, 0, 0, 0]));
console.log(canThreePartsEqualSum([10, -10, 10, -10, 10, -10, 10, -10]));
