// ###################### ERROR HANDLING #################################
//In error handling we use try and catch metho in "try" we will write our code and in catch() method we will give statment to show error.

// ######## EXAMPLE 1 ###########
try {
    console.log('hello everyone');
    blla(); //to check error
} catch (error) {
    console.log(error);
}

// ######## EXAMPLE 2 for set timeout ###########
//this try and catch method will not work with set timeout it will show error normally but does not show the catch() error 
//we have to use inside the set timeout function 
setTimeout(function(){
    try {
        console.log('hello everyone');
        ErrorEv; //to check error
    } catch (err) { 
        console.log(err.name); //we can check error separately by giving name/message/stack here stack will show name and message both
    }
});

// ############################ TYPES OF ERROR #################################

// ###### 1. EvalError #########
//this error shows when we use eval method. (Not Important.)

// ###### 2. RangeError #########
// this error shows when in html input type in range becomes error so it shows. (Not Important.)

// ###### 3. ReferenceError #########
// this error shows whenever we declare any function variable which does not exist there are so many tpes of RefernceError

// ###### 4. SyntaxError #########
// Whenever we write any syntax and we do any typying mistake so this error shows 

// ###### 5. TypeError #########
//Whenever we make type of error like in boolean, string etc they are pre define types if we make any mistake then it shows type error

// ###### 6. URIError #########
//whenever we give wrong path of URL then this error shows

// ##################### EXAMPLE 3 #######################
//here we can check any error type we mostly use it when we have to recieve data form server in JSON form
try {
    console.log('bye everyone');
    ErrorEv; //to check error
} catch (er) {
    if(er instanceof ReferenceError){
        console.log('reference error');
    }else if(er instanceof SyntaxError){
        console.log('syntax error');
    }else{
        console.log('unknown error')
    }
}

// ############################ EXAMPLE 4 #############################
//here we can check any error type we mostly use it when we have to recieve data form server in JSON form

try {
    let json ='{"name" : "sameer" , "age" :20}'; //here we are making json fake data.
    //now we take variable to convert json data in javascriot object
    let user = JSON.parse(json); //this method of json is used to convert json (server) data into javascript object
    console.log(user.name);
    console.log(user.age);
} catch (e) {
    console.log(e);
}finally{ // it works even the try method got error but this method always run we can code anything
    console.log('finally');
}