//create a map (sort of)

function groupAnagrams(arr) {

  return arr.map(function(word) {
    return {
      id: word.split().sort().join(),
      original: word
    }
  }).map(function(wordObject){
    return wordObject.original;
  })

}


const anagrams = [
  'motherinlaw',
  'debit card',
  'dormitory',
  'theearthquakes',
  'astronomer',
  'punishments',
  'schoolmaster',
  'hitlerwoman',
  'badcredit',
  'dirtyroom',
  'thequeershakes',
  'moonstarrer',
  'ninethumps',
  'theclassroom'
];


// groupAnagrams can be called
console.log(groupAnagrams() === 'where is your anagram?');
