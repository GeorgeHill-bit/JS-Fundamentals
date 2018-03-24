// Quincy 6:15 PM, March 22nd 
// It's more of an exercise than a mock interview. 
// We'll be asking you to whiteboard three things:

// 1)   Write a for loop that counts from 0 to 100, logging: 
//      Fizz to the console for each number that's a multiple of 3, 
//      Buzz to the console for each number that's a multiple of 5, 
//      FizzBuzz if it's a multiple of both, 
//      and finally just the number if it's none of those.

// 2)   Declare a function that adds 2 numbers together and console.logs the sum when called

// 3)   Show an example of assigning a value to a variable, 
//      then reassign the variable to a different data type than the original variable.
        // Any (not empty) string is true.
        // Even the string 'false' is true.
        // Any expression (except zero) is true.


for (i=1; i<=100; i++) {
    var fizzbuzz = i% 15;
    var fizz = i% 3;
    var buzz = i% 5;
    x = (fizzbuzz === 0) ? "FizzBuzz" : (fizz === 0) ? "Fizz" : (buzz === 0) ? "Buzz" : i;
    console.log(x);
    };


var c = 0;
function addNumbers(a, b) {
    a + b;
    console.log(c = a + b)
    };
addNumbers(12, 25);
addNumbers(2, 4);
addNumbers(999999, 1);

var cString;
console.log('var cString; is',typeof(cString));
cString = "15"; // string
console.log('cString = "15"; is', typeof(cString), cString);
cString = Number(cString); // number
console.log('cString = Number(cString); is', typeof(cString), cString);
cString = "0"; // string
console.log('cString = "0";', typeof(cString), cString);
cString = Boolean(cString); // boolean true if string not empty
console.log('cString = Boolean(cString);', typeof(cString), cString);
cString = "0";
console.log('cString = "0";', typeof(cString), cString);
cString = Number(cString);
console.log('cString = Number(cString);', typeof(cString), cString);
cString = Boolean(cString);
console.log('cString = Boolean(cString);', typeof(cString), cString);
