// let marks = prompt('enter your marks: '); //prograam to check pass or fail
// let result = (marks >=40) ? 'pass' : 'fail'; //condition
// document.write(`You ${result} the exam` + "<br>");


// Age requirde to vote
let age =15;
let results = (age >=18) ? 'you are eligible' : 'you are not eligible';
document.write(results  + "<br>");

// program to check if number is positive, negative or zero
let number =-2
let answere = (number >=0)? (number == 0? 'zero': 'positive') : 'Negative';
document.write(`the number is ${answere}`  + "<br>");

// write a program using ternary javascript operator
//  that take number as an argument from input and tell whether
// the number is even or odd. 

let a = prompt(" check number is even or odd :");
let ans = ( a % 2==0)? "number is even" : "number is odd";
document.write(ans);

