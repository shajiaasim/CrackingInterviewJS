function findElement(sortedMatrix, x) {

  //first row
  var rowIndex = 0;
  //last column
  var columnIndex = sortedMatrix[0].length;
  var elemFound = false;
  while(rowIndex>=0&&columnIndex>=0){
    if (sortedMatrix [rowIndex][columnIndex] == x){

       return {row:rowIndex,column:columnIndex};
     }
    //Start of column gretaer than x
  if (sortedMatrix [rowIndex][columnIndex] > x){
    columnIndex--;
  } else {
    //End of row less than x
    rowIndex++;
  }
}
}
