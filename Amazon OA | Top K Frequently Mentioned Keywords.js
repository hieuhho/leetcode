/*
Given a list of reviews, a list of keywords and an integer k. Find the most popular k keywords in order of most to least frequently mentioned.

The comparison of strings is case-insensitive.
Multiple occurances of a keyword in a review should be considred as a single mention.
If keywords are mentioned an equal number of times in reviews, sort alphabetically.

Example 1:

Input:
k = 2
keywords = ["anacell", "cetracular", "betacellular"]
reviews = [
  "Anacell provides the best services in the city",
  "betacellular has awesome services",
  "Best services provided by anacell, everyone should use anacell",
]

Output:
["anacell", "betacellular"]

Explanation:
"anacell" is occuring in 2 different reviews and "betacellular" is only occuring in 1 review.

Example 2:

Input:
k = 2
keywords = ["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"]
reviews = [
  "I love anacell Best services; Best services provided by anacell",
  "betacellular has great services",
  "deltacellular provides much better services than betacellular",
  "cetracular is worse than anacell",
  "Betacellular is better than deltacellular.",
]

Output:
["betacellular", "anacell"]

Explanation:
"betacellular" is occuring in 3 different reviews. "anacell" and "deltacellular" are occuring in 2 reviews, but "anacell" is lexicographically smaller.

O array of k string
I array of strings, array of string (keys), int
C none
E case insensitive, multi occurence in 1 review = 1, if equal sort alphabetically
*/

const topKFrequency = (reviews, keywords, k) => {
  const keysMap = {};
  keywords.forEach((word) => keysMap[word] = 0);
  reviews.forEach((review) => {
    const words = review.toLowerCase().split(/\W/g);
    const visited = new Set();
    words.forEach((word) => {
      if (!visited.has(word) && keysMap[word] >= 0) {
        keysMap[word] += 1;
        visited.add(word);
      }
    });
  });
  const result = Object.keys(keysMap).sort((a, b) => {
    if (keysMap[a] === keysMap[b]) return a.localeCompare(b);
    return keysMap[b] - keysMap[a];
  });
  return result.slice(0, k);
};

const k = 2;
const keywords = ['anacell', 'cetracular', 'betacellular'];
const reviews = [
  'Anacell provides the best services in the city',
  'betacellular has awesome services',
  'Best services provided by anacell, everyone should use anacell',
];
console.log(topKFrequency(reviews, keywords, k));

const k2 = 2;
const keywords2 = ['anacell', 'betacellular', 'cetracular', 'deltacellular', 'eurocell'];
const reviews2 = [
  'I love anacell Best services; Best services provided by anacell',
  'betacellular has great services',
  'deltacellular provides much better services than betacellular',
  'cetracular is worse than anacell',
  'Betacellular is better than deltacellular.',
];
console.log(topKFrequency(reviews2, keywords2, k2));
