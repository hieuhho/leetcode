/*
You have a map that marks the locations of treasure islands. Some of the map area has jagged rocks and dangerous reefs. Other areas are safe to sail in. There are other explorers trying to find the treasure. So you must figure out a shortest route to one of the treasure islands.

Assume the map area is a two dimensional grid, represented by a matrix of characters. You must start from one of the starting point (marked as S) of the map and can move one block up, down, left or right at a time. The treasure island is marked as X. Any block with dangerous rocks or reefs will be marked as D. You must not enter dangerous blocks. You cannot leave the map area. Other areas O are safe to sail in. Output the minimum number of steps to get to any of the treasure islands.

Example:

Input:
[['S', 'O', 'O', 'S', 'S'],
 ['D', 'O', 'D', 'O', 'D'],
 ['O', 'O', 'O', 'O', 'X'],
 ['X', 'D', 'D', 'O', 'O'],
 ['X', 'D', 'D', 'D', 'O']]

Output: 3
Explanation:
You can start from (0,0), (0, 3) or (0, 4). The treasure locations are (2, 4) (3, 0) and (4, 0). Here the shortest route is (0, 3), (1, 3), (2, 3), (2, 4).
*/

const shortestPath = (map) => {
  let steps = 0;
  const queue = [];
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const rows = map.length;
  const cols = map[0].length;

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (map[i][j] === 'S') queue.push([i, j]);
    }
  }
  console.log('queue: ', queue);
  while (queue.length !== 0) {
    steps += 1;
    const size = queue.length;
    for (let i = 0; i < size; i += 1) {
      const [r, c] = queue.shift();
      for (const [dr, dc] of directions) {
        const row = r + dr;
        const col = c + dc;
        if (row >= 0 && row < rows && col >= 0 && col < cols) {
          if (map[row][col] === 'X') return steps;
          if (map[row][col] === 'O') {
            map[row][col] === 'D';
            queue.push([row, col]);
          }
        }
      }
    }
  }
  return -1;
};

const input = [
  ['S', 'O', 'O', 'S', 'S'],
  ['D', 'O', 'D', 'O', 'D'],
  ['O', 'O', 'O', 'O', 'X'],
  ['X', 'D', 'D', 'O', 'O'],
  ['X', 'D', 'D', 'D', 'O'],
];

console.log(shortestPath(input));
