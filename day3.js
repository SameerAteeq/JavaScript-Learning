//Some
var ages = [12,13,15,18,20];
document.write(ages + "<br>");
var b = ages.some(checkAdult);
document.write(b +"<br>")
function checkAdult(age){
    return age >=18;
}

// to cheeck even numbers by some function

var a =[1,3,5,7,8];
var b =a.some(even);
document.write(b+"<br>")
function even(number){
    return number %2 ==0;
}

// to check students ages if they are adult age or not

var student = [
    {
        Name : "hamza",
        age: 21
    },
    {
        Name : "hamza",
        age: 20
    },
    {
        Name : "hamza",
        age: 25
    },
    {
        Name : "hamza",
        age: 18
    }
];
var age = student.some(adult);
document.write(age + "<br>");
function adult(persons){
    return persons.age >=18;
}

//EVERY function
// to check all numbers are odd 
 var a = [3,5,7,9];
 var b =a.every(odd);
 function odd(number){
    return number %2 !=0; //In this function all values should be passed the test
}
document.write(b + "<br>");


// FIND function

var ages = [12,19,23,22];
var b = ages.find(adultcheck);
function adultcheck(age){ //this function show the first value which passes the test it does not show the remainig values even they can also pass the test but it shows only first value
    return age >=18;
}
document.write(b+ "<br>");

//FINDINDEX function

var ages = [12,19,23,22];
var b = ages.findIndex(adultcheck);
function adultcheck(age){ //this function show the first index which passes the test it does not show the remainig value's index even they can also pass the test but it shows only first value's index
    return age >=18;
}
document.write(b+ "<br>");

// FILTER function
//for even

var num = [1,2,3,5,6,7,8,9,10];
var res =num.filter(even);
function even(number){
    return number %2==0; //this function is used according to the condition and make new array according to the condition
}
document.write(res+ "<br>");

//for odd

var num = [1,2,3,5,6,7,8,9,10];
var res =num.filter(odd);
function odd(number){
    return number %2!==0;
}
document.write(res+ "<br>");

//for adult

var num = [1,2,19,21,22,34];
var res =num.filter(adultage);
function adultage(number){
    return number >=18;
}
document.write(res+ "<br>");

// ###################          ToString  function  #####################

var a =["hello", "bye", "there", "here"];
a.toString();
document.write(a+ "<br>"); // this function use to coonvert an array into string

// ################ FILL function   #########################    
var a =["hello", "bye", "there", "here"];
a.fill(12);
document.write(a+ "<br>"); // this function use to fill new value in the array after removing previous values