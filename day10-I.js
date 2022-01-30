// ######################### SET INTERVAL & CLEAR INTERVAL #########################

//setinterval is used to aniated work here the function repeat after given time
var a =0; //we take variable 
var id= setInterval(anim,100);//here anim is function we can give anyname we want and 1000 is timer which is miliseconds 1000ms=1sec
//here we take variable of setinterval to clearinterval
function anim(){
    a= a+10;
    if(a==200){
        clearInterval(id); //here if we want marginleft move just 200px and then stop so we will use clearinterval to stop it
    }else{
        var target= document.getElementById("div"); //here we are targeting the div which we want to animated
        target.style.marginLeft=a + 'px'; //here we give two parameter 
        //we can give anything width etc
    }
    
}


// ######################### SET TIMEOUT & CLEAR TIMEOUT #########################

//set timout work like setinterval but it does not repeat 

var ids = setTimeout(function(){
    var target=document.getElementById("divs");
    target.style.width = "500px"},5000); //here we can function inside the set timout 
function stopanimation(){
    clearTimeout(ids); //here is the button function to stop set timeout function
}