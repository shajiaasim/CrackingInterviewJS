function Stack() {
  this._size = 0;
  this.storage = {}
}


Stack.prototype.push = function(val) {

  var size = this._size++;
  this.storage[size] = val;
}


Stack.prototype.pop = function() {
  var size = this._size;
  if (size) {
    var pop = this.storage[size-1];
    delete this.storage[size-1];
    this._size--;
    return pop;
  }
}

Stack.prototype.peek = function () {
return this.storage[this._size];
};

function SetOfStacks(capacity){

this._setOfStacks = [];
this._capacity = capacity;
}


//TO DO optimize code
SetOfStacks.prototype.push = function (val) {

var set = this._setOfStacks;
var valuePushed = false;
if (this._setOfStacks.length==0) {
  this._setOfStacks.push(new Stack());
  this._setOfStacks[0].push(val);

}
else{
  for (var i =0; i< set.length; i++ ){
    if (set[i]._size<this._capacity && !valuePushed)
    {
    this._setOfStacks[i].push(val);
    valuePushed= true;
    }
  }
  if (!valuePushed){
    this._setOfStacks.push(new Stack());
    this._setOfStacks[set.length-1].push(val);
    valuePushed= true;
  }
}

};



SetOfStacks.prototype.pop = function () {
var set = this._setOfStacks;
var pop = this._setOfStacks[set.length-1].pop();

if(!pop) {
this._setOfStacks.pop();
pop = this._setOfStacks[set.length-1].pop();
}

return pop;

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

//console.log(s.stackSet);

//s.popAt(2);

//console.log(s.stackSet);

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
