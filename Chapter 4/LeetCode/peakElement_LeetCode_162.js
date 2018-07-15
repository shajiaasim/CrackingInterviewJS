// A peak element is an element that is greater than its neighbors.
//
// Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.
//
// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
//
// You may imagine that nums[-1] = nums[n] = -∞.
//
// Example 1:
//
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:
//
// Input: nums = [1,2,1,3,5,6,4]
// Output: 1 or 5
// Explanation: Your function can return either index number 1 where the peak element is 2,
//              or index number 5 where the peak element is 6.

//Brute force, not smart
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

  var high = null;
  var index;

  for (var i = 0; i < nums.length; i++) {
    if (i == 0) {
      high = nums[i];
      index = 0
    } else {

      if (nums[i] > high) {
        high = nums[i];
        index = i;
      }
    }
  }
  return index;
};


//Binary search
//Split the work
//recursion
//not sure how it works


function findPeakElement(nums) {

  return helper(nums, 0, nums.length - 1);
}

function helper(nums, low, high) {

  if (low == high) {
    return low;
  } else {

    var mid1 = (low + high) / 2;
    var mid2 = mid1 + 1;
    if (num[mid1] > num[mid2]) return helper(num, low, mid1);
    else return helper(num, mid2, high);

  }

}
