/*
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

Example 1:

Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

O matrix/ array of arrays of int
I int
C none
E if left over fresh => -1
  if all rotten => 0

  [[1, 2],
   [0, 1]]
  ->
  [[2, 2],
   [0, 2]]
  -> 1

  iterate through row
  iterate through col
  for each, check if rotten
  if fresh
    add 1 to fresh
  if rotten
  check up r - 1
  check down r + 1
  check left c - 1
  check right c + 1
    if fresh change to rotten
    add 1 to result
    subtract 1 from fresh
  if fresh > 0
  return -1
  else
  return result
*/

const orangesRotting = (matrix) => {
  let rotten = [];
  let fresh = 0;
  let time = 0;

  const spread = (row, col, matrix, current) => {
    let rot = 0;

    if (row > 0 && matrix[row - 1][col] === 1) {
      matrix[row - 1][col] += 1;
      rot += 1;
      current.push([row - 1, col]);
    }
    if (row < matrix.length - 1 && matrix[row + 1][col] === 1) {
      matrix[row + 1][col] += 1;
      rot += 1;
      current.push([row + 1, col]);
    }
    if (col > 0 && matrix[row][col - 1] === 1) {
      matrix[row][col - 1] += 1;
      rot += 1;
      current.push([row, col - 1]);
    }
    if (col < matrix[0].length - 1 && matrix[row][col + 1] === 1) {
      matrix[row][col + 1] += 1;
      rot += 1;
      current.push([row, col + 1]);
    }
    return rot;
  };

  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix[row].length; col += 1) {
      const current = matrix[row][col];
      if (current === 1) fresh += 1;
      if (current === 2) rotten.push([row, col]);
    }
  }

  while (rotten.length && fresh) {
    const newRotten = [];
    while (rotten.length) {
      const current = rotten.shift();
      const rotting = spread(current[0], current[1], matrix, newRotten);
      fresh -= rotting;
    }
    time += 1;
    rotten = newRotten;
  }

  return fresh !== 0 ? -1 : time;
};

const test1 = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];
console.log('test1: ', orangesRotting(test1));

const test2 = [[2, 1, 1], [0, 1, 1], [1, 0, 1]];
console.log('test2: ', orangesRotting(test2));

const test3 = [[0, 2]];
console.log('test3: ', orangesRotting(test3));
