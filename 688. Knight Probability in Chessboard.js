/*
On an NxN chessboard, a knight starts at the r-th row and c-th column and attempts to make exactly K moves. The rows and columns are 0 indexed, so the top-left square is (0, 0), and the bottom-right square is (N-1, N-1).

A chess knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.

The knight continues moving until it has made exactly K moves or has moved off the chessboard. Return the probability that the knight remains on the board after it has stopped moving.

Example:

Input: 3, 2, 0, 0
Output: 0.0625
Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
From each of those positions, there are also two moves that will keep the knight on the board.
The total probability the knight stays on the board is 0.0625.

Note:

N will be between 1 and 25.
K will be between 0 and 100.
The knight always initially starts on the board.
*/

const knightProbability = (N, K, r, c) => {
  const dirs = [
    [-2, -1], [-1, -2], // up left
    [1, -2], [2, -1], // up right
    [2, 1], [1, 2], // down right
    [-1, 2], [-2, 1]]; // down left
  const arr = [...Array(K + 1)].map(() => [...Array(N)].map(() => Array(N).fill(0)));

  arr[0][r][c] = 1;
  for (let k = 1; k <= K; k += 1) {
    for (let i = 0; i < N; i += 1) {
      for (let j = 0; j < N; j += 1) {
        for (const [dx, dy] of dirs) {
          const x = i + dx;
          const y = j + dy;
          if (x >= 0 && x < N && y >= 0 && y < N) {
            arr[k][i][j] += arr[k - 1][x][y] / 8;
          }
        }
      }
    }
  }
  let res = 0;
  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      res += arr[K][i][j];
    }
  }
  return res;
};
console.log(knightProbability(3, 2, 0, 0));
