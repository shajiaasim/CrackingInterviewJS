var BinaryTree = function(value) {
  this.val = value;
  this.left = null;
  this.right = null;
};




function countPathsWithSum(root, k) {
  if (!root) return 0;

  var pathsFromRoot = countPathsWithSumFromNode(root, k, 0);
  var pathsOnLeft = countPathsWithSum(root.left, k);

  var pathsOnRight = countPathsWithSum(root.right, k);


  return pathsFromRoot + pathsOnRight + pathsOnLeft;

}

function countPathsWithSumFromNode(node, k, currentSum) {

  if (node == null) return 0;
  currentSum += node.val;

  var totalPaths = 0;

  if (currentSum == k) totalPaths++;

  totalPaths += countPathsWithSumFromNode(node.left, k, currentSum);
  totalPaths += countPathsWithSumFromNode(node.right, k, currentSum);
  return totalPaths;
}


/* TEST */
var a = new BinaryTree(10);
var b = new BinaryTree(5);
var c = new BinaryTree(-3);
var d = new BinaryTree(3);
var e = new BinaryTree(2);
var f = new BinaryTree(11);
var g = new BinaryTree(3);
var h = new BinaryTree(-2);
var i = new BinaryTree(1);

//a=10
a.left = b;
a.right = c;

//b=5
b.left = d;
b.right = e;

//d=3
d.left = g;
d.right = h;

//e=2
e.right = i;

//c=-3
c.right = f;




console.log(countPathsWithSum(a, 6), 2);
