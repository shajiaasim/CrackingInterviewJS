//https://www.youtube.com/watch?v=ohHWQf1HDfU&index=16&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&t=12s

// D n Q
//Not working
function maximunSumSubarray(arr, start, end) {

  var mid = (end - start) / 2;
  var leftMss = maximunSumSubarray(arr, start, m);
  var rightMss = maximunSumSubarray(arr, m + 1, end);
  var lsum = 0;
  var rSum = 0;

  //Three possibilities:
  //1. Left has SOLUTION
  //2. Right has SOLUTION
  //3. Lsum+Rsum is the SOLUTION

  var sum = 0;
  for (var i = mid - 1; i > 0; i--) {
    sum += left[i];
    lsum = Math.max(sum, lsum);
  }

  var sum = 0;
  for (var j = mid; j < n; j++) {
    sum = sum + left[j];
    rSum = Math.max(sum, rSum);
  }
  var ans = Math.max(leftMss, rightMss);
  return Math.max(ans, lSum + rSum);
}

console.log(maximunSumSubarray([3,-2,5,-1], 0, 4))

//working
var maxSubArray = function(nums) {
  let cur = nums[0];
  let res = nums[0];
  for(let i = 1; i < nums.length; i ++){
    if(cur < 0){
      cur = nums[i];
    }
    else {
      cur = cur + nums[i];
    }
    res = Math.max(res, cur);
  }
  return res;
};

console.log('h');
console.log(maxSubArray([3,-2,5,-1,2]));
