function BST(val) {
  this._val = val;
  this._left = null;
  this._right = null;
}


BST.prototype.insert = function(val) {

  if (val < this._val) {
    if (this._left == null) this._left = new BST(val);
    else {
      this._left.insert(val);
    }
  } else {

    if (this._right == null) this._right = new BST(val);
    else {
      this._right.insert(val);
    }
  }
}

function validateBST(node) {
  return validateBSTUtil(node, -100000, 100000);
}

  function validateBSTUtil(node, min, max) {

  if (node == null) return true;



    if (node._val > max) return false;
    if (node._val < min ) return false;

  return validateBSTUtil(node._left, min, node._val) && validateBSTUtil(node._right, node._val, max)
}


/* TESTS */

var bt1a = new BST(5);
var bt1b = new BST(4);
var bt1c = new BST(6);
var bt1d = new BST(1);
var bt1e = new BST(100);

bt1a.left = bt1b;
bt1a.right = bt1c;
bt1b.left = bt1d;
bt1b.right = bt1e;

console.log(validateBST(bt1a), false);

var bt2a = new BST(5);
var bt2b = new BST(3);
var bt2c = new BST(6);
var bt2d = new BST(1);
var bt2e = new BST(4);

bt2a.left = bt2b;
bt2a.right = bt2c;
bt2b.left = bt2d;
bt2b.right = bt2e;

console.log(validateBST(bt2a), true);
