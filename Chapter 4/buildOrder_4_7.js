//https://www.youtube.com/watch?v=WqV-pxNUAYA


function buildOrder(depList) {

  var builtDependencies = [];

  for (var i = 0; i < depList.length; i++) {
    if (depList[i].length == 0) builtDependencies.push(i);
  }

  if (builtDependencies.length == 0) return false;
  else {


    while (builtDependencies.length < depList.length)

      if (!builtDependencies.includes(i)){
        if (isDepBuilt(depList[i], builtDependencies) builtDependencies.push(i);
      }
    }
  }

}

function isDepBuilt(depListFori, builtDependencies){

var isBuilt= false;

  for (var i = 0; i < depListFori.length; i++) {
      isBuilt = builtDependencies.includes(depListFori[i]);
  }
return isBuilt;
}
