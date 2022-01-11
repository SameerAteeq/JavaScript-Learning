// <!------------------- ARRAYS ------------------------>

var ary = [10,20,30,40,50]; //their index value start from zero means here 10 is 0, 20 is 1, 30 is 2
var sum =0;
document.write("<ul>")
for(var a =0; a<=4; a++){
    document.write("<li>" + ary[a] + "</li>");
    sum = sum + ary[a];
}
document.write("</ul>")
document.write("total sum :" + sum);
document.write("<br>");
// <!----------------- MULTIDIMENSIONAL ARRAY ----------------------->
var ary = [
    ["Harry",19,"Male","B.com"],
    ["Harry",19,"Male","B.com"],
    ["Harry",19,"Male","B.com"],
    ["Harry",19,"Male","B.com"],
    ["Harry",19,"Male","B.com"],
    ["Harry",19,"Male","B.com"]
];
document.write("<table border = '1px' cellspacing = '0'>");
for(var a=0; a <ary.length; a++){
    document.write("<tr>")
    for(var b =0; b <ary[a].length; b++){
        document.write("<td>" + ary[a][b] + "</td>");
    }
    document.write("<tr>")
    document.write("<br>");
}
document.write("</table>");

// <!------------- MODIFY AND DELETE ARRAY ------------------>
var a = ["Harry",19,"Male","B.com"];
document.write(a + "<br>");
a[0]= "sunny";
document.write(a + "<br>");
delete a[2];
document.write(a + "<br>");

// ############################# JavaScript Array Functions ######################
// ### 1:- SORT ###
var a = ["hello","bye","what","theres"];
a.sort();
document.write(a);
document.write("<br>");
// ### 2:- REVERSE ######
var a = ["hello","bye","what","there"];
a.reverse();
document.write(a + "<br>");

// ### 3:- POP ######
var a = [12,23,44,55,56];
a.pop();
document.write(a + "<br>"); /*it will delete the last value*/

// ### 3:- Push ######
var a =[12,23,44,55,56];
a.push(22);
document.write(a+ "<br>"); /*it will add new value in the last*/

// ### 4:- shift ######
var a = [12,13,14,15];
a.shift();
document.write(a + "<br>"); /*it will delete the first value*/

// ### 5:- unshift ######
var a =[1,2,3,4,5,6];
a.unshift(15);
document.write(a+ "<br>"); /*it will add new value in the first*/

// ### 6:- concate ######
var a = [1,2,3];
var b = a.concat(4,5,6);
document.write(b);