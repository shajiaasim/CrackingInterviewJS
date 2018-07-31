function moveZeroes(arr) {

  var lastIndex = arr.length - 1;
  for (var i = 0; i < arr.length; i++) {

    if (arr[i] == 0) {
        //find first non zero integer
        var j=i+1;
        var nonZeroFound = false
        while(j<arr.length-1){
            if (arr[j] != 0){
              nonZeroFound = true;
              break;
            }
            j++;
        }
      if (nonZeroFound) {
        swap(arr, i, j);
      }
      else{
        break;
      }
    }

  }
  return arr;
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(moveZeroes([0,1,2,0,3,0]));
