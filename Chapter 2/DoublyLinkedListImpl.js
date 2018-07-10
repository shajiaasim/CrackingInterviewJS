

function Node (val){
  this.val=val;
  this.previous = null;
  this.next=null;
}


function DoublyLinkedList (){

this.head=null;
this._length=0;
this.tail=null;
}


DoublyLinkedList.prototype.add = function (val){

var node  = new Node (val);

var currentNode= this.head;

if (!currentNode){
this.head = node;
}

while (currentNode.next){
currentNode = currentNode.next;
}


currentNode.next = node;
currentNode.next.previous= currentNode;

return currentNode.next

}
