// ####################################### PROMISE #####################################

// PROMISE method has three stages pending fulfilled and reject for example if we give any condition in promise(condition) and it fulfilled then we will use resolve() method after that we will apply condition with then()
// And our condition get rejected then we use catch() method

// ############ EXAMPLE 1 ###################

//first we make function 
function prom(complete){
    return new Promise(function(resolve, reject){  //we have to make function in promise here we give two parameters resolve will be used if condition will be true and reject will be used when condition will be false 
        console.log("fetching data please wait"); // this is for pending stage
        
        setTimeout(()=>{ //here we use timeout method and arrow function because to show that pending stage
            if(complete){
                resolve("I am successfull.");
            }else{
                reject("I am failed")
            }
        },2000)
    });
}
//now we make the two functions first for true and second for false "" WE can use them directly with call back functions""
// let onfulfilment = (result) => { 
//     console.log(result);  //this function is for resolve
// }
// let onRejection = (error) => {
//     console.log(error);  //this function is for reject


// And we know that this functions will not call itself we have to use inbuilt function to call back them we can give value in boolean

prom(true).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


// ############ EXAMPLE 2 for division ###################

//first we make function 
function proms(a,b){
    return new Promise(function(resolve, reject){  //we have to make function in promise here we give two parameters resolve will be used if condition will be true and reject will be used when condition will be false 
        console.log("calculating data please wait"); // this is for pending stage
        var c = a/b;
        
        setTimeout(()=>{ //here we use timeout method and arrow function because to show that pending stage
            if(a,b){
                resolve(`your answere is : ${c}`);
            }else{
                reject("caculation is failed")
            }
        },2000)
    });
}

proms(5,0).then((results) => {
    console.log(results);
}).catch((errors) => {
    console.log(errors);
});

// ############ EXAMPLE 3 for gettng data by ajax ###################

function proms(){
    return new Promise(function(resolve, reject){  //we have to make function in promise here we give two parameters resolve will be used if condition will be true and reject will be used when condition will be false 
        console.log("calculating data please wait"); // this is for pending stage
       
        setTimeout(()=>{ //here we use timeout method and arrow function because to show that pending stage
            
        },2000)
    });
}