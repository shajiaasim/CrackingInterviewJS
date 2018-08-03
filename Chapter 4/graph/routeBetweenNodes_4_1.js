//https://www.youtube.com/watch?v=zaBhtODEL0w&t=588s
// 4.1 Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a
// route between two nodes.



//dfs (recursion)
Graph.prototype.routeBetweenNodes = function(vertex1, vertex2) {
  var nodesVisited = {};
  return this.dfsSearch(vertex1, vertex2, nodesVisited);
};


Graph.prototype.dfsSearch = function(source, destination, nodesVisited) {

  if (source == destination) return true;

  nodesVisited[source] = true;
  var children = this.adjList[source];

  for (var i = 0; i < children.length; i++) {
    if (!nodesVisited[children[i]]) {
      if (this.dfsSearch(children[i], destination, nodesVisited)) return true;
    }
  }

  return false;
};


//bfs (Queue)
Graph.prototype.routeBetweenNodes2 = function(source, destination) {

  var q = new Queue();

  q.enqueue(source);
  var nodesVisited = {};
  nodesVisited[source] = true;
  var pointer = null

  while (q.size() > 0) {

    pointer = q.dequeue();
    nodesVisited[pointer] = true;
    var children = this.adjList[pointer];
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (!nodesVisited[child]){
      q.enqueue(child);

      if (child == destination) return true;
    }
    }
  }

  return false;

};


// 
// function Graph() {
//   this.adjList = {};
// }
//
// Graph.prototype.addVertex = function(vertex) {
//   this.adjList[vertex] = [];
// };
//
// Graph.prototype.addEdge = function(vertex1, vertex2) {
//   this.adjList[vertex1].push(vertex2);
// }


//Test

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('D', 'E')
graph.addEdge('C', 'E')
graph.addEdge('A', 'D')
graph.addEdge('A', 'C')
graph.addEdge('E', 'F')
graph.addEdge('D', 'B')


console.log(graph.routeBetweenNodes2('A', 'F'))
