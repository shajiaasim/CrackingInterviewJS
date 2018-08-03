// Given a binary search tree and a node in it, find the in-order successor of that node in the BST.
//
// Note: If the given node has no in-order successor in the tree, return null.
//
// Example 1:
//
// Input: root = [2,1,3], p = 1
//
//   2
//  / \
// 1   3
//
// Output: 2
// Example 2:
//
// Input: root = [5,3,6,2,4,null,null,1], p = 4
//
//       5
//      / \
//     3   6
//    / \
//   2   4
//  /
// 1
//
// Output: 5



function inOrderSucessor(root, k) {

  var curr = find(root, k);
  // if curr has a right node, successor is on the right(min)
  if (curr == null) return null;
  if (curr.right) {
    return findMin(curr.right);
  } else { //no right subtreee
    //find deepest node that is grater than k (curr)
    var successor = null;
    var ancestor = root;

    while (ancestor != curr) {
      if (ancestor < curr) ancestor = ancestor.right;
      else {
        //found a value greater than curr (still keep looking for values
        //greater than curr, but less than current successor)
        successor = ancestor;
        ancestor = ancestor.left;
      }
    }
    return successor;
  }
}


function find(root, k) {
  if (root == null || k == null) return null;
  if (root == k) return root;
  else if (root < k) findMin(root.right);
  else if (root > k) findMin(root.left);
}


function findMin(root) {
  if (root.left) findMin(root.left);
  else return root;
}



// My solution- maybe wrong
function getSuccessor(rootNode, getSuccessorNode, rootNodeFound) {
  if (!rootNode) return;
  getSuccessor(rootNode._left, getSuccessorNode, rootNodeFound);
  if (rootNode._val == getSuccessorNode._val) {
    if (rootNode._right) getSuccessor(rootNode._right, getSuccessorNode, true)
  } else if (rootNodeFound) {
    console.log(rootNode._val);
  }
  getSuccessor(rootNode._right, getSuccessorNode, rootNodeFound);
}
