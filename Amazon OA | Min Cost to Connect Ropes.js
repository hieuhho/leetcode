/*
Given n ropes of different lengths, we need to connect these ropes into one rope. We can connect only 2 ropes at a time. The cost required to connect 2 ropes is equal to sum of their lengths. The length of this connected rope is also equal to the sum of their lengths. This process is repeated until n ropes are connected into a single rope. Find the min possible cost required to connect all ropes.

Example 1:
Input: ropes = [8, 4, 6, 12]
Output: 58
Explanation: The optimal way to connect ropes is as follows
1. Connect the ropes of length 4 and 6 (cost is 10). Ropes after connecting: [8, 10, 12]
2. Connect the ropes of length 8 and 10 (cost is 18). Ropes after connecting: [18, 12]
3. Connect the ropes of length 18 and 12 (cost is 30).
Total cost to connect the ropes is 10 + 18 + 30 = 58

Example 2:
Input: ropes = [20, 4, 8, 2]
6 + 14 + 34 = 54
Output: 54

Example 3:
Input: ropes = [1, 2, 5, 10, 35, 89]
Output: 224

Example 4:
Input: ropes = [2, 2, 3, 3]
Output: 20
*/

const minCost = (ropes) => {
  let cost = 0;
  while (ropes.length > 1) {
    ropes = ropes.sort((a, b) => a - b);
    const ropeA = ropes.shift();
    const ropeB = ropes.shift();
    cost += ropeA + ropeB;
    ropes.push(ropeA + ropeB);
  }
  return cost;
};

const ropes1 = [8, 4, 6, 12];
console.log('ropes1: ', minCost(ropes1));
const ropes2 = [20, 4, 8, 2];
console.log('ropes2: ', minCost(ropes2));
const ropes3 = [1, 2, 5, 10, 35, 89];
console.log('ropes3: ', minCost(ropes3));
const ropes4 = [2, 2, 3, 3];
console.log('ropes4: ', minCost(ropes4));
