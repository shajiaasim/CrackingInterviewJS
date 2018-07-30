function sortedMerge(a, b) {


  var bIndex = b.length - 1;
  var aIndex = a.length - 1;
  var aMergedIndex = a.length + b.length - 1;


  while (bIndex >= 0) {
    if (a[aIndex] > b[bIndex]) {
      a[aMergedIndex] = a[aIndex];
      aIndex--;
    } else {
      a[aMergedIndex] = b[bIndex];
      bIndex--;
    }
    aMergedIndex--;
  }
  return a;
}
