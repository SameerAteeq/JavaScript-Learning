// ###################### ASYNC FUNCTION #################################

//when we apply async before function it becomes async function it work like a promise due to complication this function is created it is easy to read
//first method
// async function testing(){
//     return "hello world";
// }
// testing().then((result)=>{
//     console.log(result);
// });

//second method
// let test = async function(){
//     return "hello world";
// }
// test().then((results)=>{
//     console.log(results);
// });

// //third method by arrow function
// let tests = async() => "hello world";

// tests().then((data)=>{
//     console.log(data);
// });

// ###################### Await Method #################################

//await method is used in async functions it is used to keep condition in waiting for example we have async function and have three condtions if we apply apply await with second condition so the  out of function condition run then starts from this
// Await method is mostly used while getting data from the server 

// ################# EXAMPLE 1 #######################
async function check(){
    console.log("2: Message");
    let response = await fetch("json/studentdata.json"); //here this file will run after message 3 then it will run next code
    console.log("4: Message");
    console.log("5: Message");
    let students = await response.json();
    return students;
  
}
console.log("1: Message");
let a = check();
 console.log("3: Message");
 console.log(a);

 // ################# EXAMPLE 2 #######################
 async function checks(){
    // const response = await fetch("json/studentdata.json");
    // const students = await response.json();
    // return students;
    //we can write like this
    return(await fetch("json/studentdata.json")).json(); //here first we will give the path of file inside then servor type at the end
}
checks().then((res)=>{  //async function work like promise so we used then and catch function if promise will be resolve then then()function run
    console.log(res)
}).catch((error)=>{
    console.log(error);
});