//https://www.youtube.com/watch?v=WqV-pxNUAYA


function buildOrder(depList) {

  var builtDependencies = [];

  for (var i = 0; i < depList.length; i++) {
    if (depList[i].length == 0) builtDependencies.push(i);
  }

  if (builtDependencies.length == 0) return false;
  else {
    while (builtDependencies.length < depList.length)

      if (!builtDependencies.includes(i)) {
        if (isDepBuilt(depList[i], builtDependencies) builtDependencies.push(i);
        }
      }
  }


  function isDepBuilt(depListFori, builtDependencies) {

    var isBuilt = false;

    for (var i = 0; i < depListFori.length; i++) {
      isBuilt = builtDependencies.includes(depListFori[i]);
    }
    return isBuilt;
  }

// top sort: needs checking
  function topSort(graph) {
    var nodes = Object.getKeys(graph.adjList);
    ver stack = new Stack();
    var nodesVisited = [];
    for (var i = 0; i < nodes.length; i++) {
      var currentVertex = nodes[i];
      if (!nodesVisited.includes(currentVertex)) {
        topSortUtil(graph.adjList, currentVertex, stack, nodesVisited);
      }
    }

    while (stack._size>0){
      console.log(stack.pop());
    }

  }

  function topSortUtil(adjList, currentVertex, stack, nodesVisited) {
    nodesVisited.push(currentVertex);
    var edges = adjList[currentVertex];
    for (var i =0; i< edges.length;i++){
         if (!nodesVisited.includes(edges[i])) {
            topSortUtil(adjList, edges[i], stack, nodesVisited);
         }
    }
    //push when nowhere else to go  i.e no more dependencies i.e
    stack.push(currentVertex);
  }
