//Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
//
// Basically, the deletion can be divided into two stages:
//
// Search for a node to remove.
// If the node is found, delete the node.
// Note: Time complexity should be O(height of tree).
//
// Example:
//
// root = [5,3,6,2,4,null,7]
// key = 3
//
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7
//
// Given key to delete is 3. So we find the node with value 3 and delete it.
//
// One valid answer is [5,4,6,2,null,null,7], shown in the following BST.
//
//     5
//    / \
//   4   6
//  /     \
// 2       7
//
// Another valid answer is [5,2,6,null,4,null,7].
//
//     5
//    / \
//   2   6
//    \   \
//     4   7


//Steps

// 1. Recursively find the node that has the same value as the key, while setting the left/right nodes equal to the returned subtree
// 2. Once the node is found, have to handle the below 4 cases
// 3. node doesn't have left or right - return null
// 4. node only has left subtree- return the left subtree
// 5. node only has right subtree- return the right subtree
// 6. node has both left and right - find the minimum value in the right subtree, set that value to the currently found node, then recursively delete the minimum value in the right subtree

function deleteNode(root, node) {

  if (root == null) return null;

  if (node > root.value) root.right = deleteNode(root.right, node);
  else if (node < root.value) root.left =  deleteNode(root.left, node);

 else // found
  {
      // if its the last node , delete it
      if (root.left == null && root.right == null) {
        delete root;
        root = null;
        return root;
      }
      //One child
      else if (root.left == null) {
         root = root.right;
         return root;
      }
      //One child
      else if (root.right == null) {
       root = root.left;
        return root;
      }
      // many children
      else {
        var node2 = maxLeft(root.left);
        //replace with max left value
        root.value = node2.value;
        //delete  max Left
        root.left = deleteNode(root.left,node2)
      }
    }
  }
}
}

function maxLeft(root) {

  while (root.right) {
    root = root.right;
  }

  return root;

}
