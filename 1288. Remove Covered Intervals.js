/*
Given a list of intervals, remove all intervals that are covered by another interval in the list. Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.

After doing so, return the number of remaining intervals.

Example 1:

Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

Constraints:

1 <= intervals.length <= 1000
0 <= intervals[i][0] < intervals[i][1] <= 10^5
intervals[i] != intervals[j] for all i != j

O array of arrays
I integer, length of array
C see above
E empty array -> 0

[[1, 2], [1, 3]]
  -> remove [1,2]
  -> return 1

  sort by first interval
  get highest
  iterate
  compare to highest
  remove if fits case
  return stack length
*/

const removeCoveredIntervals = (intervals) => {
  intervals.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  const stack = [];
  stack.push(intervals.pop());

  while (intervals.length > 0) {
    const [currentStart, currentEnd] = intervals.pop();
    const [prevStart, prevEnd] = stack[stack.length - 1];

    if (currentStart >= prevStart && currentEnd <= prevEnd) {
      continue;
    } else {
      stack.push([currentStart, currentEnd]);
    }
  }
  return stack.length;
};
