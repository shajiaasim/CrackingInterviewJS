function newLine(root) {


  var q = new Queue();
  var currLevel = 1;
  q.enqueue(root);
  var temp = [];


  while(!q.isEmpty()){
    var currNode = q.dequeue();
    var currNodeLevel = currNode.level;
    if (currLevel>currNodeLevel)
    {
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
