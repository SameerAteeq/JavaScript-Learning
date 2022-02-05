// ############################ MODULES ######################################

//Modules is used to use functions variable and classes of one file in another file

// ################ File-1 ######################

//for example i have file1 and we have to use let variable in another file so i will uwrite "EXPORT" before this

// exportlet name = "sameer"; ########## I want to print name in another file so i will write export
// function(){

// }
// class user()

// ################ File-2 ######################

// now i will print name like this

// import{name}from'./file1'

//and we can call it console.log(name);


// ################################### TO INCLUDE IN HTML FILE #########################

//we will include with script tag but we will give the type ="module" like this : <script type="module" src="./file2"></script>


// ########################## Now we are importing ##########################


// import  {message as ms, user,test}from "./module2.js"; //here as is used to define short name of any functionName, Variable etc known as alice mehtod
import * as m1 from "./module2.js"; //here * means all functions , classes and variable shoud be stored in this file from module2.js and we give name after as like i gave "m1"
console.log(m1.message);
m1.user("sameer");
let a =new m1.test();

import {default as func} from "./module2.js"; //here we have given the default function 

func();