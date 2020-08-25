/*
An encoded string S is given.  To find and write the decoded string to a tape, the encoded string is read one character at a time and the following steps are taken:

If the character read is a letter, that letter is written onto the tape.
If the character read is a digit (say d), the entire current tape is repeatedly written d-1 more times in total.
Now for some encoded string S, and an index K, find and return the K-th letter (1 indexed) in the decoded string.

Example 1:

Input: S = "leet2code3", K = 10
Output: "o"
Explanation:
The decoded string is "leetleetcodeleetleetcodeleetleetcode".
The 10th letter in the string is "o".

Example 2:

Input: S = "ha22", K = 5
Output: "h"
Explanation:
The decoded string is "hahahaha".  The 5th letter is "h".

Example 3:

Input: S = "a2345678999999999999999", K = 1
Output: "a"
Explanation:
The decoded string is "a" repeated 8301530446056247680 times.  The 1st letter is "a".

O a string
I a string, and a number
C 40 mins
E input validation, if string has letters

create empty tape string ""
iterate through string
if NaN add to tape
continue
else if is number
declare temp string = current tape
while number >= 1
add temp tape to current tape
subtract 1 from number

return k in final tape.
*/
const decodeAtIndex2 = (S, K) => {
  let tape = '';
  for (let i = 0; i < S.length; i += 1) {
    const letter = S[i];
    if (tape.length > K) break;
    if (isNaN(letter)) {
      tape = tape.concat(letter);
    } else if (!isNaN(letter)) {
      tape += tape.repeat(letter - 1);
    }
  }
  return tape[K - 1];
};

const decodeAtIndex = (S, K) => {
  let length = 0;
  let i = 0;

  while (length < K - 1) {
    if (isNaN(S[i])) {
      length += 1;
    } else {
      const n = length * (parseInt(S[i]) - 1);
      if (length + n >= K) {
        if ((K - length) % length === 0) {
          let j;
          for (j = i - 1; j >= 0; j -= 1) {
            if (isNaN(S[j])) break;
          }
          return S[j];
        } if ((K - length) % length === 1) {
          return S[0];
        }
        return decodeAtIndex(S, (K - length) % length);
      }
      length += n;
    }
    i += 1;
  }

  if (isNaN(S[i])) return S[i];
  return S[0];
};

const S = 'leet2code3';
const K = 10;
console.log(decodeAtIndex(S, K));

const S2 = 'a2345678999999999999999';
const K2 = 1;
console.log(decodeAtIndex(S2, K2));

const S3 = 'y959q969u3hb22odq595';
const K3 = 222280369;
console.log(decodeAtIndex(S2, K2));
