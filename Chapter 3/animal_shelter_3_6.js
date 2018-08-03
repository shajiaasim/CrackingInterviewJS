// 3.6 Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first
// out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
// or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
// that type). They cannot select which specific animal they would like. Create the data structures to
// maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
// and dequeueCat. You may use the built-in LinkedList data structure.





//I like my solution: check l8r
function AnimalShelter() {
  this.dogQueue = new Queue();
  this.catQueue = new Queue();
  this.count=0
}

function dog (name){
  this.name = name ;
  this.serialNumber;
}

function cat (name){
  this.name = name ;
  this.serialNumber;
}

AnimalShelter.prototype.enqueue = function(animal) {

  if (animal typeof dog) {
    animal.serialNumber=this.count;
    this.dogQueue.enqueue (animal);
    this.count++;
  }

  if (animal typeof cat) {
    animal.serialNumber=this.count;
    this.catQueue.enqueue (animal);
    this.count++;
  }

};


AnimalShelter.prototype.dequeueAny = function (){
return  this.dogQueue.peek().serialNumber < this.catQueue.peek().serialNumber?  this.dogQueue.dequeue(): this.catQueue.dequeue();
}



function Queue() {
  this._storage = {};
  this._oldestIndex = 1;
  this._newestIndex = 1;
}


// Understand why this is being done
Queue.prototype.size = function() {
  return this._newestIndex - this._oldestIndex;
}


Queue.prototype.enqueue = function(val) {
  this._storage[this._newestIndex] = data;
  this._newestIndex++;
};


Queue.prototype.dequeue = function() {

  var oldestIndex = this._oldestIndex;
  if (this.size()) {
    var deQ = this._storage[oldestIndex];
    delete this._storage[oldestIndex];
    this._oldestIndex++;
    return deQ;
  }
};

Queue.prototype.peek = function (){
return this._storage[oldestIndex];
}
