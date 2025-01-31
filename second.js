// arithametic operator and unary operator
// modules
// exponentiation **
// let a = 5;
// let b = 4;
// let c = 5 + 4;

// console.log("a=", a, "b=", b);
// console.log("a+b", a + b)
// console.log(c--);
// console.log(c);

// unary opertor
// let a = 7;
// let b = 5;

// a = a--;post
// b = ++b;

// console.log(b);
// console.log(a);
// console.log(a);


// assignment operator
// let a = 5;
// let b = 4;

// a += 50;
// console.log(a + b);

// comparision operators
// ==,!= this is a only number comparison operator
// ===,!== this is number with data type comparision operator.
// let a = 10;
// let b = "10";

// console.log(a !== b);

// logical operator.
// let a = 10;
// let b = 9;

// let con1 = a < b;
// let con2 = a != b;

// console.log(con1 || con2);

// .  ternary operator.

// let numberr = 17;

// let result = numberr >= 18 ? "okay" : "noway";

// console.log(result);



// conditional statement

// 1. if ststement

// let a = 20;
// let b = 25;

// if (a < b) {
//     console.log("right condition");
// }

// if (a > b) {
//     console.log("wrong condition-1");
// }


// let internet = 80;
// let loading_status;

// if (internet >= 80) {
//     loading_status = "loading...";
//     // console.log("low internet speed...");
// } else {
//     loading_status = "low internet speed...";
//     // console.log("loading...");
// }

// console.log(loading_status);

// let age = 16;

// if (age <= 16) {
//     console.log("you cannot vote");
// }

// if (age >= 16) {
//     console.log("you can vote");
// }

// 2. if - else ststement

// let a = "dark";
// let color;

// if (a === "dark") {
//     color = "acces...";
// } else {
//     color = "not responce...";
// }

// console.log(color);

// let b = 18;
// let number;

// if (b % 2 === 0) {
//     number = "even";
// } else {
//     number = "oad";
// }

// console.log(number);


// // 3. if - else condition

// let age = 18;
// let status;

// if (age === 18) {
//     status = "eligable";
// } else if (age <= 18) {
//     status = "not eligable";
// } else {
//     status = "go home";
// }

// console.log(status);

// let num = prompt("write your name");

// console.log(num);

// if (num % 5 === 0) {
//     console.log("welcome bhai");
// } else {
//     console.log("give the number tha multiple of five...");
// }


// let result = 100;
// let fial,

// if (result >= 90 && result <= 100) {

//     console.log("first class");

// } else if (result >= 80 && result <= 89) {
//     console.log("second class");
// } else if (result >= 70 && result <= 69) {
//     console.log("third class");
// } else if (result >= 60 && result <= 59) {
//     console.log("forth class");
// } else if (result >= 50 && result <= 49) {
//     console.log("fifth class");
// } else (result >= 0 && result <= 39); {
//     fial = "fail";
// }

// console.log(fial);

let result = 80;
let grade;

if (result >= 90 && result <= 100) {
    grade = "A";

} else if (result >= 80 && result <= 89) {
    grade = "B";

} else if (result >= 70 && result <= 79) {
    grade = "C";

} else if (result >= 60 && result <= 69) {
    grade = "D";

} else if (result >= 50 && result <= 59) {
    grade = "E";

} else if (result >= 40 && result <= 49) {
    grade = "F";

} if (result >= 0 && result <= 39) {
    grade = "fail-twice";

}

console.log(grade);

let a = 4;
let b = 5;

a += 2

console.log(a);

let month = 7
let seasson;

if (month >= 1 && month <= 4) {
    seasson = "monsoon";

} else if (month >= 5 && month <= 8) {
    seasson = "chomasu";

} else if (month >= 9 && month <= 12) {
    seasson = "winter";

}

console.log(seasson);
