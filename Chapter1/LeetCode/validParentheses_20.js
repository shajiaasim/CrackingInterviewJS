//My solution

function Stack() {
    this._size = 0;
    this._storage = {};
}
 
Stack.prototype.push = function(data) {
    var size = ++this._size;
    this._storage[size] = data;
};
 
Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;
 
    if (size) {
        deletedData = this._storage[size];
 
        delete this._storage[size];
        this._size--;
 
        return deletedData;
    }
};


var isValid = function(s) {

    var charArray = s.split('');

    var stack = new Stack ();

    var isClosed = false;

    if (charArray.length == 0) return true;

    for (var i=0; i<charArray.length;i++){


        if (charArray[i] == ')' || charArray[i] == '}' || charArray[i] == ']' )
          {
            if (stack.pop() == getOpposite(charArray[i])) isClosed = true;
              else{
                  return false;
              }
        } else{
          stack.push(charArray[i]);
            isClosed = false;
        }
    }

    return isClosed && stack._size==0;

};



function getOpposite(s){

    switch (s)
        {
        case '}':
        return '{';

        case ']':
        return '[';

        case ')':
        return '(';

        }

}



//Java Solution

public boolean isValid(String s) {
	Stack<Character> stack = new Stack<Character>();
	for (char c : s.toCharArray()) {
		if (c == '(')
			stack.push(')');
		else if (c == '{')
			stack.push('}');
		else if (c == '[')
			stack.push(']');
		else if (stack.isEmpty() || stack.pop() != c)
			return false;
	}
	return stack.isEmpty();
}
