// ######################                  ScrollTo and ScrollBy            #############################

//<<<<   ----------------------------- For vertical ---------------------->>>> :-

// for giving the vertical scroll bar we have to give the value in the y-axis and we want to scroll upside so we will give the value in "negative-ve" otherwise "positive+ve"

//<<<<   ----------------------------- For Horizontal ----------------------------------->>>> :-

//for giving the value in the horizontal bar we have to give the value in the X-axis and we want to scroll leftside so we will give the value in "negative-ve" otherwise "positive+ve"


// #####################         scrollBy            #########################
//scrollby is work to scroll the window display 

// function scrollwindow(){
//     window.scrollBy(0,-20); //here "0" value is for X-axis and "20" is for Y-axis in "pixel(px)" 
// }


// #####################         scrollto            #########################

//scrollto is work to scroll the window display but it does not work like the scrollby 

function scrollwindow(){
    window.scrollTo(50,0);//here if we give the position it will start from absolute position for example if we give "50" on Y-axis then it will move upward and left 50px space
}