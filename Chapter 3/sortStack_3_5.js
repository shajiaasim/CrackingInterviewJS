// 3.5 Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use
// an additional temporary stack, but you may not copy the elements into any other data structure
// (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty


  //Single stack solution

  function sortStack(stack) {

     var tempStack = new Stack();

     var temp;

     // empty the stack into temp stack in sorted order
     while (!stack.isEmpty()) {
       // if stack is less than temp, push directly (already sorted)
       if (tempStack.isEmpty() || stack.peek() <= tempStack.peek()) tempStack.push(stack.pop())

       else {

         // hold in temp variable and push everything from temp less than this value.
         temp = stack.pop();

         while (tempStack.peek() < temp) {
           stack.push(tempStack.pop());
         }

         tempStack.push(temp);
       }

       }

       return tempStack;
 }


      /* TEST */
      var s = new Stack();
      s.push(99);
      s.push(4);
      s.push(1);
      s.push(6);
      s.push(8);
      s.push(10);
      s.push(22);
      s.push(3);
      s.push(72);

      var sortS = sortStack(s);

      while (!sortS.isEmpty()) {
        console.log(sortS.pop());
      }
