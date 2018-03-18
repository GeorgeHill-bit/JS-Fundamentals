// For loops

// for (var i=0; i<10; i++){
//     console.log(i);
// }

// for (var i=0; i<=20; i+=2) {
//     console.log(i)
// }

// console.log("Cities in Indiana:")
// cityIn = ["Indianapolis", "Fort Wayne", "Muncie", "Fishers", "Evansville"];
// for (var i = 0; i < cityIn.length; i++) {
//     console.log('   '+cityIn[i]);
// }

// var name = 'Kenn';
// for (var i = name.length-1; i >= 0; i--) {
//     console.log(name[i], i)
// }

// var name = 'Kenn';
// for (var i = 0; i < name.length; i++){
//     console.log(name[i])
// }

// var ctr = 0;
// for (i = 0; i <= 50; i++) {
//     ctr += i;
// }
// console.log(ctr);

fizz = 0;
buzz = 0;
modChk = 0;
for (var i = 1; i <= 100; i++) {
    modChk = i;
    fizz = modChk %= 3;
    modChk = i;
    buzz = modChk %= 5;
    x = (fizz == 0 && buzz == 0) ? "FizzBuzz" : (fizz == 0) ? "Fizz" : (buzz == 0) ? "Buzz" : "";
    console.log(i+" "+modChk+" "+x);
}

// // var student = {
// //     name:"Peter",
// //     awesome: true,
// //     degree:"JavaScript",
// //     week: 1
// //     };
// //     for (var item in student) {
// //         console.log(student[item]);
// //     }

//     n = 0;
//     var sName = 'kYle';
//     var cName = '';
//     for (var n in sName) {
//       if (n == 0) {
//             cName = sName[n].toUpperCase();
//         } else {
//             cName += sName[n].toLowerCase();
//         }
//     }
//     console.log("Before="+sName +" After="+cName);
