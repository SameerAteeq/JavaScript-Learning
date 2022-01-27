// #############################        #60     DATE METHODS     #60        ################################# 

// NOTE : To use this method first we will have to make object any variable for example : var a = new Date(); now we can use date methods with variable "a".
// NOTE : This method show that time whici is set on PC
//<!-----------------------  1: ToDate String  ----------------------->

var now = new Date();
document.write(now.toDateString() + "<br>"); //this method is used to aply to make date readable 

//<!-----------------------  2: getdate  ----------------------->

var now = new Date();
document.write(now.getDate() + "<br>"); //this method is used to get date 

//<!-----------------------  3: getday  ----------------------->

var now = new Date();
document.write(now.getDay() + "<br>"); //this method is used to get day here starts from sunday = 0 monday = 1

//<!-----------------------  4: getyear  ----------------------->

var now = new Date();
document.write(now.getFullYear() + "<br>"); //this method is used to get year 

//<!-----------------------  5: getmonth ----------------------->

var now = new Date();
document.write(now.getMonth() + "<br>"); //this method is used to get month here starts from jan = 0 feb = 1

//<!-----------------------  6: gethour ----------------------->

var now = new Date();
document.write(now.getHours() + "<br>"); //this method is used to get hours

//<!-----------------------  7: getminutes (same as getseconds and getmiliseconds)----------------------->

var now = new Date();
document.write(now.getMinutes() + "<br>"); //this method is used to get minutes

//<!-----------------------  8: setdate ----------------------->

var now = new Date();
now.setDate(20)
document.write(now + "<br>"); //this method is used to check the future and past date  

//<!-----------------------  9: setfullyear ----------------------->

var now = new Date();
now.setFullYear(2022) // it will show the current date of the year we will type
document.write(now + "<br>"); //this method is used to check the future and past date 

//<!-----------------------  8: setmonth ----------------------->

var now = new Date();
now.setMonth(5); //it will print current date of the month we will give
document.write(now + "<br><br><br>"); //this method is used to check the future and past date 


// ####################### EXAMPLE ########################
document.write("EXAMPLE<br>");
var a = new Date();
document.write(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear());