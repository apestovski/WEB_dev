//Authoer: Andrei Pestovski
//Date: 1/27/2018
//Description: show examples fo js function hoisitng and funciotn assigned to variabe before and after declaration

console.log(toCelsius(32));  //toCelsius() function to test function hoisting when it is called before being declared

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

//square() function to test function assigned to variable

var square = function(x){
	return x*x;
}
console.log(square(4)); //the funciotn work if it is called after declaration

var cube = function(y){ 
	return y*y*y;
}
console.log(cube(5)); //the funciotn doesn't work if it is called before declaration

/*error on console
console.log(cube(5)); //the funciotn doesn't work if it is called before declaration
            ^

TypeError: cube is not a function
    at Object.<anonymous> (C:\temp\jsActivity2.js:18:13)
    at Module._compile (module.js:643:30)
    at Object.Module._extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
    at Function.Module.runMain (module.js:684:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3
    */