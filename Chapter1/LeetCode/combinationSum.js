function combinationSum(arr, target) {
  var i = 0;
  var q = new Queue();
  var sum = 0;
  var resultCounter = 0
  var solution = {}
  while (i < arr.length-1) {

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
  if(this.size()){
  var deQ = this._storage[oldestIndex];
  delete this._storage[oldestIndex];
  this._oldestIndex++;
  return deQ;
}
};


Queue.prototype.sum = function(){
  var sum=0
  var size = this._size;

  for (var i=0; i<size; i++){
    var num = this.dequeue();
    sum+= sum;
    this.enqueue(num);
  }

}


var arr=[2,3,5];
combinationSum(arr,8);
