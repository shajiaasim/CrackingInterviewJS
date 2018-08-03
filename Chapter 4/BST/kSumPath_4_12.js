//437. Path Sum III (Ltarget)
// You are given a binary tree in which each node contains an integer value.
//
// Find the number of paths that sum to a given value.
//
// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
//
// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.
//
// Example:
//
// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
//
//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1
//
// Return 3. The paths that sum to 8 are:
//
// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. -3 -> 11


function countPathsWithSum(root, target) {
  if (!root) return 0;
  //for every root initialize presum to zero
  var pathsFromRoot = countPathsWithSumFromNode(root, target, 0);
  var pathsOnLeft = countPathsWithSum(root.left, target);
  var pathsOnRight = countPathsWithSum(root.right, target);
  return pathsFromRoot + pathsOnRight + pathsOnLeft;
}

function countPathsWithSumFromNode(node, target, preSum) {
  // no path found
  if (node == null) return 0;
  //  currentSum += node.val;
  var totalPaths = 0;
  if (preSum == target) return 1;
  totalPaths += countPathsWithSumFromNode(node.left, target, preSum + node.left);
  totalPaths += countPathsWithSumFromNode(node.right, target, preSum +  node.right);
  return totalPaths;
}


//find if paths exists from root: return boolean
//112. Path Sum I (Leet Code)
// Given a binary tree and a sum, determine if the tree has a root-to-leaf** path such that adding up all the values along the path equals the given sum.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Given the below binary tree and sum = 22,
//
//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

function kSumPathRoot(root, sum) {

  if (root == null) return false;
  //should be the last element
  if (root.left == null && root.right == null && root == sum) return true;
  else {
    return kSumPathRoot(root.left, sum - root) || kSumPathRoot(root.right, sum - root)
  }

}

//113. Path Sum II
// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Given the below binary tree and sum = 22,
//
//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:
//
// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

function pathSum2(root, sum) {
  var res = [];
  var stack = new Stack();
  dfsUtil(root, sum - root, stack, res);
  return res;
}

functionDfsUtil(root, sum, stack, res) {
  if (root == null) return;
  stack.push(root);
  if (sum == 0 && root.left == null && root.right == null) {
    res.push(stack);
    //remove it if you find it
    stack.pop();
    return;
  } else if (sum > 0) {
    return;
  } else {
   functionDfsUtil(root.left, sum - root.left, stack, res);
   functionDfsUtil(root.right, sum - root.right, stack, res);
  }
  //remove it if you dont
  stack.pop();
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

var BinaryTree = function(value) {
  this.val = value;
  this.left = null;
  this.right = null;
};

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
