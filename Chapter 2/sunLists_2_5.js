function LinkedList(val) {
  this.value = val;
  this.next = null;
}

LinkedList.prototype.add = function(val) {
  var node = new LinkedList(val);
  var currentNode = this;

  if (!this.value) this.value = val;
  else {
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }

}


function sumList(list1, list2) {

  var list = new LinkedList(null);
  var isCarry = false;
  var carry = 0;

  while (list1 != null && list2 != null) {
    var sum = list1.value + list2.value;
    if (isCarry) sum++;


    if (sum > 10) {
      carry = sum - 10;
      list.add(carry);
      isCarry = true;
    } else {
      list.add(sum);
      isCarry = false;
    }

    list1 = list1.next;
    list2 = list2.next;

  }
  return list;
}

var printList = function(head) {
  while (head !== null) {
    console.log(head.value);
    head = head.next;
  }
  console.log('done printing');
};

/* TEST */

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
// Output: 2 -> 1 -> 9. the answer refers to 912

var a = new LinkedList(7);
var b = new LinkedList(1);
var c = new LinkedList(6);

a.next = b;
b.next = c;

var d = new LinkedList(5);
var e = new LinkedList(9);
var f = new LinkedList(2);

d.next = e;
e.next = f;

var newHead = sumList(a, d);

printList(newHead);
