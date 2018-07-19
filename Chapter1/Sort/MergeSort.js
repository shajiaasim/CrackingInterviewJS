function mergeSort(arr) {

  if (arr.length == 1) return arr;
  var mid = Math.floor(arr.length / 2);
  var leftArr = arr1.slice(0, mid);
  var rightArr = arr2.slice(mid, arrlength);
  return mergeSortUtil(mergeSort(leftArr), mergeSort(rightArr));

}


merge(left, right) {
  var A = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      A.push(left[0]);
      left = left.slice(1);
    } else {
      A.push(right[0]);
      right = right.slice(1);
    }
  }

//The shift() method removes the first item of an array.
//Note: The return value of the shift method is the removed item.
// The remaining elements will already be in order
  while (left.length) A.push(left.shift());
  while (right.length) A.push(right.shift());


  return A;
}
