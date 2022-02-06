// ############################## FETCH API ########################################

//Fetch method is used to get data, delete data, update data and read data from the servor

// ####################### EXAMPLE 1 #######################

fetch("context/readme.txt")      //here we want to read the file so we give the file path and return with then() method 
.then((response) => response.text())   //here we make function to take file context 
.then((data) =>  console.log(data)); //here we use again then() function to print response text which will come in data.
                    
// ####################### EXAMPLE 2 #######################

//Here we will use JSON fake data 


fetch("https://jsonplaceholder.typicode.com/users")    
.then((responses) => responses.json())  
.then((result) =>{
    console.log(result); //here we are printing the users in file and there are objects so we will use for in loop
    for(let x in result){
        document.write(`${result[x].name}-${result[x].email}-${result[x].address.city}<Br>`)
    }
}).catch((error => console.log("can't fetch data"))); //sometimes fetch data does not successfull so we use catch() to sow error


//####################### EXAMPLE 3 #######################

//here we will take the data which is in our system

fetch("json/studentdata.json")    //this file is in our system
.then((resp) => resp.json())  
.then((results) =>{
    console.log(results);
}).catch((errors => console.log("can't fetch data")));