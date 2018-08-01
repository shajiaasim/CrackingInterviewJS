// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
//
// Each number in candidates may only be used once in the combination.
//
// Note:
//
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:
//
// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Example 2:
//
// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]

function combinationSum(arr, k) {
  var obj = {};
  var stack = new Stack();
  var k = 0
  backTrack(arr, obj, stack, k, 0);

}


function backtrack(arr, result, stack, k, sum, start) {
  if (sum == 0) {
    result[k] = stack;
    k++;
  } else if (sum > k) {
    return;
  } else if (sum < k) {
    for (var i = start; i < arr.length; i++) {
      stack.push(arr[start]);
      backTrack(arr, result, stack, k, sum - arr[start], i + 1);
      stack.pop();
    }
  }
}




function combinationSum(arr, target) {
  var i = 0;
  var q = new Queue();
  var sum = 0;
  var resultCounter = 0
  var solution = {}
  while (i < arr.length - 1) {

    if (q.sum() == target) {
      solution[resultCounter] = q;
      q.dequeue();
      i++;
      resultCounter++;
    }
    if (q.sum() > target) q.dequeue();
    if (q.sum() < target) q.enqueue(arr[i]);

  }

  return solution;

}


function Queue() {
  this._storage = {};
  this._oldestIndex = 1;
  this._newestIndex = 1;
}


// Understand why this is being done
Queue.prototype.size = function() {
  return this._newestIndex - this._oldestIndex;
}


Queue.prototype.enqueue = function(val) {
  this._storage[this._newestIndex] = val;
  this._newestIndex++;
};


Queue.prototype.dequeue = function() {

  var oldestIndex = this._oldestIndex;
  if (this.size()) {
    var deQ = this._storage[oldestIndex];
    delete this._storage[oldestIndex];
    this._oldestIndex++;
    return deQ;
  }
};


Queue.prototype.sum = function() {
  var sum = 0
  var size = this._size;

  for (var i = 0; i < size; i++) {
    var num = this.dequeue();
    sum += sum;
    this.enqueue(num);
  }

}


var arr = [2, 3, 5];
combinationSum(arr, 8);
