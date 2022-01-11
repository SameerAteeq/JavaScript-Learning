/*document.write("hello world<br>"); //here is comment
document.write("hello world ");

var firstname = "hello again ";
firstname = 400;
var firstName =" how are you<br>";
document.write(firstName);
var first, second, third;
first = "why ";
second = "bye ";
third = "tata ";
document.write(first);
document.write(second);
document.write(third);
let y = "bye bye world";
y= "im coming";
document.write(y);*/
var x = "hello";
x = 32;
x = {
    country: "pakistan",
    name: "sameer"
}
/*x = ["HTML", "CSS", "JS ",]
document.write(x );
document.write("<br>");
document.write(typeof x );
document.write("<br>");*/
// var a = 13;
// var b = 7;
// a++;
// var c = a + b;
// document.write(c);
// document.write("<br>");
// var x = 18;
// var y = 5;
// x %= y;
// document.write(x);
// var h = 30;
// console.time("test");
// console.warn("something went wrong.");
// console.warn("something went wrong.");
// console.warn("something went wrong.");
// console.warn("something went wrong.");
// console.timeEnd("test");
// console.log(3 !== "2");
// var d = 110;
// var e = 50;
                                    
document.write("<br>");


//    <----------- "IF STATEMENT" LEARNING ------------>
var d = 110;
var e = 50;
 if(d > e){
    document.write("HOW ARE U?");
}
var age = 19;

if( age >= 18 && age <= 21){
    console.log("who are u")
}
// both conditions must be true its called LOGIC AND

var sam = 12;
var eer = 34;
if( sam >= 10 || eer <= 32){
    console.log("sameer")
}
// one condition should be true its called LOGIC OR

var m = 12;
console.log(!m >= 12 )
//  In this condition console shows reverse answere if condition will be true it shows false and vice versa Its known as LOGIC NOT

document.write("<br>");

// <------------------- IF ELSE STATEMENT ---------------------->
var name ="Sameer"
 var gender = "Male"
 if(gender == "Male"){
    document.write("Hello Mr." + name)
 }else{
    document.write("Hello Mrs." + name)
 }
 document.write("<br>");
//  <-------------------- IF ELSE IF STATEMENT -------------------->
// var per = 29;
// if(per >=80 && per <=100){
//     document.write("you are in merit");
// }else if(per >=60 && per < 80){
//     document.write("you are in second division");
// }else if(per >=45 && per < 60){
//     document.write("you are in third division");
// }else if(per >=30 && per < 40){
//     document.write("you are in pass");
// }else{
//     document.write("you are fail")
// }
document.write("<br>");
var st = 23;
if(st >=80 && st <= 100){
    document.write("You got A+");
}else if(st >=80 && st <= 100){
    document.write("You got A+");
}else if(st >=70 && st < 80){
    document.write("You got A");
}else if(st >=60 && st < 70){
    document.write("You got B");
}else if(st >=50 && st < 60){
    document.write("You got C");
}else if(st >=40 && st < 50){
    document.write("You got D");
}else if(st >=0 && st < 40){
    document.write("You are Fail");
}else{
    document.write(" Please type valid percentage ")
}
document.write("<br>");
// <!------------------------- TERNORY OPERATOR ------------------------>

var q = 22;
var w;
w = " value is " + (q > 40 ? "True" : "False" );
document.write(w);

// <!------------------- SWITCH CASE ------------------>

document.write("<br>");

var day = 7;
switch (day) {
    case 0: case 7: case 8:
        document.write("Today is Monday");
        break;
    case 1:
        document.write("Today is Tuesday");
        break;
    case 2:
        document.write("Today is Wednesday");
        break;
    case 3:
        document.write("Today is Thursday");
        break;
    case 4:
        document.write("Today is Friday");
        break;
    case 5:
        document.write("Today is Saturday");
        break;
    case 6:
        document.write("Today is Sunday");
        break;

    default:
        document.write("Please type valid week day");
        break;
}    
document.write("<br>");
 var pt = 10;   
switch (true) {
    case (pt >= 80 && pt <=100 ):
        document.write("your grade is A+");
        break;
    case (pt >= 70 && pt < 80 ):
        document.write("your grade is A");
        break;
    default:
         document.write("please apply next time");
        break;
}

// <!----------------    ALERT BOX -------------------->    

// var a = 24;
// var b = 34;
// if( a > b ){
//     alert("A is greater : " + a);
// }else{
//     alert("B is greater :" + b);
// }

// <!-------------------- CONFIRM BOX------------------->

var i= confirm("do you like our website");
if(i){
    alert("thanks");

}else{
    alert("sorry");
}

document.write("<br>");

// <!------------- FUNCTIONS ------------------->
function hello(){
    document.write("i am sameer" + "<br>");
}
hello();
hello();

// <!------------- FUNCTION WITH PARAMETERS ------------------------->
function MR(fname , lname){
    document.write("hello " + fname + " " + lname + "<br>");
}
MR("Muhammad","Sameer");
MR("Muhammad","Shariq");
function sum(a,b){
    document.write(a + b);
}
sum(20,30);
function fullName(fname , lname){
    var f = fname + " " + lname;
    return f;
}
var fn = fullName("muhammad", "arsalan");
document.write(fn);

// <!------------------------ EVENTS ---------------------------->

function ho(){
    document.write("hello everyone" + "<br>");
}
ho();

// <!----------------------------- WHILE LOOP -------------------------->

var z = 9;
document.write("ul");
while( z >=1){
    document.write("<li>"+ z + ') while loop'+ "</li>")
    z=z-1;
}
document.write("</ul>")

// <!------------------------ DO WHILE LOOP -------------------------------->
var dw = 1;
do{
    document.write("In do while loop first condition will not check it start checking from the second condition there isa difference between while loops and do while loops<br>");
    dw++;
}while(dw <= 3)

// <!-------------------------- FOR LOOP ---------------------------->
for(var l = 1; l <= 3; l++){
    document.write("In for loop all conditions wirte in one line and mostly developer use this<br>")
}

// <!------------------------- CONTINUE AND BREAK -------------------------------->
// for(var n = 1; n <= 10; n++){
//     if(n == 3){
//         document.write("Three<br>");
//         continue;
//     }
//     document.write("number :" + n + "<br>")
// }

// <!------------------------ EVEN AND ODD NUMBERS WITH LOOPS --------------------------->

// ##### FOR EVEN #######
for(e=1; e<=10; e++){
    if(e % 2 == 0){
        document.write(e + "<br>");
    }
}
// ##### FOR ODD #######3
for(o=1; o<=10; o++){
    if(o % 2 != 0){
        document.write(o + "<br>");
    }
}
// <!--------------------------NESTED LOOP----------------------------->
// #### EXAMPLE 1 #########
for(var n = 1; n <= 100; n+=10){
    for( var m = n; m < n+10; m++ ){
        document.write(m +" ");
    }
    document.write("<br>");
}
// #### EXAMPLE 2 #########
for(var a = 1; a<=5; a++){
    for(var b = 1; b<=a; b++){
        document.write(b + " ")
    }
    document.write("<br>");
}
// #### EXAMPLE 3 #########
for(var a =1; a<=5; a++){
    for(var b=1; b<=a; b++){
        document.write(a + " ");
    }
    document.write("<br> ");
}
// #### EXAMPLE 4 #########
for(var a=5; a>=1; a--){
    for(var b =1; b<=a; b++){
        document.write(a +" ");
    }
    document.write("<br>");
}
// #### EXAMPLE 4 #########
for(var a =5; a>=1; a--){
    for(var b =a; b>=1; b--){
        document.write(b +" ");
    }
        document.write("<br>");
}
// a = a + 1
// a++
// a+=1