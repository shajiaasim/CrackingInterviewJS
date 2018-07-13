var myQueue = function() {
  this.front = new Stack();
  this.back = new Stack();
  this.backUp = true;
};



myQueue.prototype.add = function(val) {

  while (!this.front.isEmpty()) {
    this.back.push(this.front.pop());
  }
this.back.push (val);
}
};


myQueue.prototype.remove = function(val) {

  while (!this.back.isEmpty()) {
    this.front.push(this.back.pop());
  }
this.front.pop();
}
};
