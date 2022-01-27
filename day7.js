// #############################        #58       NUMBER METHODS     #58       ################################# 

//<!-----------------------  1: Number  ----------------------->

var a = "120";
document.write(a+10 +"<br>"); //without converting string into number

var b = Number(a); // it convert string into number
document.write(b + 10 +"<br>");

//<!-----------------------  2: ParseInt  ----------------------->

var a = "10220.23";
var b = parseInt(a); // This method show value without decimals it shows first integer value if it does not find any value it shows "NaN"
document.write(b+"<br>");

//<!-----------------------  3: parseFloat  ----------------------->

var a = "10220.23";
var b = parseFloat(a); // This method show value with decimals it shows first integer value if it does not find any value it shows "NaN"
document.write(b+"<br>");

//<!-----------------------  4: IsFinite  ----------------------->

var a = 1000.200;
var b = Number.isFinite(a); // This method is used to check that the given variable is finite or not means countable or not
document.write(b+"<br>");

//<!-----------------------  5: IsInteger  ----------------------->

var a = 1000.20;
var b = Number.isInteger(a); // This method is used to check that the given variable is integer or not with decimal points are not integers
document.write(b+"<br>");

//<!-----------------------  6: toFixed  ----------------------->

var a = 10.237530;
var b = a.toFixed(2); // This method is used to fixed decimal values here " 2 " means there should be 2 numbers after decimal points

document.write(b+"<br>");

//<!-----------------------  7: toprecision  ----------------------->

var a = 12.277530;
var b = a.toPrecision(10); // This method is used to round off decimal values herein brackets() we can give any number how many values we want to print of variable means there should be 2 numbers
document.write(b+"<br>");