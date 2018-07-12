function MyQueue(){
this.element = null;
}


MyQueue.prototype.add = function (val) {

if (this.element.length == 0) {
this.element = new Stack();
this.element.push(val);
}
};


MyQueue.prototype.remove = function () {
delete this.element._storage[this.element._storage.length-1];
};
