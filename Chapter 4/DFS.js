function Graph() {
  this.adjList = {};
}

Graph.prototype.addVertex = function(vertex) {
  this.adjList[vertex] = [];
};

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.adjList[vertex1].push(vertex2);
}


Graph.prototype.dfs = function() {


  var nodes = Object.keys(this.adjList);

  var nodesVisited = {};

  for (var i = 0; i < nodes.length; i++) {
    var currentNode = nodes[i];
    this.dfsUtil(currentNode, nodesVisited)

  }
}

Graph.prototype.dfsUtil = function(currentNode, nodesVisited) {

  if(!nodesVisited[currentNode]) {
    nodesVisited[currentNode] = true;
    console.log(currentNode);
    var edges = this.adjList[currentNode];
    for (var j = 0; j < edges.length; j++) {
      this.dfsUtil(edges[j], nodesVisited);
    }
  }
}



//Test

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')

graph.addEdge('A', 'B')
graph.addEdge('D', 'E')
graph.addEdge('C', 'E')
graph.addEdge('A', 'D')
graph.addEdge('A', 'C')
graph.addEdge('E', 'B')
graph.addEdge('D', 'B')


graph.dfs();
