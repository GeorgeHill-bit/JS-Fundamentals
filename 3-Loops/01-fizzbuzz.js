// For every integer between 1 and 100:
// If integer is evenly divisible by 3 write "fizz".
// If integer is evenly divisable by 5 write "buzz".
// If integer is evenly divisable by 3 and 5 write "fizzbuzz".

for (var i=1; i<=100; i++) {
    var fizzbuzz = i% 15;
    var fizz = i% 3;
    var buzz = i% 5;
        x = (fizzbuzz === 0) ? 'FizzBuzz' : (fizz === 0) ? 'Fizz' : (buzz === 0) ? 'Buzz' : i;
    console.log(i, x);
}