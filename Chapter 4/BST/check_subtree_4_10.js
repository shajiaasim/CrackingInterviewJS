function checkSubtree(T1, T2) {
  if (T1 == null) return false; //subtree notfound
  if (T1 == T2) return dfsCheck(T1, T2); //subtree found
  else { // check children, either of them have a sub tree we are good.
    return checkSubTree(T1.left, T2) ||
      checkSubTree(T1.right, T2)
  }
}


dfsCheck(T1, T2) {
  //sub tree matches all the way
  if (T1 == null && T2 == null) return true;
  if (T1 != T2) return false;

  return dfsCheck(T1.left, T2.left) &&
    dfsCheck(T1.right, T2.right);
}
