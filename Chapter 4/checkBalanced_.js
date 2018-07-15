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


function checkBalanced(node) {

  if (node == null) return true;

  var leftHeight = getHeight(node.left);
  var rightHeight = getHeight(node.right);

  return (Math.abs(leftHeight-rightHeight) >1) && checkBalanced(node.left) && checkBalanced(node.right)

}

function getHeight(node) {

if (node == null) return 0;

return 1+ Math.max(node.left, node.right);

}


/* TEST */

var b1 = new BST(1);
b1.insert(2);
b1.insert(3);
b1.insert(4);
console.log(checkBalanced(b1), false);

var b2 = new BST(4);
b2.insert(2);
b2.insert(6);
b2.insert(1);
b2.insert(3);
b2.insert(5);
b2.insert(7);
console.log(checkBalanced(b2), true);
