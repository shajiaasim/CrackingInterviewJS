function print(arr) {

  var t = 0, //top most row
    b = m - 1, //bottom most
    l = 0, //left most
    r = n - 1; //right most
  var dir = 0;
  while (t <= b && l <= r) {
    if (dir == 0) { //going right
      for (var i = l; i < r; i++) console.log(arr[t][i]);
      t++;
      dir = 1;
    } else if (dir == 1) { //going down
      for (var i = t; i < b; i++) console.log(arr[i][r]);
      r--;
      dir = 2;
    } else if (dir == 2) { //going left
      for (var i = r; i > l; i--) console.log(arr[b][i]);
      b--;
      dir = 3;
    } else if (dir == 3) { //going up
      for (var i = b; i > t; i--) console.log(arr[i][l]);
      l++;
      dir = 0;
    }
  }
}
