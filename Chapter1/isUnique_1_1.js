function isUnique(word) {

  var obj = {};
  for (var i = 0; i < word.length; i++) {

    var c = word[i];

    if (obj[c]) return false;
    else obj[c] = true;
  }

  return true;
}

console.log(isUnique("aa"));
