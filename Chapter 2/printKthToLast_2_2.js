function SinglyList() {
  this._length = 0;
  this.head = null;
}

//bad way
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

//recurse
SinglyList.prototype.printKthToLast2 = function(head, k) {

  var currentNode = head;

  if (k == 1) {
    console.log(currentNode.val);
    this.printKthTolast2(currentNode.next, k);
  } else {
    this.printKthTolast2(currentNode.next, k - 1);
  }



}
