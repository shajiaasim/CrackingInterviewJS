function countRotations(arr) {

  var high = arr.length - 1;
  var low = 0;
  var count = -1;

  while (low <= high) {

    var mid = Math.round((high + low) / 2);
    if (arr[low]<arr[high]) return low; //already sorted, return 0
    if (arr[mid] <= arr[mid + 1] && arr[mid] < arr[mid - 1]) {
      return mid;// found pivot
    } else if (arr[mid] <= arr[high]) { //right part already sorted, check pivot left side
      high = mid - 1;
    } else if (arr[mid] >= arr[low]) { //left part sorted, pivot on right side
      low = mid + 1;
    }
  }

  return count;
}
