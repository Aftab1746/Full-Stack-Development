// function waitThenGreet(name, callback) {
//   setTimeout(() => {
//     console.log("Hi " + name);
//   }, 5000); // wait 1 second
//   callback();
// }

// function niceToMeetYou(){
//  console.log("Nice to meet you!")
// }

// waitThenGreet("Ali", niceToMeetYou);


//Callback Function that takes a parameter as well

// function multiplication(x ,y ,callback){
//  const result = x * y
//  callback(result)
// }
 
// multiplication(4,6,(answer)=>{
//     console.log(`The Answer is = ${answer}`)
// })


// function processOrder(item, callback) {
//   console.log("Processing " + item + "...");
//   callback(item + " is ready!");
// }

// processOrder("Pizza", (message) => {
//   console.log(message);
// });


// function processOrder(item, successCallback, errorCallback) {
//   const inStock = false;

//   if (inStock) {
//     successCallback(item + " is ready!");
//   } else {
//     errorCallback(item + " is out of stock!");
//   }
// }

// processOrder(
//   "Pizza",
//   (message) => console.log("Success:", message),
//   (error) => console.log("Error:", error)
// );


// function checkLogin(username, password, callback) {
//   const isValid = username === "ali" && password === "1234";

//   if (isValid) {
//     callback("Login successful!");   // no error, here's the result
//   } else {
//     callback("Invalid credentials", null); // here's the error, no result
//   }
// }

// checkLogin("ali", "1234", (error, result) => {
//   if (error) {
//     console.log("Failed:", error);
//   } else {
//     console.log("Success:", result);
//   }
// });


// const promise = new Promise((resolve,reject)=>{
//    resolve("Hey it is resolve")
// })

// promise.then((data)=>{
//     console.log(data)
// })


const promise = new Promise((resolve, reject) => {
//   const success = false; // some real check, like "did the request work?"
     const success = true;
  if (success) {
    resolve("Hey it is resolve");
  } else {
    reject("Hey it is rejected");
  }
});

promise
.then((data)=>{
console.log("Success: ",data)
})
.catch((data)=>{
    console.log("Fail: ",data)
})