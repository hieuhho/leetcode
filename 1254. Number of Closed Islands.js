/*
Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.

Example 1:

Input: grid =
[[1,1,1,1,1,1,1,0],
[1,0,0,0,0,1,1,0],
[1,0,1,0,1,1,1,0],
[1,0,0,0,0,1,0,1],
[1,1,1,1,1,1,1,0]]
Output: 2
Explanation:
Islands in gray are closed because they are completely surrounded by water (group of 1s).
Example 2:

Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1
Example 3:

Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2

Constraints:

1 <= grid.length, grid[0].length <= 100
0 <= grid[i][j] <=1
*/

const dfs = (row, col, rows, cols, grid) => {
  if (row < 0 || col < 0 || row >= rows || col >= cols) return false;
  if (grid[row][col] === 1) return true;

  grid[row][col] = 1;

  const top = dfs(row - 1, col, rows, cols, grid);
  const bot = dfs(row + 1, col, rows, cols, grid);
  const left = dfs(row, col - 1, rows, cols, grid);
  const right = dfs(row, col + 1, rows, cols, grid);

  if (top && bot && left && right) return true;
  grid[row][col] = 0;
  return false;
};

const closedIslands = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;

  let count = 0;

  for (let i = 0; i < rows - 1; i += 1) {
    for (let j = 0; j < cols - 1; j += 1) {
      if (grid[i][j] === 0) {
        if (dfs(i, j, rows, cols, grid)) count += 1;
      }
    }
  }
  return count;
};

const test1 = [[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]];
console.log(closedIslands(test1));

const test2 = [[0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [0, 1, 1, 1, 0]];
console.log(closedIslands(test2));

const test3 = [[1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]];
console.log(closedIslands(test3));
