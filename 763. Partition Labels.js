/*
A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.

O array of int
I string
C see above
E input validation, not letter, length of 1

'abcd' -> [1,1,1,1]
'abcda' -> [1]

count occurances
find last occurance of let
iterate
if last occurance = current
end of partition
subtract placing
add to resutl
placing = new partition
*/

const partitionLabels = (string) => {
  const lastIndex = {};
  const partitions = [];
  let place = 0;
  let endOfPartition = 0;

  for (let i = 0; i < string.length; i += 1) {
    lastIndex[string[i]] = i;
  }
  for (let j = 0; j < string.length; j += 1) {
    endOfPartition = Math.max(endOfPartition, lastIndex[string[j]]);
    if (j === endOfPartition) {
      partitions.push(j - place + 1);
      place = j + 1;
    }
  }
  return partitions;
};

const test1 = 'ababcbacadefegdehijhklij';
console.log(partitionLabels(test1));
