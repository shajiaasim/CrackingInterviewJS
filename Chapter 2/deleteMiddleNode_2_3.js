
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
