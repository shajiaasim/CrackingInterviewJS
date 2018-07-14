function isPalinPerm(word) {

  var obj = {};

  var oddFound = false;
  var isPerm = true;
  var currChar;
  /* for (var i=0; i<word.length;i++){

  var c = word[i];

  if (obj[c]==undefined) {
  obj[c]=1;
  continue;
  } else {
  obj[c]++;
  }
  }
   */

  //better way to loop

  word.split('').forEach(function(char) {
    if (char !== ' ') {
      currChar = char.toLowerCase();
      if (obj[currChar] == undefined) obj[currChar] = 1;
      else obj[currChar]++;
    }
  })

  Object.keys(obj).forEach(function(key) {
    if (obj[key] % 2 == 1) {
      if (oddFound) isPerm = false;
      else oddFound = true;
    }


  });

  return isPerm;


}

console.log(isPalinPerm('aabbcddeeo'));
