// <!---------------------  12: character At ------------------------>

var str = "HELLO i am sameer and i am student";
var a = str.charAt(3); //in this method we give the position of value respect of index number and it returns that value which index number we gives E.G here "L" is present at "3"
document.write(a+"<br>");

// <!---------------------  13: character code At ------------------------>

var str = "HELLO i am sameer and i am student";
var a = str.charCodeAt(6); //in this method we give the position of value with respect of index number and it returns the character code number of that value here character code value is keyboard numnbers
document.write(a+"<br>");

// <!---------------------  14: From character code ------------------------>

//var str = "HELLO i am sameer and i am student";
var a = String.fromCharCode(97); //in this method we give the character code number and it returns the value means if wwe give "97" it print "a" it does not need any string we type string with is
document.write(a+"<br>");

// <!---------------------  15: Split ------------------------>

var str = "HELLO i am sameer and i am student";
var a = str.split("i"); //in this method we split(torty) the string we can split from everywhere between spaces and between any word it showws "coma" .
document.write(a+"<br>");

// <!---------------------  16: Repeat ------------------------>

var str = "HELLO i am sameer and i am student";
var a = str.repeat(2); //in this method we repeAT the string just we giive the number that how many times it should be repeat then it will repeat all string 
document.write(a+"<br>");

// <!---------------------  17: Slice ------------------------>

var str = "HELLO i am sameer and i am student";
var a = str.slice(6,17); //in this method we give starting and ending position with respect to index number for example if i want string from " i " to "sameer" then first i will give i index number the sameer
document.write(a+"<br>");

// <!---------------------  18: Substr ------------------------>

var str = "HELLO i am sameer and i am student";
var a = str.substr(6,5); //in this method we give starting and ending position with respect to index number but when i give starting position it starts from and when i give ending position it start from the starting position to the next  for example if i give "6" statring position it start from second "L" then lst position start from L to the next 
document.write(a+"<br>");

// <!---------------------  19: SubString ------------------------>

var str = "HELLO i am sameer and i am student";
var a = str.substring(6,17); // in this method we give starting position it start from where and end on second last position means we give (4,7) it start from "4" and end on "6".  
document.write(a+"<br>");

// <!---------------------  20: tostring ------------------------>

//tostring convert given variable in the string