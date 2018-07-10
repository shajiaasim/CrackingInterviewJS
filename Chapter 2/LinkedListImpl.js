

function Node (val){
  this.val=val;
  this.next=null;
}


function SinglyList(){
  this._length=0;
  this.head=null;
}


SinglyList.prototype.add = function(val) {

var node = new Node (val);

var currentNode = this.head;

if (!currentNode) {
  this.head=node;
  this._length++;
}
else{

while (currentNode.next){
  currentNode = currentNode.next;
}

currentNode.next=node;
  this._length++;

  return node;

}
}


SinglyList.prototype.searchNodeAt = function(position){

var currentNode = this.head, i=1,length=this._length,
  message = {failure: 'Failure: non-existent node in this list.'};

if (position>length || position<1 || length=0) {
        throw new Error(message.failure);
    }

while (i<position){
  currentNode= currentNode.next;
  i++;
}


return currentNode;

}


SinglyList.prototype.remove = function (position){

  var currentNode = this.head, i=1,length=this._length,beforeNode, nodeToDelete, deletedNode,
    message = {failure: 'Failure: non-existent node in this list.'};


    if (position>length || position<1 || length=0) {
            throw new Error(message.failure);
        }

        if (position ===1) {

          this.head == currentNode.next;
          deletedNode = currentNode;
          currentNode=null;
          this._length--;

          return deletedNode;
        }

        while (i<position){
          beforeNode= currentNode;
          nodeToDelete= beforeNode.next;
          i++;
        }

        beforeNode.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        nodeToDelete= null;
        this._length--;

        return deletedNode;

}
