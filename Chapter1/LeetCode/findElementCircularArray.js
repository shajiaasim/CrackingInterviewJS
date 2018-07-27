function find(arr, k) {

  var low = 0;
  var high = arr.length - 1;
  var mid = Math.round((high - low) / 2);


  while (low <= high) {
    if (arr[mid] == k) return mid;
    if (arr[mid] < arr[high]) //right half sorted
    {
      if (arr[mid] < k && k <=arr[high]) { //k is between mid and high
        low = mid + 1;
      } else {
        high = mid- 1;
      }
    } else { //left half is sorted
      if (arr[low]<=k && k < arr[mid] ) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
}


var arr = [12, 14, 18, 21, 3, 6, 8, 9];

console.log(find(arr, 18));
