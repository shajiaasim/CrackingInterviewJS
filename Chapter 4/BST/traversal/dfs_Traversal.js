


function inOrderTraversal(node) {


  if (!node) return;

  inOrderTraversal(node.left);

  console.log(node.val);

  inOrderTraversal(node.right);

}
