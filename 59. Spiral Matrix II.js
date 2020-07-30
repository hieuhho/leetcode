/*
Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]

O matrix
I positive int
C none
E input val -> return []

*/

const generateMatrix = (n) => {
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const matrix = [...Array(n)].map(() => Array(n).fill(null));
  const traverse = [n, n - 1];
  let count = 1;
  let dir = 0;
  let i = 0;
  let j = -1;

  while (traverse[dir % 2] > 0) {
    for (let k = 0; k < traverse[dir % 2]; k += 1) {
      i += dirs[dir][0];
      j += dirs[dir][1];
      matrix[i][j] = count++;
    }
    traverse[dir % 2] -= 1;
    dir = (dir + 1) % 4;
  }
  return matrix;
};

console.log(generateMatrix(3));
