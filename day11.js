// ########################## ADVANCE VARIABLES ############################

// // VAR :- in VAR variable we can declare the value and assign it. It is global scope for example if we use with if condition or any other condition
// if(condition){
//     var a = "hello";
// }
// document.write(a); we can print VAR outside the condition 


// //LET :- in LET variable we can NOT declare the value but we can assign it. It is block scope for example if we use with if condition or any other condition
// if(condition){
//     let a = "hello";
// }
// document.write(a); we can not print LET outside the condition 


// // CONST :- in CONST variable neither we can declare the value nor assign it. It is block scope for example if we use with if condition or any other condition
// if(condition){
//     const a = "hello";
// }
// document.write(a); we can  not print CONST outside the condition 

// ########################## TEMPLATE STRINGS/ TEMPLATE ITERATE ###########################

//template strung is used to concate the multiple values.we have to put back ticks` , curly brackets{}, and variable name 

var user = "rizwan akram";
var marks = 200;
document.write(`hello ${user} your marks is ${marks}`);

var firstName = "Sameer";
var lastName = "Ateeq";
function fullName(firstName,lastName){
    return` ${firstName} ${lastName}`;
}
let print =` Hello ${fullName(firstName,lastName)}`;
document.write(print);