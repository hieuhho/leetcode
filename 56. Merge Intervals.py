# Given a collection of intervals, merge all overlapping intervals.

# Example 1:

# Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
# Output: [[1,6],[8,10],[15,18]]
# Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
# Example 2:

# Input: intervals = [[1,4],[4,5]]
# Output: [[1,5]]
# Explanation: Intervals [1,4] and [4,5] are considered overlapping.
# NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

# Constraints:

# intervals[i][0] <= intervals[i][1]

def merge(intervals):
  if not intervals: return []
  result = []
  intervals = sorted(intervals, key = lambda x : x[0])
  for current in intervals:
    if not result or result[-1][1] < current[0]:
      result.append(current)
    else:
      result[-1][1] = max(result[-1][1], current[1])

  return result

test1 = [[1,3],[2,6],[8,10],[15,18]]
test2 = [[1, 4], [4, 5]];
test3 = [[1, 2], [4, 6], [3, 5]]
test4 = [[1,4],[0,4]]
print(merge(test1))
print(merge(test2))
print(merge(test3))
print(merge(test4))