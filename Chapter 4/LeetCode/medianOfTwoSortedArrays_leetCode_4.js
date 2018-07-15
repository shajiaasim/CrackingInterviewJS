//recursive solution

function median(nums1, nums2, start, end) {


  var positionx = Math.floor((start + end) / 2);

  var positiony = Math.round((nums1.length + nums2.length) / 2) - poisitionx;

  var found = false;

  var isOdd = (nums1.length + nums2.length) % 2 == 0 ? false : true;

  if ((nums1[positionx - 1] <= nums2[positiony]) && (nums2[positiony - 1] <= nums1[positionx])) found = true

  else {
    if (nums1[positionx - 1] > nums2[positiony]) {
      end = end - 1;

    } else {
      end = end + 1;

    }
  }

  if (found) {

    if (!isOdd) return (Math.max(nums1[positionx - 1], nums2[positiony - 1]) + Math.min(nums1[positionx], nums[positiony])) / 2
    else return Math.max(nums1[positionx - 1], nums2[positiony - 1]);

  }

  median(nums1, num2, start, end);

}

//Iteration 
function medianIteration(A, B) {



  var m = A.length;

  var n = B.length;

  var isOdd = (x + y) % 2 == 0 ? false : true;



  var iMin = 0;
  iMax = m, halfLen = (m + n + 1) / 2;


  while (iMin <= iMax) {
    var i = (iMin + iMax) / 2;
    var j = halfLen - i;
    if (i < iMax && B[j - 1] > A[i]) {
      iMin = iMin + 1; // i is too small
    } else if (i > iMin && A[i - 1] > B[j]) {
      iMax = iMax - 1; // i is too big
    } else { // i is perfect
      var maxLeft = 0;
      if (i == 0) {
        maxLeft = B[j - 1];
      } else if (j == 0) {
        maxLeft = A[i - 1];
      } else {
        maxLeft = Math.max(A[i - 1], B[j - 1]);
      }
      if ((m + n) % 2 == 1) {
        return maxLeft;
      }

      var minRight = 0;
      if (i == m) {
        minRight = B[j];
      } else if (j == n) {
        minRight = A[i];
      } else {
        minRight = Math.min(B[j], A[i]);
      }

      return (maxLeft + minRight) / 2.0;
    }
  }
  return 0.0;
}
}
