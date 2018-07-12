function Stack() {
  this._size = 0;
  this.storage = {};
  this._min = new Stack();
}


Stack.prototype.push = function(val) {

  var size = this.size++;
  if (!this._min || val < this._min) this._min.push(val);

  this.storage[size] = val;
}


Stack.prototype.pop = function() {
  var size = this.size;
  if (size) {
    var pop = this.storage[size];
    delete this.storage[size];
    this.size--;
    if (pop == this._min.peek()) this._min.pop();
    return pop;
  }
}


Stack.prototype.min = function() {
  this._min.peek();
};


/* TEST */

var s = new stackMin();
s.push(9);
s.push(8);
s.push(1);
s.push(2);
s.push(1);
s.push(9);

console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 2);
console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 8);
console.log(s.min(), 8);
s.pop();
s.pop();
console.log(s.isEmpty(), true);
console.log(s.min(), undefined);
