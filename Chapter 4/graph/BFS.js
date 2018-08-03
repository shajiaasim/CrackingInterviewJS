//JavaScript-C24.2.0 (SpiderMonkey)

//Shortest path between nodes
//Looks at all the nearest nodes first
//As opposed to BST
function Queue() {
  this._storage = {};
  this._oldestIndex = 1;
  this._newestIndex = 1;
}


// Understand why this is being done
Queue.prototype.size = function() {
  return this._newestIndex - this._oldestIndex;
}


Queue.prototype.enqueue = function(val) {
  this._storage[this._newestIndex] = val;
  this._newestIndex++;
};


Queue.prototype.dequeue = function() {

  var oldestIndex = this._oldestIndex;
  if (this.size()) {
    var deQ = this._storage[oldestIndex];
    delete this._storage[oldestIndex];
    this._oldestIndex++;
    return deQ;
  }
};


function Graph() {
  this.adjList = {};
}

Graph.prototype.addVertex = function(vertex) {
  this.adjList[vertex] = [];
};

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.adjList[vertex1].push(vertex2);
}


Graph.prototype.bfs = function() {

  var q = new Queue();

  var nodes = Object.keys(this.adjList);
  var currVertex = nodes[0];


  var nodesVisited = {};
  nodesVisited[nodes[0]] = true;
  console.log(nodes[0]);

  q.enqueue(nodes[0]);


  while (q.size() > 0) {
      currVertex = q.dequeue();

    if (!nodesVisited[currVertex]) {
      nodesVisited[currVertex] = true;
      console.log(currVertex);
    }


    var edgeList = this.adjList[currVertex];

    for (var j = 0; j < edgeList.length; j++) {

      if (!nodesVisited[edgeList[j]]) {

        q.enqueue(edgeList[j]);
        nodesVisited[edgeList[j]] = true;
        console.log(edgeList[j]);
      }
    }


  }
};



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


graph.bfs();
