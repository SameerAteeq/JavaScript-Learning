// ######################### ARRAY DESTRUCTURING  ######################################

//THIS is used to print multiple values in the single array
let user = ["sameer", 19, "student"]; 
[name, age, profession] = user;//we can assign the value in single line
console.log(name);
console.log(age);
console.log(profession);

//By rest operators
let users = ["sameer", 19, "student"]; 
[name,...args] = users;//we can also assign the value in rest operators
console.log(name);
console.log(args);

//By function
function person([name, age, profession]){
    console.log(name);
    console.log(age);
    console.log(profession);

}
person(["sameer", 19, "student"]);



// ######################### OBJECT DESTRUCTURING  ######################################

//object destructuring work like a array distructuring we assign the multiple values of object in single line

let persons ={
    names : "sameer",
    classes: "bscs",
    age :20
};

let {names,classes,ages} = persons;

console.log(persons);