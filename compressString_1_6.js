function compressString(word){
var compressedString={};

word.split('').forEach(char =>{
var charFound=false;

Object.keys(compressedString).forEach(key=>{
  if(compressedString[key]==char) charFound =true;
});
if (charFound){
  compressedString[char]++;
} else {
  compressedString[char]=0;
}

})

return compressedString;



}


console.log(compressString('aaaabbcddeeffggab'));
