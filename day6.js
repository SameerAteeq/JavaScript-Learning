// ################ JavaScript string method ######################

// <!--------------------- 1: LENGTH  ------------------------>

var str = "hello i am sameer";
var a = str.length; //this method is used to check index number for example h is "0" form hello t0 sameer
document.write(a +"<br>");

// <!--------------------- 2: tolowercaswe ------------------------>

var str = "HELLO i am sameer";
var a = str.toLowerCase(); //this method is used to write string in lowercase 
document.write(a+"<br>");

// <!---------------------  3: touppercase ------------------------>

var str = "HELLO i am sameer";
var a = str.toUpperCase(); //this method is used to write string in uppercase
document.write(a+"<br>");

// <!---------------------  4: inclue ------------------------>

var str = "HELLO i am sameer";
var a = str.includes("am"); //this method is used to search the value in the giving variable and gives answere in true or false
document.write(a+"<br>");

// <!---------------------  5: Startswith ------------------------>

var str = "HELLO i am sameer";
var a = str.startsWith("HELoL"); //this method is used to check that starting word matchs or not and gives the answere in true or false and this is case sensitive
document.write(a+"<br>");

//<!----------------------- 6: endswith -------------------------->  

var str = "HELLO i am sameer";
var a = str.endsWith("sameer"); //this method is used to check that ending word matchs or not and gives the answere in true or false and this is case sensitive
document.write(a+"<br>");

// <!---------------------  7: search ------------------------>

var str = "HELLO i am sameer";
var a = str.search("am"); //this method is used to search the value in the giving variable and gives the position of index number in the answere here "am" is on 8 index number
document.write(a+"<br>");

// <!---------------------  8: Match ------------------------>

var str = "HELLO i am sameer and i am student ";
var a = str.match(/i/g); //this method is used to search the value in the giving variable and gives the answere in the new array here ""slash//"" means regular expression and ""g"" means gloabl means check that value in all string
document.write(a+"<br>");

// <!---------------------  9: IndexOf ------------------------>

var str = "HELLO i am sameer and i am student";
var a = str.indexOf("i"); //this method is used to search the value in the giving variable from starting and ignore the next values which matches too and gives the position of index number in the answere here "i" is on 6 index number.
document.write(a+"<br>");

// <!---------------------  10: LastIndexOf ------------------------>

var str = "HELLO i am sameer and i am student";
var a = str.lastIndexOf("i"); //this method is used to search the value in the giving variable from ending and ignore the next values which matches too and gives the position of index number in the answere here "i" is on 22 index number.
document.write(a+"<br>");

// <!---------------------  11: Replace ------------------------>

var str = "HELLO i am sameer and i am student";
var a = str.replace(/am/g, "m"); //this method is used to replace the value 
document.write(a+"<br>");

// <!---------------------  12: Trim ------------------------>

var str = "        HELLO i am sameer and i am student"  ;
var a = str.replace(/am/g, "m"); //this method is used to remove the extra space from left and right and it is used in form etc
document.write(a+"<br>");