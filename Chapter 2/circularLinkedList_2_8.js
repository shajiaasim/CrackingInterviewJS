// 2.8 Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
// beginning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so
// as to make a loop in the linked list.
// EXAMPLE
// Input: A -> B -> C - > D -> E -> C [the same C as earlier)
// Output: C


function LinkedList(value) {
  this.value = value;
  this.next = null;
}

//TO DO: implement runner approach
LinkedList.prototype.loopDetection = function() {



}


LinkedListNode FindBeginning(LinkedListNode head) {
  LinkedListNode slow head;
  LinkedListNode fast = head;

  // * Find meeting point. This will be LOOP_SIZE - k steps into the linked list. */
  while (fast != null && fast.next != nUll) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      1 / Collision
      break;
    }
  }

  //1* Error check - no meeting point, and therefore no loop */
  if (fast == null I I fast.next == null) {
    return null;
  }

  // Move slow to Head. Keep fast at Meeting Point. Each are k steps from the
  //  Loop Start. If they move at the same pace, they must meet at Loop Start.
  slow = head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }

  / * Both now point to the start of the loop. */
  return fast;
}

/* TEST */
// A -> B -> C -> D -> E -> C

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
f.next = c;

console.log(a.loopDetection(), true);

var A = new LinkedList('A');
var B = new LinkedList('B');
var C = new LinkedList('C');
var D = new LinkedList('D');
var E = new LinkedList('E');
var F = new LinkedList('F');

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;

console.log(A.loopDetection(), false);
