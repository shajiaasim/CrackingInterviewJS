function minimalBst(arr) {

  var length = arr.length;

  if (length > 0) {

    var bst = new BST(arr[length / 2]);

    bst.left = minimalBst(arr.slice(0, Math.floor(length / 2)))

    bst.right = minimalBst(arr.slice(Math.floor(length / 2), arr.length))

    return bst;
  }
}


/* TEST */
var arr1 = [1, 2, 3, 4, 5, 6];
var tree1 = minimalBst(arr1);
tree1.printLevelOrder();

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var tree2 = minimalBst(arr2);
tree2.printLevelOrder();
