
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


//TO DO REAL SOLUTION
