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

