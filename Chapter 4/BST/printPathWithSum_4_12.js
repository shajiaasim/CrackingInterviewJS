function printPathWithSum(root, k) {

  if (root = null) return false;

  var stack = new Stack();
  stack.push(root);
  stack = inOrderTraversal(root, k, root._val, stack);

}

function inOrderTraversal(root, k, sum, stack) {

  if (root == null) return false;

  if (root + sum == k) {
    stack.push(root);
    return root;
  } else if (root + sum > k) return false;
  else if (root + sum < k) {
    stack.push(root);
    if (inOrderTraversal(root.left, k, root._left+sum, stack) || inOrderTraversal(root.right, k,root.right+ sum, stack)) return stack;
  }


}
