// ############################## ARGUMENTS FUNCTIONS #####################################

//Arguments function is used to convert multiple arguments of any function for example function hello(12,32,4) here 12,32,4 are arguments in object and for print  it we have to use "FOR IN LOOP".


// ############################## REST OPERATOTS #####################################

// rest operators is used to print numeric values arguments with string value foor using rest operators we have to use three dots (...);

function sum(){
    console.log(arguments);
    let sum =0;
    for(let i in arguments){
        sum +=arguments[i];
    }
    document.write(sum);
}
sum(54,33);

// for string value we have to give two paraeters
function sum(name,...args){
    console.log(arguments);
    document.write("hello" + name);
    let sum =0;
    for(let i in args){
        sum +=args[i];
    }
    document.write(sum);
}
sum("sameer",54,33);

// ############################## SPREAD OPERATOTS #####################################
//spread operator is used to join 1 array width secod array

var array1 = [12,13,14];
var array2 =[...array1,15,16,17];
document.write(array2);
