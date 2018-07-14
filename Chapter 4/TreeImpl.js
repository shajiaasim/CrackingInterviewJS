function BST(val) {
  this._val = val;
  this._left = null;
  this._right = null;
}


BST.prototype.insert = function(val) {

  if (val < this._val) {
    if (this._left == null) this._left = new Node(val);
    else {
      this._left.insert(val);
    }
  } else {

    if (this._right == null) this._right = new Node(val);
    else {
      this._right.insert(val);
    }
  }
}


BST.prototype.contains = function(val) {

  if (this._val == val) return this;
  else {
    if (val < this._val && this._left != null) return this._left.contains(val);
    else if (this._right != null) {
      return this._right.contains(val);
    }
  }
  return null;
};


BST.prototype.printInOrder = function() {

  if (this._left != null) {
    this._left.printInOrder();
  }
  console.log(this.val);

  if (this._right != null) {
    this._right.printInOrder();
  }


}
