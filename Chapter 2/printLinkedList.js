function print(list) {

  if (list == null) return;
  console.log(list.value);
  print(list.next);

}


function reverseListRecursion(current, prev) {
  var head  = null
  if (current == null) {
    head =  current;
    current.next = prev;
    return head;
  }
  var next = current.next;
  current.next = prev;
  reverseListRecursion(next, current);
  return head;
}


function reverseListStack(node) {
  var stack = new Stack();

  while (node) {
    stack.push(node.value);
    node = node.next;
  }

  var list = new LinkedList();

  while (stack.peek()) {
    list.next(stack.pop);
    list = list.next;
  }

  return list;
}
