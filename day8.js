// ############################       DOCUMENT OBJECT MODEL (DOM)      ##################################

// ########## HOW TO TARGET DOM OBJECT ##################

// 1. by ID = document.getElementById(IdName) 
// 2. by CLASS NAME = document.getElemenstByClassname(Classname) 
// 3. by TAG NAME = document.getElementByTagname(Tagname) 
// 4. document.body is used to check body
// 5. document.links is used to check how many links
// 6. document.head is used to check head tag
// 7. document.image is used to check image 
// 8. document.doctype is used to check doctype
// 8. document.URL is used to check URL
// 8. document.domain is used to check domain means it shows website name only dont show .com etc

var element;
element= document.getElementById("about").getAttribute("class"); //if there so many same classes so i will have to give index number in braces[].
console.log(element);

// ########## HOW TO GET AND SET DOM VALUES ##################

//1. If we want to get text we will use ""innerText""
//1. If we want to get HTML we will use ""innerHTML""
//1. If we want to get Attrbute we will use ""getAttribute""
//1. If we want to get Attrbute we will use ""getAttributenode""
//1. If we want to get Attrbute we will use ""Attribute""

