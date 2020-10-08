/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

Constraints:

intervals[i][0] <= intervals[i][1]
*/

const merge = (intervals) => {
  if (!intervals.length) return intervals;
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let lowest = intervals[0];
  const result = [lowest];

  for (const current of intervals) {
    if (current[0] <= lowest[1]) {
      lowest[1] = Math.max(current[1], lowest[1]);
    } else {
      result.push(current);
      lowest = current;
    }
  }
  return result;
};

const test1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
const test2 = [[1, 4], [4, 5]];
const test3 = [[1, 2], [4, 6], [3, 5]];
console.log(merge(test1));
console.log(merge(test2));
console.log(merge(test3));
