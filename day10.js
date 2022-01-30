// ######################### FORM EVENTS ##############################

// <------------------------ 1:focus ------------------------->
//this event is used to focus 

function focusfunction(element){
    element.style.background = "blue";
}

// <------------------------ 2:Blur ------------------------->
//this event is used to remove focus
function blurfunction(element){
    element.style.background = "";
}

// <------------------------ 3:Input ------------------------->
//input event will show the text which we were typing input function just apply on input text

function inputfunction(element){
    var x = element.value; // here we create variable now any value we will type it will store in the x variable
    document.getElementById("test").innerHTML = x; //here we want to print x value in the div so we target div by id and we inner html so we took it.
}

// <------------------------ 4:Change ------------------------->
//this event is work like input but it can apply any input type and on input when we type it shows imediately but in change event it will not show whenever we will not go another input or click anywhere
function changefunction(element){
    var x = element.value;
    document.getElementById("test").innerHTML=x;
}

// <------------------------ 5:Submit ------------------------->

//submit
function submitfunction(){
    var x = document.getElementById("fname").value; //here we take value of fname we can also print any input
    alert("hello " + x);
}

// <------------------------ 6:valid ------------------------->
//this event is used to provide message when use give some incorrect information means it types contact on name input