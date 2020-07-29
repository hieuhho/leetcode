/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

O array of int
I array, int
C none
E empty array? target is not int -> return []

make an obj
loop through numbers
add number and index to obj
if difference of target - number exists in obj
return [obj index, current index]
else
return []
*/

const twoSum = (numbers, target) => {
  const map = {};

  for (let i = 0; i < numbers.length; i += 1) {
    const difference = target - numbers[i];
    if (map[difference] > -1) return [map[difference] + 1, i + 1];
    map[numbers[i]] = i;
  }
  return [];
};

const numbers = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(numbers, target));
