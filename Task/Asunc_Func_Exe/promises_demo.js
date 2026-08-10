//! syntax: function name() { return new Promise((resolve) => {...}); }
//? resolve: Callback provided by the Promise executor — calling it marks the Promise as fulfilled, letting .then() proceed
//*───────────────────────────────────────────*
function connectDb(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
         console.log("Success: The User is connected to Database.")
         resolve();
        },2000)
    })
}

function validateUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        console.log("Success: The user is validated.")
        resolve()
        },1500)
    })
}


function processPayment(){
    return new Promise((resolve)=>{
       setTimeout(()=>{
       console.log("Success: The Payment has been Proceed.")
       resolve();
       },3000)
    })
}

function updateInventory(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Success: The inventory has benn updated.")
            resolve()
        },2500)
    })
}

function sendReceipt(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Success: The receipt has been sent.")
            // resolve();
        },1000)
    })
}

function closeConnection(){
    return new Promise((resolve)=>{
       setTimeout(()=>{
        console.log("Success: The connection has been closed.")
         resolve();
       },3500)
    })
}

//! syntax: promiseFn().then(() => nextFn()).then(...);
//? .then(): Runs its callback only after the Promise before it resolves — each step waits its turn, in order
//*───────────────────────────────────────────*
// connectDb()
// .then(()=>validateUser())
// .then(()=>processPayment())
// .then(()=>updateInventory())
// .then(()=>sendReceipt())
// .then(()=>closeConnection())
// .then(()=> console.log("All operations finished.")) // Last .then() — only runs after every prior Promise has resolved

connectDb()
.then(()=>validateUser())
.then(()=>processPayment())
.then(()=>updateInventory())
.then(()=>sendReceipt())
.then(()=>closeConnection())
.then(()=> console.log("All operations finished.")) // Last .then() — only runs after every prior Promise has resolved