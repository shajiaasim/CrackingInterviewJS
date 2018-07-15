//Queue
function BFS(rootNode) {

  if (!rootNode) return;

  //Dont need to store results saying visited, need it for graph
  //var result = {};
  var q = new Queue();
  q.insert(rootNode);

  while (q.size() > 0) {

    var pointer = q.dequeue();

    // Visit only if working with current node not when adding children
    visit(pointer);
    result[pointer._val] = true;

    // Add children to Queue
    if (!pointer._left) q.enqueue(pointer._left);
    if (!pointer._right) q.enqueue(pointer._right);
  }
}

function visit(node) {
  console.log(node._val);
}
