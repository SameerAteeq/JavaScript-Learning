// ######################### OBJECT LITERALS ######################################

//object literals is the shortest and cleanest way to write object 

// ############## 1st example #######################

let name = "sameer";
let course = "btech";
//old method to print object
let obj ={
    name :name,
    course : course,
};
console.log(obj);

//in ES6 version
let user = "shariq";
let classes = "bscs";
let obje ={
    user,
    classes, //if both name and property ara same so in ES6 version we can write liiie like this
};
console.log(obje); 

// ############## 2nd example #######################

let n = "student";

let ob={
    [n + "name"] :"Arsalan", //we can just take variable as a object property then it will shows the value of variable we can add any name with concatination
    batch : "BE",
    detail : function(){
        return `${this.studentname} is a student of ${this.batch};` // we can add function
    }
}
console.log(ob);
console.log(ob.detail());

// ############## 3rd example #######################

let m = "class";
let object={
    [m +"name"] : "nine",
    teacher : "sameer",
    info(){ // this is shotest mrthod to print function in object
        return `${this.classname} class is taking by teacher ${this.teacher};`

    }
}
console.log(object);
console.log(object['info']()); //this is new method to print oibject

// ############## 4th example #######################
//in this example we will create object in function
let fname = "muhammad";
let lname = "sameer";
let session = "math";

function student(){
    let fullname = fname + " " +lname;
    return {
        fullname,session
    };
}
console.log(student(fname,lname,session))