function minimalBst(arr, root) {

  if (root == null) return;
  var length = arr.length;
  if (length == 0) return;

  if (length == 1) return new BST(arr[0]);
  if (length > 0) {
    var index = Math.round(length / 2);
    var bst = new BST(arr[index]);
    bst.left = minimalBst(arr.slice(0, index - 1))
    bst.right = minimalBst(arr.slice(index, arr.length))
    return bst;
  }
}


//Another way: Correct solution


function minimalBst(arr) {

  var bst = new Bst();
  bst = bstHelper(arr, 0, arr.lenth - 1);
}


bstHelper(arr, low, high) {

  if (low > high) return; //Done

  var mid = (low + high) / 2;
  var bst = new BST(arr[mid]);

  bst.left = bstHelper(arr, low, mid - 1);

  bst.right = bstHelper(arr, mid + 1, high);

  return bst;



}

/* TEST */
var arr1 = [1, 2, 3, 4, 5, 6];
var tree1 = minimalBst(arr1);
tree1.printLevelOrder();

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var tree2 = minimalBst(arr2);
tree2.printLevelOrder();
