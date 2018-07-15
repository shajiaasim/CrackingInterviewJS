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
