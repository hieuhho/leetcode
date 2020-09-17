/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

const nextPermutation = (nums) => {
  const swap = (a, b) => {
    [nums[a], nums[b]] = [nums[b], nums[a]];
  };

  const reverse = (start) => {
    let end = nums.length - 1;
    while (start < end) {
      swap(start, end);
      start += 1;
      end -= 1;
    }
  };

  const permutation = (inx) => {
    for (let i = nums.length - 1; i > inx; i -= 1) {
      if (nums[i] > nums[inx]) return i;
    }
  };

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    if (nums[i] < nums[i + 1]) {
      const next = permutation(i);
      swap(i, next);
      reverse(i + 1);
      return nums;
    }
  }
  return nums.reverse();
};

const test = [1, 2, 3];
const test2 = [3, 2, 1];
const test3 = [1, 1, 5];
console.log(nextPermutation(test));
console.log(nextPermutation(test2));
console.log(nextPermutation(test3));
