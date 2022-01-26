// ############# Const variable with ARRAY ###################
 const f = [12,13,14,15];
 document.write(f+ "<br>");
 f[1]=23; //In array const variable value cannot be assign new value in same variable but it can change by index value
 document.write(f + "<br>");

// ############# Const variable with OBJECT ###################

const g = {
    name: "sameer",
    age : 18
};
document.write(g.name + " " + g.age + "<br>");
g.name = "shariq"; // Even in object const variable value cannot be assign new value in same variable but it can change like this
document.write(g.name + " " + g.age + "<br>");

// ####################### FOR IN LOOP #########################

var c = {
    name: "sameer",
    age : 19,
    qualification : "Intermediate",
    email : "sameerateeq0@gmail.com"
};
for(var key in c){ //we us this to print the object otherwise we will have to print separately for example c.name 
    document.write(key + " :" + c[key] + "<br>");
}
// ##################### MAP ###########################
var d = [12,13,14,15];
document.write(d + "<br>");
var e = d.map(test)
document.write(e); // map function change the values inthe existing array and give new array
function test(x){
    return x * 10 ;
}

var a = [
    {fname : "shariq", lname : "ateeq"},
    {fname : "sameer", lname : "ateeq"},
    {fname : "arsalan", lname : "ateeq"},
];
var b = a.map(check);
document.write(b+ "<br>" );
function check(x){
    return x.fname + " " + x.lname + "<br>";
}