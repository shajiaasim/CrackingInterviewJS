// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]




function newLine(root) {
  var q = new Queue();
  var currLevel = 1;
  q.enqueue(root);
  var temp = [];
  while (!q.isEmpty()) {
    var currNode = q.dequeue();
    var currNodeLevel = currNode.level;
    if (currLevel > currNodeLevel) {
      temp.print();
      temp.clear();
      console.log('/n');
      currLevel++;
    }
    temp.push(currNode);
    if (currNode.left) q.enqueue(currNode.left);
    if (currNode.right) q.enqueue(currNode.right);

  }



}
