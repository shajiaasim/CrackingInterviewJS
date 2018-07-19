


 function smallestDiff(arr1, arr2){

   var i=0,j=0;
   var currSum = 100000;
   var solution = "";

    while (i<arr1.length && j<arr2.length){
      if (Math.abs(arr2[j]-arr1[i]<currSum)) {
        currSum = arr2[j]-arr1[i];
        solution = i+"," j;
      }
        if (arr1[i]<arr2[j]) i++;
        else j++;
    }
    return solution;
 }
