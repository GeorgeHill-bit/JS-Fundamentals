// i = 0;
// text = '';
// while (i < 10) {
//     text += "The number is " +i+" ";
//     i++;
// }
// console.log(text);

// i = 0;
// myBool = true;
// while (i < 10) {
//     console.log(myBool);
//     myBool = false;
// }

// var result = "";
// var i = 0;

// do {
//     i = i+1;
//     result = result +i;
// } while (i < 5);
// console.log(result);


// i = 0;
// do {
//     i++
//     console.log('Increment: i++ = '+i);
//     } while (i < 10);


// myArr = [1, 2, 3];
// i = 0;
// do {
//     console.log(myArr[i])
//     ++i
// } while (i <= myArr.length);

// console.log("Cities in Indiana:")
// cityIn = ["Indianapolis", "Fort Wayne", "Muncie", "Fishers", "Evansville"];
// for (var i = 0; i < cityIn.length; i++) {
//     console.log('   '+cityIn[i]);
// }

n = 0;
var studentName = 'thomas';
var capSN = '';
for (var n in studentName) {
  if (n == 0) {
        capSN = studentName[n].toUpperCase();
    } else {
        capSN += studentName[n];
    }
    console.log(studentName +' '+ capSN);
}

var result = "";
var i = 0;
