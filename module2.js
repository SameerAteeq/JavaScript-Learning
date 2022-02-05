
// ############## here we are exporting then we will import in module-1  #######################
let message = "ES6 Modules 2015";

function user(name){
    console.log(`Hello ${name}`);
}

class test{
    constructor(){
        console.log("constructor method");
    }
}
export{message, user, test};  //here we have given the default function 

export default function(){
    console.log("hello");
}


// ########################### AGGERGATE MOODULES ###################################

function users(names){
    console.log(`hello ${names}`);
}
export { users};