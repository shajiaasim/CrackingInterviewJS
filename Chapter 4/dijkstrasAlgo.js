function shortestPath(graph, source, target) {

  var nodes = graph.nodes;

  var edgeList = graph.edgeList;

  var minHeap = createHeap(graph, source);

  var path = [];

  var nodesVisited = {};

  dikstraUtil(nodes[0], edgeList, minHeap, path, nodesVisited)


}


dikstraUtil(node, edgeList, minHeap, path, nodesVisited) {

  nodesVisited[node] = true;
  var edges = edgeList[node];
  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    var edgeName = edge.name;
    if (!nodesVisited[edgeName]) {
      var edgeWeight = edge.weight;
      if (edgeWeight < minHeap.get(edgeName)) {
        updateHeap();
        updatePath();
      }
    }
  }

  if (minHeap!=null) dikstraUtil(minHeap.getMin(), edgeList, path, nodesVisited);

}
