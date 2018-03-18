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
var quarterback = 'that guy';
function football(){
    function throwBall(){
        return quarterback = 'Some Guy'
    }
    return throwBall()
}
console.log('Before football is invoked, the quarterback is:', quarterback)
football()
console.log('After football is invoked, the quarterback is:', quarterback)
//IIFE example. You do not have to call an IIFE to invoke it. Also called anonymous or self-invoked functions.
!(function(){
    console.log('Immediately invoked!')
})();
//IIFE Example which assigns the result of the IIFE to a variable.
var result = (function () { 
    var name = "Barry"; 
    return name; 
})(); 
console.log(result);
// console.log(name)
//While example
var i = 0;
while (i < 5){
    console.log(i)
    i++
};
// Do/While example
// This construct works the same as the while statement from above, except the 'do' forces an instance of the
//commands at least once, even if the condition is not met.
var result = "";
var i = 0;
do {
  i = i + 1;
  result = result + i;
} while (i < 5);
//Do/While with conditional
//This example shows how a do/while statement can accept a conditional statement.
var result = "";
var i = 0;
do {
    if(i == 5){break}
    i = i + 1;
    result = result + i;
    console.log(result)
} while (i < 10);
//Basic Fizz Buzz with a for loop.
for (let i = 0; i < 100; i++) {
    if(i % 15 === 0){
        console.log('Fizz Buzz')
    }else if(i % 5 === 0){
        console.log('Buzz')
    }else if(i % 3 === 0){
        console.log('Fizz')
    }else{
        console.log(i)
    }   
}
//This is an example of a for loop nested inside a for loop.
firstArray = ['first', 'second', 'third'];
secondArray = ['fourth', 'fifth', 'sixth'];
thirdArray = [];
thirdArray.push(firstArray);
thirdArray.push(secondArray);
console.log(thirdArray);
for (let i = 0; i < thirdArray.length; i++) {
    for (let x = 0; x < thirdArray[i].length; x++) {
        const element = thirdArray[i];
        console.log(element[x])   
    }
    
};

// fizz = 0;
// buzz = 0;
// modChk = 0;
// for (var i = 1; i <= 100; i++) {
//     modChk = i;
//     fizz = modChk %= 3;
//     modChk = i;
//     buzz = modChk %= 5;
//     x = (fizz == 0 && buzz == 0) ? "FizzBuzz" : (fizz == 0) ? "Fizz" : (buzz == 0) ? "Buzz" : "";
//     console.log(i+" "+modChk+" "+x);
// }

// function fizzBuzz() {  
//   for (var i = 1; i <= 100; i++) {
//     if ( i % 3 == 0 && i % 5 == 0 ) {
//       console.log(i + ' = FizzBuzz');
//     }
//     else if ( i % 3 == 0 ) {
//       console.log(i + ' =Fizz');
//     }
//     else if ( i % 5 == 0 ) {
//       console.log(i + ' =Buzz');
//     }
//     else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz();
