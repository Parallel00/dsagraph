class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
	  this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
	  for (let vert of vertexArray){
		  this.addVertex(vert);
	  }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
	  v1.adjacent.add(v2);
	  v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
	  v1.adjacent.delete(v2);
	  v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
	  for (let nod of this.nodes){
		  if (node.adjacent.has(vertex)){
			  node.adjacent.delete(vertex);
		  }
	  }
	  this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
	  const revd = new Set();
	  const res = [];
	  
	  function trav(vert){
		  if (!vert){
			  return null;
		  }
		  revd.add(vert);
		  res.push(vert.value);
		  vert.adjacent.forEach(neighbor => {
			  if (!revd.had(neighbor)){
				  return trav(neighbor);
			  }
		  });
	  }
	  
	  trav(start);
	  return res;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
	  const queue = [start];
	  const res = [];
	  const revd = new Set();
	  let currVertex;
	  
	  revd.add(start);
	  while (queue.length){
		  currVertex = queue.shift();
		  res.push(currVertex.value);
		  
		  currVertex.adjacent.forEach(neighbor =>{
			  if (!revd.has(neighbor)){
				  revd.add(neighbor);
				  queue.push(neighbor);
			  }
		  });
	  }
	  return res;
  }
  
}

module.exports = {Graph, Node}