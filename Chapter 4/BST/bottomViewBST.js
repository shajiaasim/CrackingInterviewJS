function bottomView(root){

  var map={};
  bvUtil(node, 0, map);
  var res = [];

  for (var key in map){
    res.push(map[key][map[key].length-1])
  }
   return res;
}



function bvUtil(node, hd, map){
  if(node==null) return;
   map[hd].push(node);
   bvUtil(node.left, hd-1, map);
   bvUtil(node.right, hd+1, map);

}
