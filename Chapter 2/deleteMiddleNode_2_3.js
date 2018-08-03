// Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
// the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
// that node.

// EXAMPLE
// Input: the node c from the linked list a - >b- >c - >d - >e- >f
// Result: nothing is returned, but the new linked list looks like a - >b- >d - >e- >f


function LinkedList(val){
this.value=val;
this.next=null;
}

function deleteMidNode(nodeToDelete){

var nextNode = nodeToDelete.next;
nodeToDelete.value = nextNode.value;
nodeToDelete.next = nextNode.next;
//nodeToDelete.next = nodeToDelete.next.next;

}


var printList = function(head) {
  while(head !== null) {
    console.log(head.value);
    head = head.next;
  }
  console.log('done printing');
};

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

printList(a);
deleteMidNode(b);
printList(a);
