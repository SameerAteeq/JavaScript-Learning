// ############################# JavaScript Array Functions ######################
// ### 1:- SORT ###
var a = ["hello","bye","what","theres"];
a.sort();
document.write(a); /*it will write the values alphabatically*/
document.write("<br>");

// ### 2:- REVERSE ######
var a = ["hello","bye","what","there"];
a.reverse();
document.write(a + "<br>");          /*it will write the values reverse*/

// ### 3:- POP ######
var a = [12,23,44,55,56];
a.pop();
document.write(a + "<br>");          /*it will delete the last value*/

// ### 4:- Push ######
var a =[12,23,44,55,56];
a.push(22);
document.write(a+ "<br>");          /*it will add new value in the last*/

// ### 5:- shift ######
var a = [12,13,14,15];
a.shift();
document.write(a + "<br>");        /*it will delete the first value*/

// ### 6:- unshift ######
var a =[1,2,3,4,5,6];
a.unshift(15);
document.write(a+ "<br>");        /*it will add new value in the start*/

// ### 7:- concate ######

// ########### FIRST METHOD ###########
var a = [1,2,3];
var b = a.concat(4,5,6);      /*it is use to join multiple arrays*/
document.write(b + "<br>");

// ########### SECOND METHOD ###########
var a =["dua", "jannat", "fatima"]
var b =["abdullah", "anus"]
var c =["rizwan","adnan"]
var d = a.concat(b,c);
document.write(d + "<br>");

// ### 8:- JOIN ######

var a =["dua", "jannat", "fatima"]
var b =["abdullah", "anus"]
var e =a.concat(b);
document.write(e + "<br><br>");
var d =e.join("-");                 /*it is use to write all values of arrays in one string it removes coma between the vllues we can add anything between value like coma, space, slash bar*/
document.write(d+ "<br><br>");

// ### 9:- SLICE ######
var a =["hello", "bye", "there","where", "here"]
document.write(a + "<br><br>");
var b = a.slice(1,2);
document.write(b); /* It is use to write the values of first array in anoyher new array but we have to write according their index for example if i want to write just bye so i will give slice start value 1 and end value 2 because i have to print value index value from 1 to 2*/