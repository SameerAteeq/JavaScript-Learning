// ############## FOR EACH LOOP #####################

var a = [12,13,14,14,15];
a.forEach(each);
function each(value,Index){
    document.write(Index + ": " + value + "<br>");
    
}

// ######################## OBJECT #################################

var a= {
    fname : "muhammad",
    lname : "sameer",
    age : 19,
    favMovies: ['dhoom','the ragnarok', 'hum'],
    living : {
        'city' : 'karachi', // we can also add new object in object
    },
    salary : function(){
        return 2400; // we can add functions in the object
    },
    fullname : function(){
        return this.fname + " " + this.lname;
    }
}
console.log(a);
document.write(a['lname']+ "<br>"); // Another method to print
document.write(a.age + "<br>"); // print any index like this
document.write(a.fullname() + "<br>");  // print function like this
document.write(a.living.city+ "<br>"); // print new object like this

// ################## OBJECT METHOD 2 ###########################

var a = new Object();
a.firstName = "muhammad";
a.lastName = "shariq";
a.age = 22;
a.fullnam = function(){  //this is method 2 to write object
    return this.firstName + " " + this.lastName;
}
document.write(a.fullnam()+"<br>");

// ######################## Array of Object #############################

var a =[
    {name : 'sameer', age : 19},
    {name : 'shariq', age : 21},
    {name : 'aesalan', age : 17},
];
console.log(a);
for(var b =0; b<a.length; b++){
    document.write(a[b].name +" "+a[b].age+ "<br>"); // this method is used to write object in array and its value does not print directly we will have to give their properties name
}
