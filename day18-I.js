// ###################### FETCH API METHOD TO SAVE DATA ON SERVER  ########3#########################

//now we will learn how to save data on server
//##################   PROPERTIES   ###################3 

//  ############# 1. METHOD ######################

//when we want to insert server data so we will use "Post"
//when we want to update server data so we will use "Put"
//when we want to delete server data so we will use "Delete"
//when we want to read server data so we will use "Get" and it is default value.

//  ############# 2. BODY #####################

//In body we will pass that data which we have to save on server It can be FORM DATA / JSON DATA / OR NORMAL TEXT

//  #############  HEADER ####################

//In header we will pass the type of server of that data which we will pass through the body.
//mostly there are two types like :

//######### For JSON Data ########
//'content type' : 'application/json', it means data type is JSON

//######### For FORM Data ########

//'content type' : 'application/x-www-form-urlencoded'

//This is for inserting data
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//This is for deleting data 
//to delete the data we will guve the path of file and give the number which we have to delete which is given at the end of the file is "1"

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });

//To check window support fetch
// if(window.fetch){
//   in if condition we will run the code for new version browser
// }else{
//   in else condition we run the codd of od browser 
// }