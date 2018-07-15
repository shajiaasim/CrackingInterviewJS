function LinkedList(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.size = function() {
  var i = 0;
  var head = this;
  if (head == null) return 0;
  else {

    while (head.value != null) {
      i++;
      head = head.next;
    }
  }

  return i;

}

LinkedList.prototype.getKthNode = function(k) {

  var head = this;
  var i = 1;
  while (i < k) {
    head = head.next;
    i++
  }
  return head;
}




// If same length
function intersection(head1, head2) {

  while (head1 != null && head2 != null) {

    if (head1 === head2) return head1;
    else {
      head1 = head1.next;
      head2 = head2.next;
    }
  }
}


//different lengths


function intersectionDiffLength(head1, head2) {

  var shorterNode = head1.size() < head2.size() ? head1 : head2;
  var longerNode = head1.size() > head2.size() ? head1 : head2;

  var nodesToSkip = longerNode.size() - shorterNode.size();

  return intersection(shorterNode, longerNode.getKthNode(nodesToSkip));


}


/* TEST */

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');
var g = new LinkedList('g');
var h = new LinkedList('h');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

var a1 = new LinkedList('a1');
var b1 = new LinkedList('b1');
var c1 = new LinkedList('c1');

//for longer nodes
var y1 = new LinkedList('y1');
var z1 = new LinkedList('z1');

y1.next = z1;
z1.next = a1;
a1.next = b1;
b1.next = c1;
c1.next = d;

var intersectNode = intersection(a, a1);

console.log(intersectNode.value);
