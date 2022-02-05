// ############################## ARROW FUNCTIONS #####################################

// this is the short method to write the functions first we have to take variale then take round brackets(), then =>, then we will code.

//old method to code function :-

var wel = function(name){
    return `we welcome you in the college ${name}`;
}
document.write(wel("Sameer<br>"));

// by Arrow Function to code functions 

var wel = (name,age) => `we welcome you in the college ${name}-${age}`; //we remove the brackets when we have single line code
document.write(wel("Arsalan",18 +"<br>"));

var wel = name => `we welcome you in the college ${name}`; // if we have only one parameter we can remove round brackets().
document.write(wel("Shariq<br><br>"));

