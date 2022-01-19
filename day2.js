var a = [12, 13 ,14];
document.write(a + "<br><br>");
var b = Array.isArray(a);
document.write(b +"<br>");

//IN IF ELSE CONDITIONS
var a =12;
if(Array.isArray(a)){
    document.write("this is an array");
}else{
    document.write("this is not an array");
}

// IndexOf function

var a = [12,13,12,14,15];
document.write(a+"<br>");
var b = a.indexOf(15,1); //in this function we check the index of the array 
document.write(b);

//last IndexOf

var a = ["hello", "bye", "hye", "why"];
document.write(a+"<br>");
var b =a.lastIndexOf("why"); //this function work like the indexof but it will check the index from the last for example i checked why index it shows 3 
document.write(b);

//Include
var a = [12,13,14,15]; 
document.write(a);
var b =a.includes(12); //this function use to check that the value is exist in array or not
document.write(b+ "<br>");