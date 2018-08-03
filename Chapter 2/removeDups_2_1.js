function SinglyList() {
  this._length = 0;
  this.head = null;
}

//with temp buffer
SinglyList.prototype.removeDups = function() {

  var currentNode = this.head,
    previousNode;

  //buffer -- same like unique string
  var obj = {};

  while (currentNode.next) {
    if (!obj[currentNode.val]) {
      obj[currentNode.val] = true;
    } else {
      previousNode.next = currentNode.next;
      this._length--;
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
}

//no buffer


SinglyList.prototype.removeDupsNoBuffer = function() {

  var currentNode = this.head,
    otherNode;
  while (!currentNode) {
    otherNode = currentNode.next;
    while (!otherNode) {
      if (currentNode.val == otherNode.val) {
        previousNode.next = otherNode.next.next;
      } else {
        previousNode = otherNode;
        otherNode = otherNode.next;
      }
    }
    currentNode = currentNode.nextl
  }

}
