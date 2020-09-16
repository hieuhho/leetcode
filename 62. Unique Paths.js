/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Above is a 7 x 3 grid. How many possible unique paths are there?

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right

Example 2:

Input: m = 7, n = 3
Output: 28

Constraints:

1 <= m, n <= 100
It's guaranteed that the answer will be less than or equal to 2 * 10 ^ 9.
*/

// dfs
const uniquePathsDFS = (m, n) => {
  const dfs = (i = m - 1, j = n - 1) => {
    if (!i || !j) return 1;
    return dfs(i - 1, j) + dfs(i, j - 1);
  };
  return dfs();
};

// bottom up
const uniquePaths = (m, n) => {
  const arr = Array(n).fill(1);
  for (let i = 1; i < m; i += 1) {
    const previous = [...arr];
    for (let j = 1; j < n; j += 1) {
      arr[j] = previous[j] + arr[j - 1];
    }
  }
  return arr[n - 1];
};

const m = 3;
const n = 2;
console.log(uniquePaths(m, n));

const m2 = 7;
const n2 = 3;
console.log(uniquePaths(m2, n2));
