// ? Async funtions are a way to work with asynchronous code in amore synchronous way. They are built on top promises and are syntatic sugar for promises.

console.log("Ordering your pizza...");

// Creating a promise
const pizzaPromise = () => {
return new Promise((resolve, reject) => {
    //resolve and reject are callback funtions 
    // what is callback function?
    // A callback function is a function that is passed as an argument to another function, to be "called back" at a later time.
    let order= true;

    if (order){
        setTimeout(() => { // setTimeout is used to simulate a delay
            resolve("After 5 seconds, Pizza delivered!");
        }, 5000);
    }else {
        setTimeout(() =>{ //setTimeout is used to simulate a delay
            reject("After 5 seconds, Pizza not delivered!");
        },5000); 
            }
    
})
};
// callinf the function with a promise 
//use.then() to handle the resolve promise
//use.catch() to handle the rejected promise
pizzaPromise()
.then((result) => {
    console.log(result);
})
.catch((error) =>{
    console.log(error);
});

console.log("Waiting for your pizza....");
//Terminology
//Promise: An object that represents the eventual
//Completion (or failure) of an asynchronous operation and its resulting value
//Resolve: A callback function that is used to when the promise is fulfilled.
//Reject: A callback function that is used when the promise is rejected.
//.then(): A method that is used to handle the resolved promise.
//.catch(): A method that is used to handle the rejected promise.