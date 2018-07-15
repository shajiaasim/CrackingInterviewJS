//find if value exists within array

//recusrion : needs testing
function binarySearch(nums, target) {

  if (nums.length == 0) return -1;

  int mid = Math.floor(nums.length / 2);

  if (target == nums[mid1]) return mid1;

  if (target < nums[mid1]) return binarySearch(nums.splice(0, mid1), target);
  else return binarySearch(nums.splice(mid + 1, nums.length - 1), target);


}


//Iterative implmentation

//While loop


function binarchSearchIteration(nums, target) {


  var low = 0;
  var high = nums.length - 1;

  while (low < high) {
    var mid = Math.floor((high - low) / 2);

    if (target == nums[mid]) return mid;

    if (target < nums[mid]) high = mid;
    else low = mid;

  }


}
