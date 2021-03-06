/*
Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed.

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Example 3:

Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
Example 4:

Input: products = ["havana"], searchWord = "tatiana"
Output: [[],[],[],[],[],[],[]]

Constraints:

1 <= products.length <= 1000
There are no repeated elements in products.
1 <= Σ products[i].length <= 2 * 10^4
All characters of products[i] are lower-case English letters.
1 <= searchWord.length <= 1000
All characters of searchWord are lower-case English letters.

O array of strings, string
I array of arrays of strings, sub-array length >= 3, main array length = string length
C see above
E invalid input, string not in arr -> [[]]
*/

const suggestedProducts = (products, searchWord) => {
  products.sort();
  const result = [];
  for (let i = 0; i < searchWord.length; i += 1) {
    products = products.filter((product) => product[i] === searchWord[i]);
    result.push(products.slice(0, 3));
  }
  return result;
};

const products1 = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'];
const searchWord1 = 'mouse';
console.log(suggestedProducts(products1, searchWord1));

const products2 = ['havana'];
const searchWord2 = 'havana';
console.log(suggestedProducts(products2, searchWord2));

const products3 = ['bags', 'baggage', 'banner', 'box', 'cloths'];
const searchWord3 = 'bags';
console.log(suggestedProducts(products3, searchWord3));
