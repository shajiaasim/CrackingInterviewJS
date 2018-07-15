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
