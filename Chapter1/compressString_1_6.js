// function compressString(word){
// var compressedString={};
//
// word.split('').forEach(char =>{
// var charFound=false;
//
// Object.keys(compressedString).forEach(key=>{
//   if(compressedString[key]==char) charFound =true;
// });
// if (charFound){
//   compressedString[char]++;
// } else {
//   compressedString[char]=0;
// }
//
// })
//
// return compressedString;
// }


//better way
function compressString(word){
var compressedString="";
var count=0;
for (var i =0;i<word.length;i++){
count++;

//if array ends or char changes

if (i+1==word.length|| word[i+1]!=word[i]){
  compressedString= compressedString + word[i];
  compressedString= compressedString + count;
  count=0;
}

}

return compressedString;

}



console.log(compressString('aaaabbcddeeffgg'));
