//NEEDS FIXING


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


BST.prototype.printLevelOrder = function() {

  if (this._left != null) {
    this._left.printLevelOrder();
  }
  console.log(this._val);

  if (this._right != null) {
    this._right.printLevelOrder();
  }
}




function LinkedList() {
  this.value = null;
  this.next = null;
  this.length = 0
}


LinkedList.prototype.add = function(val) {

  if (this.value == null) {
    this.value = val;
    this.length++;
  } else {
    var currentNode = this.value;


    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    var temp = new LinkedList();
    temp.add(val);
    currentNode.next = temp;
    this.length++;
  }

}


//Correct, TODO: try with linkedList though
function listOfDepths(bst) {

  var hashMap = [];

  return bfsUtil(bst, listOfLists, 1);
}


function bfsUtil(node, hashMap, level) {

  if (node == null) return;
  hashMap[level].add(node.left);
  hashMap[level].add(node.right);
  bfsUtil(node._left, hashMap, level + 1);
  bfsUtil(node._right, hashMap, level + 1);
  return hashmap;
}





//TODO:try while loop solution





// function ListOfDepths(bst) {
//
//
//   var list = new LinkedList(bst.val);
//
//   var q = new Queue();
//
//   var level = 1
//   q.enqueue(bst.val)
//
//   while (q.size() > 0) {
//
//     var pointer = q.dequeue();
//     var newLevel = true;
//     while (bst.level = level) {
//
//       if (newLevel) {
//         var list2 = new LinkedList(bst.left);
//         q.enqueue(bst.left);
//         list2.next(bst.right);
//         q.enqueue(bst.right);
//
//       } else {
//         newLevel = false;
//         list2.next(bst.left);
//         q.enqueue(bst.left);
//         list2.next(bst.right);
//         q.enqueue(bst.right);
//       }
//     }
//
//   }
//
// }


var tree = new BST(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

console.log(listOfDepths(tree));
