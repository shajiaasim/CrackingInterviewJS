// Two stack solution: need to check
function sortStack(stack) {

  var tempStack = new Stack();

  var sortedStack = new Stack();

  while (!stack.isEmpty()) {
    if (sortedStack.isEmpty() || stack.peek() <= sortedStack.peek()) sortedStack.push(stack.pop())

    else {

      while (!sortedStack.isEmpty()) {
        tempStack.push(sortedStack.pop());
      }

      sortedStack.push(stack.pop());

      while (!tempStack.isEmpty()) {
        sortedStack.push(tempStack.pop());
      }

    }

  }


  //Single stack solution

  function sortStack(stack) {

     var tempStack = new Stack();

     var temp;

     while (!stack.isEmpty()) {
       if (tempStack.isEmpty() || stack.peek() <= tempStack.peek()) tempStack.push(stack.pop())

       else {

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
