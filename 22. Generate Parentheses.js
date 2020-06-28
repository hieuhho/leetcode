/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

O array of correct response
I integer
C parentheses must be correct, must open then close
E not whole integer, fracctions

n = 1 -> [()]
n = 2 -> ["(())", "()()"]
*/

const generateParenthesis = (n) => {
  const result = [];

  const generator = (left, right, half) => {
    if (left > right) return;
    if (!left && !right) result.push(half);
    if (left > 0) generator(left - 1, right, `${half}(`);
    if (right > 0) generator(left, right - 1, `${half})`);
  };
  generator(n, n, '');
  return result;
};
