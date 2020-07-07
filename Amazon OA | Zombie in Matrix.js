/*
Given a 2D grid, each cell is either a zombie 1 or a human 0. Zombies can turn adjacent (up/down/left/right) human beings into zombies every hour. Find out how many hours does it take to infect all humans?

Example:

Input:
[[0, 1, 1, 0, 1],
 [0, 1, 0, 1, 0],
 [0, 0, 0, 0, 1],
 [0, 1, 0, 0, 0]]

Output: 2

Explanation:
At the end of the 1st hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [0, 1, 0, 1, 1],
 [1, 1, 1, 0, 1]]

At the end of the 2nd hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1]]

O integer
I matrix
C none
E see above
  input validation, empty
*/

const minHours = (matrix) => {
  const queue = [];
  let hours = 0;
  const directions = [[1, 0], [0, 1], [0, -1], [-1, 0]];
  const rows = matrix.length;
  const cols = matrix[0].length;
  let population = rows * cols;

  // add zombies to queue
  matrix.forEach((row, r) => {
    row.forEach((subject, c) => {
      if (subject === 1) queue.push([r, c]);
    });
  });

  // check if still humans
  if (queue.length === population) return hours;

  // remove zombies from population
  population -= queue.length;

  // infect
  while (queue.length) {
    // break if population is 0
    if (!population) {
      break;
    }
    // add time to infection
    hours += 1;
    for (let i = 0; i < queue.length; i += 1) {
      const zombie = queue.shift();
      directions.forEach((dir) => {
        const target = [zombie[0] + dir[0], zombie[1] + dir[1]];
        if (target[0] >= 0 && target[0] < rows // if row is valid
            && target[1] >= 0 && target[1] < cols // if col is valid
            && matrix[target[0]][target[1]] === 0) { // if target is human
          queue.push(target); // add to queue
          matrix[target[0]][target[1]] += 1; // change human to zombie
          population -= 1; // decrease population
        }
      });
    }
  }
  return hours;
};

const input = [[0, 1, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0]];

console.log((minHours(input))); // expect 2
