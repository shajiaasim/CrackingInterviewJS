function isPermutation(word1, word2){

if (!(word1.length==word2.length)) return false;

var word1Sorted = word1.split('').sort().join('');

var word2Sorted = word2.split('').sort().join('');

return word1Sorted === word2Sorted;

}

console.log(isPermutation('taco', 'ocat'));
