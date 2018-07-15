function LinkedList(val) {
  this.value = val;
  this.next = null;
}

LinkedList.prototype.add = function(node) {

  var newNode = new LinkedList(node.value);
  var currentNode = this;

  if (this.value == null) this.value = node.value;
  else {

    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;


  }


}


function isPalindrome(head) {

  var obj = [];
  var originalList = head;


  var reversedList = new LinkedList(null);

  while (originalList != null) {
    obj.push(originalList);
    originalList = originalList.next;
  }

  for (var i = obj.length - 1; i >= 0; i--) {
    reversedList.add(obj[i]);
  }



  while (reversedList != null) {

    if (head.value != reversedList.value) return false;
    else {
      head = head.next;
      reversedList = reversedList.next;
    }
  }

  return true;

}


//TO DO Recurse


var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('c');
var f = new LinkedList('b');
var g = new LinkedList('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(isPalindrome(a));
