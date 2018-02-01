//Description: Write a function, deepEqual, that takes two values 
//and returns true only if they are the same value or are objects 
//with the same properties whose values are also equal when compared 
//with a recursive call to deepEqual.


//referenced for hasOwnProperty method returning boolean indicating whether the object has the specified property as own (not inherited) property at
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
//and referenced js pbject comparison: https://stackoverflow.com/questions/201183/how-to-determine-equality-for-two-javascript-objects

var deepEqual = function (x, y) {
	if (x === y) return true; //strict matching
    if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false; //prop length don't match

    for (var prop in x) {
      if (y.hasOwnProperty(prop))
      {  
        if (! deepEqual(x[prop], y[prop]))
          return false; //not equal
      }
      else
        return false; //properties don't match
    }

    return true;
  }
  else if (x !== y)
    return false;
  else
    return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true