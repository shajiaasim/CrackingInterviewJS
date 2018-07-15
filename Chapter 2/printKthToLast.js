function SinglyList() {
  this._length = 0;
  this.head = null;
}

//with temp buffer
SinglyList.prototype.printKthToLast = function(k) {
  var currentNode = this.head,
    i = 1;

  if (k == 1) {
    while (currentNode.next) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  } else {
    while (i < k) {
      currentNode = currentNode.next;
      i++;
    }

    while (currentNode.next) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }


  }




}
