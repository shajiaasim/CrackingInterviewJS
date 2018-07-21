//https://www.youtube.com/watch?v=WqV-pxNUAYA

// Brute Force
// function buildOrder(depList) {
//
//   var builtDependencies = [];
//
//   for (var i = 0; i < depList.length; i++) {
//     if (depList[i].length == 0) builtDependencies.push(i);
//   }
//
//   if (builtDependencies.length == 0) return false;
//   else {
//
//
//     while (builtDependencies.length < depList.length)
//
//       if (!builtDependencies.includes(i)) {
//         if (isDepBuilt(depList[i], builtDependencies) builtDependencies.push(i);
//         }
//       }
//   }
//
// }
//
// function isDepBuilt(depListFori, builtDependencies) {
//
//   var isBuilt = false;
//
//   for (var i = 0; i < depListFori.length; i++) {
//     isBuilt = builtDependencies.includes(depListFori[i]);
//   }
//   return isBuilt;
// }




Array.prototype.includes = function(element) {
  return this.indexOf(element) > -1;
};

//Top Sort

function topSort(projects, dependencies) {

  var stack = new Stack();
  var nodesVisited = [];
  for (var i = 0; i < projects.length; i++) {
    dfsUtil(dependencies, i, stack, nodesVisited);
  }

  console.log(stack);
}


function dfsUtil(graph, vertex, stack, nodesVisited) {

  if (graph[vertex].length == 0) stack.push(vertex);
  var edges = graph[vertex];
  for (var i = 0; i < edges.length; i++) {

    if (nodesVisited.includes(edges[i])) continue;
    else {
      nodesVisited.push(edges[i]);
      dfsUtil(graph, i, stack, nodesVisited);
    }
    stack.push(vertex);
  }


}


function Stack() {    
  this._size = 0;    
  this._storage = {};
} 
Stack.prototype.push = function(data) {    
  var size = ++this._size;    
  this._storage[size] = data;
}; 
Stack.prototype.pop = function() {    
  var size = this._size,
            deletedData;     
  if (size) {        
    deletedData = this._storage[size];         
    delete this._storage[size];        
    this._size--;         
    return deletedData;    
  }
};



//https://www.youtube.com/watch?v=zaBhtODEL0w&t=588s

function Graph() {
  this.adjList = {};
}

Graph.prototype.addVertex = function(vertex) {
  this.adjList[vertex] = [];
};

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.adjList[vertex1].push(vertex2);
}


/* TEST */
var projects = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencies = [
  ['a', 'd'],
  ['f', 'b'],
  ['b', 'd'],
  ['f', 'a'],
  ['d', 'c']
];

var graph = new Graph();
graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');
graph.addVertex('d');
graph.addVertex('e');
graph.addVertex('f');


graph.addEdge('a', 'd');
graph.addEdge('f', 'b');
graph.addEdge('b', 'd');
graph.addEdge('f', 'a');
graph.addEdge('d', 'c');

console.log(topSort(projects, dependencies));
