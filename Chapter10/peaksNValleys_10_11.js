function peaksNValleys(arr) {

  var isPeak = true;
  var curr = null;
  var right = null;

  for (var i = 0; i < arr.length; i++) {
    curr = arr[i];
    right = arr[i + 1];
    if (isPeak) {
      if (curr < right) {
        swap(array, i, i + 1)
      }
    } else {
      if (curr > right) {
        swap(array, i, i + 1)
      }
    }
    isPeak = !isPeak;

  }
  return arr;
}
