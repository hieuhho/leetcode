/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1

Example 2:

Input:
11000
11000
00100
00011

Output: 3

O matrix
I integer
C none
E char validation

10
01 -> 2

10
10 -> 1

00
00 -> 0

*/

const numIslands = (grid) => {
  let count = 0;

  function castAway(row, col) {
    grid[col][row] = 'x';
    if (col > 0) {
      if (grid[col - 1][row] === '1') {
        castAway(row, col - 1);
      }
    }
    if (col < grid.length - 1) {
      if (grid[col + 1][row] === '1') {
        castAway(row, col + 1);
      }
    }
    if (row > 0) {
      if (grid[col][row - 1] === '1') {
        castAway(row - 1, col);
      }
    }
    if (row < grid[col].length) {
      if (grid[col][row + 1] === '1') {
        castAway(row + 1, col);
      }
    }
  }
  for (let col = 0; col < grid.length; col += 1) {
    for (let row = 0; row < grid[col].length; row += 1) {
      if (grid[col][row] === '1') {
        count += 1;
        castAway(row, col);
      }
    }
  }
  return count;
};

const test1 = [['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']];
console.log('numIslands: ', numIslands(test1));

const test2 = [['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']];
console.log('numIslands: ', numIslands(test2));
