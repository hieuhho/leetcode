/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

Constraints:

board and word consists only of lowercase and uppercase English letters.
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3

O bool
I array of array/ matrix, string of words
C see above, none
E not array, invalid input -> false

loop through outter array
loop through inner array
check if i is beginning of word
if yes
loop through word
change i to 1
check left right up down for next word
if yes
repeat
if word length = 0
return true
else
break out of loop
repeat search
if inner array = 0
return false
*/

const exist = (board, word) => {
  const check = (row, col, board, word) => {
    if (!word.length) return true;
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || board[row][col] !== word[0]) return false;

    const newWord = word.substring(1);
    const currentWord = board[row][col];

    board[row][col] = '*';

    const checkDirs = (check(row - 1, col, board, newWord))
    || (check(row, col + 1, board, newWord))
    || (check(row + 1, col, board, newWord))
    || (check(row, col - 1, board, newWord));

    board[row][col] = currentWord;
    return checkDirs;
  };

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (check(i, j, board, word)) return true;
    }
  }
  return false;
};

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
const word1 = 'ABCCED';
const word2 = 'SEE';
const word3 = 'ABCB';

console.log('board 1: ', exist(board, word1));
console.log('board 2: ', exist(board, word2));
console.log('board 3: ', exist(board, word3));
