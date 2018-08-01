function isOneEditAway(word1, word2) {

  if (word1.length == word2.length) {

    return isOneReplaceAway(word1, word2);
  } else if (word1.length - 1 == word2.length) {

    return isOneInsertAway(word1, word2);
  } else if (word2.length - 1 == word1.length) {
    return isOneInsertAway(word2, word1);

  }


}

function isOneReplaceAway(word1, word2) {

  var foundDiff = false;
  for (var i = 0; i < word1.length; i++) {

    if (word1[i] != word2[i]) {
      if (foundDiff) return false;
      else foundDiff = true;
    }
  }

  return true;

}

function isOneInsertAway(word1, word2) {

  index1 = 0;
  index2 = 0;

  while (index1 < word1.length && index2 < word2.length) {

    if (word1[index1] != word2[index2]) {
      if (index1 != index2) return false;
      else index1++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
}


console.log(isOneEditAway('bale', 'ble'));
