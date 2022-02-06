// ############################ Promise.all() ###############################
 // When we have multiple promises so we will use promise.all() if all the promises becomes resolve() then will use then() but only one promise get reject from all promises then we will use catch().

//  ################### EXAMPLE 1 #########################
 //now we make multiple promises

 let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("the first promise has resolved");
        resolve(10);
    }, 1 * 1000);
});
 let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("the second promise has resolved");
        resolve(20);
    }, 2 * 1000);
});
 let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("the third promise has resolved");
        resolve(30);
    }, 3 * 1000);
});

// Now we will find total of result
let total =0;
Promise.all([p1,p2,p3]).then((result)=>{
    for(let i in result){ // to print array we will use for in loop
        total += result[i];
    };
    console.log(`Total: ${total}`);
    console.log(`Result: ${result}`);
}).catch((error)=>{
    console.log(`Error : ${error}`);
});

//  ################### EXAMPLE 2 #########################

let promiseCall = function(returnData,message){ //here returndata is value which we give in te new variable like 10,20,30 and message is value of first, second
    return function(resolve,reject){
        setTimeout(()=>{
            console.log(`the ${message} promise has resolved`);
            resolve(returnData);
        }, returnData * 100); //here we give returndata value 10 when it is multiplied by 100 then it will be 1000ms
    }
};

let prom1 = new Promise(promiseCall(10,"first"));
let prom2 = new Promise(promiseCall(20,"second"));
let prom3 = new Promise(promiseCall(30,"third"));
let prom4 = new Promise(function(resolves,rejects){
    rejects('the forth has rejected') //this function is rejected then catch function will be called
});

let totals =0;
Promise.all([prom1,prom2,prom3,prom4]).then((results)=>{
    for(let e in results){ // to print array we will use for in loop
        totals += results[e];
    };
    console.log(`Total: ${totals}`);
    console.log(`Result: ${results}`);
}).catch((errors)=>{
    console.log(`Error : ${errors}`);
});