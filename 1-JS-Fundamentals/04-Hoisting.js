//Hoisting: Declarations are hoisted, resulting in them being able to be called before being
//declared
console.log(hoisted())
var hoisting = function () {
    return 'Did not get hoisted!'
}
function hoisted() {
    return 'Just got hoisted!'
}
console.log(hoisting());
//We can call hoisted() before it appears because the compiler places all declarations at the top of the file.
// /////////ANOTHER HOISTING EXAMPLE
console.log(stringExpression);
var stringExpression = 'The first console can\'t see this'
console.log(stringExpression)
//Closure lesson: 
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
var a = addSquares(2, 3); // returns 13
var b = addSquares(3, 4); // returns 25
console.log(a)
console.log(b)
//Now uncomment the line directly below and run the code again.
// square(2);
//What is the result of calling square()? Why? Our function is encapsulated inside of another function, resulting
//in a closure!
