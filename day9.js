// ############################      Contain() Method     ##################################
//contain method is used to check that the inner id is available in div or not for example if we have any div and it has any id and we want to find any id in the given div so we use contain method it will give ans in true or false 

var parentelement = document.getElementById("test");
//here test is parent id in the html
var target = document.getElementById("abc");
//here we are targeting the id which is child of test
var find = parentelement.contains(target);
//here we are finding that the parentelemnt contains id which is "abc" if there will be id it will give ans in true otheerwise false
console.log(find);
