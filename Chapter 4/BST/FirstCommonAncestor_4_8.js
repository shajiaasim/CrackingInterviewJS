 function dfsUtil (root, node1, node2){

   if (root == null) return;
   //Recurse till you find either value
   if (root._val == node1 || node2) return root._val;


   var val1 = dfsUtil(root.left, node1, node2);
   var val2 = dfsUtil(root.right, node1, node2);

   // if both values are found in children return root
   if (val1 && val2) return root;

   if (val1==null && val2==null) return null;

   return val1!=null ? val1:val2;
 }
