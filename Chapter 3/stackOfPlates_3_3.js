function SetOfStacks(capacity){

this._setOfStacks = [];
this._capacity = capacity;
}

SetOfStacks.prototype.push = function (val) {

var set = this._setOfStacks;
var valuePushed = false;
if (!this._setOfStacks) {
  this._setOfStacks.push(new Stack());

}
else{
  for (var i =0; i< set.length; i++ ){
    if (set[i]._size<capacity) this._setOfStacks[i].push(val);
  }
  if (!valuePushed){
    this._setOfStacks.push(new Stack());
    this._setOfStacks[set.length-1].push(val);
  }
}

};



SetOfStacks.prototype.pop = function (val) {

this._setOfStacks[this._size].pop();

};


/* TESTS */

var s = new SetOfStacks(3);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.push(7);
s.push(8);
s.push(9);
s.push(10);
s.push(11);
s.push(12);
s.push(13);
s.push(14);

console.log(s.stackSet);

s.popAt(2);

console.log(s.stackSet);

s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();

console.log(s.stackSet);


// Note: if stack not implemented as an array, would need to separately keep track of the depth
// of each stack in an array
