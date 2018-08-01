//https://www.youtube.com/watch?v=OE7wUUpJw6I&index=1&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A

function firstOccurence(arr, k) {

  var result = -1;

  var low = 0;
  var high = arr.length - 1;

  while (low <= high) {

    var mid = Math.round((high - low) / 2);

    if (arr[mid] == k) {
      //store result instead of returning it
      result = mid;
      //move left if you found it
      high = mid - 1;
    } else if (arr[mid] < k) {
      low = mid - 1;
    } else if (arr[mid] > k) {
      high = mid + 1;
    }

  }

  return result;

}



function lastOccurence(arr, k) {

  var result = -1;

  var low = 0;
  var high = arr.length - 1;

  while (low <= high) {

    var mid = Math.round((high - low) / 2);

    if (arr[mid] == k) {
      //store result instead of returning it
      result = mid;
      //move right if you found it
      low = mid + 1;
    } else if (arr[mid] < k) {
      low = mid - 1;
    } else if (arr[mid] > k) {
      high = mid + 1;
    }

  }

  return result;

}
