var arr1 =[ 
    ["hello", 12, "bye"],
    ["hello", 12, "bye"],
    ["hello", 12, "bye"],
    ["hello", 12, "bye"]
];
for(var a = 0; a< arr1.length; a++){
    document.write(arr1[a]+ "<br>");
}
var salary =[
    ["sameer", 19, 30000],
    ["shariq", 19, 35000],
    ["arsalan", 19, 20000],
    ["sameer", 19, 30000]
];
document.write("salary of second person : " + salary[1][2] + "<br>");
document.write("salary of third person : " + salary[2][2] + "<br><br><br>");
var salary= [
    ["sameer", 19, 30000],
    ["shariq", 19, 35000],
    ["moiz", 19, 20000],
    ["hamza", 19, 30000]
];
for(var a =0; a<salary.length; a++){
    document.write(salary[a] + "<br>");
}
document.write("<br><br><br>");
salary[3][3] = "pakistan";
for(var a =0; a<salary.length; a++){
    document.write(salary[a] + "<br>");
}
document.write("<br><br><br>");
salary[2].push("USA","CANADA");
for(var a=0; a<salary.length; a++){
    document.write(salary[a] +"<br><br><br>" );
}

var ary =[
    ["name", "age", "qualification"],
    ["name", "age", "qualification"],
    ["name", "age", "qualification"],
    ["name", "age", "qualification"]
];
for(var a =0; a<ary.length; a++){
    document.write(ary[a] + "<br>");
}
salary.push(["sameer",19, "BSCS student"]);
for(var a =0; a<ary.length; a++){
    document.write(ary[a] + "<br>");
}
var day = 12;

switch (day) {
    case 1:
        document.write("today is monday");
        break;
    case 2:
        document.write("today is tuesday");
        break;
    case 3:
        document.write("today is wednesday");
        break;
    case 4:
        document.write("today is thursday");
        break;
    case 5:
        document.write("today is friday");
        break;
    case 6:
        document.write("today is saturday");
        break;
    case 7:
        document.write("today is sunday");
        break;

    default:
        document.write("enter the valid day");
        break;
}
let year = 2018;
let month = 3;
let daycount;

switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daycount = 31;    
      break;
     
    case 4:
    case 6:
    case 9:
    case 11:
        daycount = 30;
      break;

      case 2:
          //leap year
        if((year % 4 == 0 && !(year % 100 ==0)) || year % 400 == 0){
            daycount = 29;
        }else{
            daycount = 28;
        }
            break;
      default:
          daycount = -1;
        break;
}
document.write(daycount + "<BR><BR><BR>");

var grade = "B" ;
switch (grade){
    case "A-ONE":
        document.write("Twenty four(24) students got A-ONE grade.");
        break;
    case "A":
        document.write("Twenty (20) students got A grade.");
        break;
    case "B":
        document.write("Thirty (30) students got B grade.");
        break;
    case "C":
        document.write("Sixteen (16) students got C grade.");
        break;
    case "D":
        document.write("Ten (10) students got D grade.");
        break;
    case "E":
        document.write("Four (4) students got E grade.");
        break;
    case "F":
        document.write("Failed.");
        break;

    default:
        document.write("Sorry Not Found");
        break;
}