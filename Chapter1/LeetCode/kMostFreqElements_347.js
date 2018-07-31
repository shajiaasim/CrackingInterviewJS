function topK(arr, k) {
  var map = {};
//  var bucket = Array(arr.length - 1).fill([]);

  var results = [];

  //create a map of number(key) and frequency(value) pairs
 const bucket = Array(arr.length + 1).fill().map(() => []);

    for (let num of arr) {
        map[num] = ~~map[num] + 1;
    }
  //insert frequency from map into buckets index,
  //this way highest frequency will always be
  // highest non empty index


  // Object.keys(map).forEach(function(key) {
  //   bucket[map[key]].push(key);
  // })

  //Another way

  for (let num in map) {
        bucket[map[num]].push(parseInt(num));
    }

  // Traverse bucket in reverse order
  // filling highest frequency elements
  // in the results array until k>0
  for (var i = bucket.length - 1; i > 0; i--) {
    if (bucket[i].length == 0) continue;
    if (k > 0) {
      results.push(bucket[i]);
      k--;
        }
        else {
          break;
        }
      }

      return results;
    }


console.log(topK([1,1,1,2,2,3,3],2))
