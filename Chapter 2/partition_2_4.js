// 86. Partition List(Leet code)
//
// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
//
// You should preserve the original relative order of the nodes in each of the two partitions.
//
// Example:
//
// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

// the basic idea is to maintain two queues, the first one stores all nodes with val less than x ,
//  and the second queue stores all the rest nodes. Then concat these two queues. Remember
//  to set the tail of second queue a null next, or u will get TLE.

function(node, partition) {
  // dummy heads
  var smallHead = new LinkedList();
  var largeHead = new LinkedList();
  //tails
  var smallTail = smallHead;
  var largetail = largeHead;
  while (node) {
    if (node <= partition) {
      smallTail.next = node.val;
      smallTail = smallTail.next;
    } else {
      largetail.next = node.val;
      largetail = largetail.next;
    }
    node = node.next;
  }
  //avoid cycle
  largetail.next = null;

  //skipping dummy head of largehead
  smallTail.next = largeHead.next;

  //new head
  return smallHead.next;

}
