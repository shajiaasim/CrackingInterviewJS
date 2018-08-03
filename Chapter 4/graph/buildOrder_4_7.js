//https://www.youtube.com/watch?v=WqV-pxNUAYA

//https://www.youtube.com/watch?v=WqV-pxNUAYA

//210. Course Schedule II (LeetCode)
// There are a total of n courses you have to take, labeled from 0 to n-1.
//
// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
//
// Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.
//
// There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.
//
// Example 1:
//
// Input: 2, [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished
//              course 0. So the correct course order is [0,1] .
// Example 2:
//
// Input: 4, [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,1,2,3] or [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both
//              courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
//              So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .
// Note:
//
// The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
// You may assume that there are no duplicate edges in the input prerequisites.




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
