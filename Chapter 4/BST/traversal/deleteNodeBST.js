function deleteNode(root, node) {

  if (root == null) return null;

  if (node > root.value)  deleteNode(root.right, node);
  else if (node < root.value) deleteNode(root.left, node);

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
